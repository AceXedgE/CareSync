import type React from "react"
import { useRef } from "react"

export const handleDragOver = (
  e: React.DragEvent<HTMLDivElement>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault()
  setIsDragging(true)
}

export const handleDragLeave = (
  e: React.DragEvent<HTMLDivElement>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault()
  setIsDragging(false)
}

export const handleDrop = (
  e: React.DragEvent<HTMLDivElement>,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>,
  callback: (file: File) => void
) => {

  e.preventDefault()
  setIsDragging(false)

  const files = e.dataTransfer.files

  if (files && files.length > 0) {
    callback(files[0])
  }
}




export const useFileChooser = (onFileChosen: (file: File) => void) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleChooseFile = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onFileChosen(file);
            e.target.value = ''; // reset so same file can be re-selected
        }
    };
    const fileInputProps = {
        type: 'file' as const,
        accept: 'image/*',
        ref: fileInputRef,
        style: { display: 'none' },
        onChange: handleFileChange,
    };

    return { handleChooseFile, fileInputProps };
};