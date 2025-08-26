import { useState } from "react";

interface ImagePreviewProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  project?: boolean;
  extendedImages?: string[]; // required if project=true
}

export default function ImagePreview({
  src,
  alt,
  className,
  project = false,
  extendedImages = [],
  ...props
}: ImagePreviewProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = project ? extendedImages : [src];

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => {
          setCurrentIndex(0);
          setOpen(true);
        }}
        {...props}
      />
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-2xl flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-orange-500 border-2 text-white flex items-center justify-center text-lg font-bold cursor-pointer"
              onClick={() => setOpen(false)}
            >
              ×
            </span>



            <img
              src={images[currentIndex]}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] transition-opacity duration-300"
              key={images[currentIndex]}
            />

            {project && images.length > 1 && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  className="px-3 py-1 text-white bg-black/30 backdrop-blur-sm rounded-md hover:bg-black/50 transition"
                  onClick={prevImage}
                >
                  ‹
                </button>
                <button
                  className="px-3 py-1 text-white bg-black/30 backdrop-blur-sm rounded-md hover:bg-black/50 transition"
                  onClick={nextImage}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
