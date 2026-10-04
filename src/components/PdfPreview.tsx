import { useState, useEffect, useRef, FC, JSX } from "react";

const PdfViewer: FC = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const ASPECT_RATIO = 1.414;

  useEffect(() => {
    function updateSize() {
      if (!containerRef.current) return;
      const maxWidth = containerRef.current.clientWidth;
      const width = maxWidth;
      const height = width * ASPECT_RATIO;
      setDimensions({ width, height });
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
    <div 
      className="absolute m-2 top-0 right-0 p-3 cursor-pointer bg-black text-white rounded hover:bg-gray-800"
      onClick={() => {
        window.open('https://drive.google.com/uc?export=download&id=1zflFczDpjtogSR_odUOh4wTJwst1DqMF', '_blank');
      }}
    >
      Download
    </div>

      <iframe
        src="https://drive.google.com/file/d/1zflFczDpjtogSR_odUOh4wTJwst1DqMF/preview"
        width={dimensions.width}
        height={dimensions.height}
        style={{ border: "none", display: dimensions.width ? "block" : "none" }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
