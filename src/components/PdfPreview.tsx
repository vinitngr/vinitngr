import React, { useState, useEffect, useRef } from "react";

const PdfViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Typical PDF aspect ratio ~ 1:1.414 (A4 paper)
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
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'vinit_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
    >
      Download
    </div>

      <iframe
        src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
        width={dimensions.width}
        height={dimensions.height}
        style={{ border: "none", display: dimensions.width ? "block" : "none" }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
