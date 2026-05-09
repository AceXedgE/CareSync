import { Link } from "react-router";
import { useOutletContext } from "react-router";
import type { SignUpOutletContext } from "../../AuthHandles/handles";

function PreviewField({ label, value }: { label: string; value: string }) {
  return (
    <div className="PreviewField">
      <span className="PreviewFieldLabel">{label}</span>
      <span className="PreviewFieldValue">
        {value || <span className="PreviewFieldEmpty">—</span>}
      </span>
    </div>
  );
}

function PreviewImageBox({
  label,
  file,
  icon,
}: {
  label: string;
  file: File | null;
  icon: string;
}) {
  const url = file ? URL.createObjectURL(file) : null;

  return (
    <div className="PreviewImageBox">
      {url ? (
        <img src={url} alt={label} className="PreviewImageThumb" />
      ) : (
        <div className="PreviewImagePlaceholder">
          <span className="PreviewImageIcon">{icon}</span>
        </div>
      )}
      <span className="PreviewImageLabel">{label}</span>
      {file && <span className="PreviewImageFileName">{file.name}</span>}
    </div>
  );
}

function CertificationPreview({ file }: { file: File | null }) {
  if (!file) {
    return (
      <div className="CertPreviewEmpty">
        <span className="CertPreviewEmptyIcon">📄</span>
        <span className="CertPreviewEmptyText">No certification uploaded</span>
      </div>
    );
  }

  const url = URL.createObjectURL(file);
  const fileSizeKB = (file.size / 1024).toFixed(1);
  const isImage = file.type.startsWith("image/");
  const ext = file.name.split(".").pop()?.toUpperCase() ?? "FILE";

  return (
    <div className="CertPreviewCard">
      <div className="CertPreviewLeft">
        {isImage ? (
          <img src={url} alt="Certification" className="CertPreviewThumb" />
        ) : (
          <div className="CertPreviewBadge">
            <span className="CertPreviewBadgeText">{ext}</span>
          </div>
        )}
      </div>
      <div className="CertPreviewRight">
        <span className="CertPreviewLabel">Proof of Certification</span>
        <span className="CertPreviewFileName">{file.name}</span>
        <span className="CertPreviewSize">{fileSizeKB} KB</span>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="CertPreviewViewLink"
        >
          View Document ↗
        </a>
      </div>
    </div>
  );
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="PreviewSectionDivider">
      <span className="PreviewSectionDividerLabel">{title}</span>
    </div>
  );
}

function SignUpPreview() {
  const { formData } = useOutletContext<SignUpOutletContext>();

  const fullName = [formData.fname, formData.othername, formData.lname]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="SignUpFormSection">
      <div className="SignUpFormTitle">Review Your Information</div>
      <div className="SignUpFormSubtitle">
        Step 4: Please confirm all your details before submitting.
      </div>

      {/* Profile photo summary */}
      <div className="PreviewProfileHeader">
        <div className="PreviewAvatarWrap">
          {formData.profileImg ? (
            <img
              src={URL.createObjectURL(formData.profileImg)}
              alt="Profile"
              className="PreviewAvatar"
            />
          ) : (
            <div className="PreviewAvatarFallback">
              {formData.fname?.[0]?.toUpperCase() || "?"}
            </div>
          )}
          <span className="PreviewAvatarBadge">✓</span>
        </div>
        <div className="PreviewProfileMeta">
          <div className="PreviewProfileName">{fullName || "—"}</div>
          <div className="PreviewProfileEmail">{formData.email || "—"}</div>
        </div>
      </div>

      {/* ── Personal Information ── */}
      <SectionDivider title="Personal Information" />
      <div className="PreviewGrid">
        <PreviewField label="First Name" value={formData.fname} />
        <PreviewField label="Last Name" value={formData.lname} />
        <PreviewField label="Other Name" value={formData.othername} />
        <PreviewField label="Email Address" value={formData.email} />
        <PreviewField label="Phone Number" value={formData.phoneNumber} />
        <PreviewField
          label="Password"
          value={formData.password ? "••••••••" : ""}
        />
      </div>

      {/* ── Uploaded Documents ── */}
      <SectionDivider title="Uploaded Documents" />
      <div className="PreviewImageRow">
        <PreviewImageBox
          label="Profile Photo"
          file={formData.profileImg}
          icon="👤"
        />
        <PreviewImageBox
          label="Place / Clinic Photo"
          file={formData.placeImg}
          icon="🏥"
        />
        <PreviewImageBox
          label="Ghana Card"
          file={formData.ghanacardImg}
          icon="🪪"
        />
        <CertificationPreview file={formData.proofOfCertification} />
      </div>

      {/* ── Practice / Place Details ── */}
      <SectionDivider title="Practice Details" />
      <div className="PreviewGrid">
        <PreviewField label="Place / Clinic Name" value={formData.placeName} />
        <PreviewField label="Location" value={formData.placeLocation} />
      </div>
      <div className="PreviewImageRow" style={{ marginTop: 12 }}></div>

      {/* ── Biography ── */}
      <SectionDivider title="Biography" />
      <div className="PreviewBiography">
        {formData.biography ? (
          <p className="PreviewBiographyText">{formData.biography}</p>
        ) : (
          <p className="PreviewFieldEmpty">No biography provided.</p>
        )}
      </div>

      {/* ── Actions ── */}
      <div className="PreviewActions">
        <Link to="../step3" state={{ currentStep: 3 }} className="link">
          <button className="BackButtonAlt btn">← Back</button>
        </Link>
        <button
          className="SignUpButton btn PrimaryWideButton"
          style={{ flex: 1 }}
          type="button"
          onClick={() => {
            /* wire up your submit handler here */
          }}
        >
          Submit Registration ✓
        </button>
      </div>

      <p className="SecureNote">
        🔒 Your information is encrypted and stored securely.
      </p>
    </div>
  );
}

export default SignUpPreview;
