import Webcam from "react-webcam";
import { useState, useRef, useCallback } from "react";

interface WebcamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (imageSrc: string) => void;
}

export default function WebcamModal({
  isOpen,
  onClose,
  onSave,
}: WebcamModalProps) {
  const [tempImg, setTempImg] = useState<string | null>(null);
  const [mode, setMode] = useState<"choice" | "webcam">("choice");
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setTempImg(imageSrc);
      }
    }
  }, [webcamRef]);

  const handleChoosePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setTempImg(result);
        setMode("webcam");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartCapture = () => {
    setMode("webcam");
    setTempImg(null);
  };

  const handleSave = () => {
    if (tempImg) {
      onSave(tempImg);
      setTempImg(null);
      setMode("choice")
    }
  };

  const handleClose = () => {
    setTempImg(null);
    setMode("choice");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.35)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 32,
          minWidth: 340,
          minHeight: mode === "choice" ? 280 : 420,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {mode === "choice" ? (
          // Choice Screen
          <>
            <h3
              style={{
                marginBottom: 24,
                color: "#222b45",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              How would you like to add a photo?
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                width: "100%",
              }}
            >
              <button
                type="button"
                onClick={handleChoosePhoto}
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                📁 Choose Photo
              </button>
              <button
                type="button"
                onClick={handleStartCapture}
                style={{
                  background: "#f3f4f6",
                  color: "#222b45",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                📷 Capture Photo
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
          </>
        ) : (
          // Webcam/Preview Screen
          <>
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: "50%",
                overflow: "hidden",
                background: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 18,
              }}
            >
              {tempImg ? (
                <img
                  src={tempImg}
                  alt="Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    width: 400,
                    height: 400,
                    facingMode: "user",
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>

            <div style={{ display: "flex", gap: 16 }}>
              {!tempImg ? (
                <>
                  <button
                    type="button"
                    onClick={handleCapture}
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 24px",
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                  >
                    Capture
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("choice")}
                    style={{
                      background: "#f3f4f6",
                      color: "#222b45",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 24px",
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                  >
                    Back
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleSave}
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 24px",
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setTempImg(null)}
                    style={{
                      background: "#f3f4f6",
                      color: "#222b45",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 24px",
                      fontWeight: 600,
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                  >
                    Retake
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
