import { useState } from "react";

interface ImagePreviewProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

export default function ImagePreview({ src, alt, className, ...props }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setOpen(true)}
        {...props}
      />
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-2xl bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="bg-orange-500 border-2 text-white"
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                borderRadius: "50%",
                padding: "5px 10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ×
            </span>
            <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw]" />
          </div>
        </div>
      )}
    </>
  );
}
