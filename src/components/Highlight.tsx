
function Highlight({ children } : { children: React.ReactNode }) {
  return (
    <span className="text-yellow-600 cursor-pointer underline">
      &lt;{children}&gt;
    </span>
  );
}
export default Highlight