const GridPattern = () => (
    <svg className="absolute bottom-0 right-0 w-20 h-20 opacity-10 pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 5 }).map((_, row) => (
        Array.from({ length: 5 }).map((_, col) => (
          <circle key={`circle-${row}-${col}`} cx={10 + col * 15} cy={10 + row * 15} r="2" fill="currentColor" />
        ))
      ))}
    </svg>
  );
  
  export default GridPattern;
  