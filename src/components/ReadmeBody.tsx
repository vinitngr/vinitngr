import { useEffect, useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

function repoFromUrl(url?: string): string | null {
  if (!url) return null;
  const m = url.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git)?\/?$/);
  return m ? m[1] : null;
}

async function fetchReadme(repo: string): Promise<{ branch: string; text: string }> {
  for (const branch of ["main", "master"]) {
    const res = await fetch(`https://raw.githubusercontent.com/${repo}/${branch}/README.md`);
    if (res.ok) return { branch, text: await res.text() };
  }
  throw new Error("readme not found");
}

// page already shows the title - drop the readme's own H1 so it doesn't repeat
function stripFirstH1(md: string): string {
  return md.replace(/^#\s+.+(\r?\n|$)/, "");
}

function ReadmeBody({ githubUrl, fallback }: { githubUrl?: string; fallback?: React.ReactNode }) {
  const repo = repoFromUrl(githubUrl);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [branch, setBranch] = useState("main");
  const [text, setText] = useState("");

  useEffect(() => {
    if (!repo) {
      setStatus("error");
      return;
    }
    let live = true;
    setStatus("loading");
    fetchReadme(repo)
      .then(({ branch, text }) => {
        if (!live) return;
        setBranch(branch);
        setText(text);
        setStatus("ready");
      })
      .catch(() => {
        if (live) setStatus("error");
      });
    return () => {
      live = false;
    };
  }, [repo]);

  if (status === "error" || !repo) {
    if (!fallback) return null;
    return (
      <div className="groove-t mt-6 pt-6 text-[14px] leading-[1.75] text-neutral-400">{fallback}</div>
    );
  }

  if (status !== "ready") {
    return (
      <p className="num groove-t mt-6 pt-6 text-[12px] text-neutral-500">
        fetching readme from github…
      </p>
    );
  }

  const rawBase = `https://raw.githubusercontent.com/${repo}/${branch}/`;
  const blobBase = `https://github.com/${repo}/blob/${branch}/`;
  const resolveUrl = (uri: string, base: string) =>
    /^(https?:|mailto:|#|data:)/.test(uri) ? uri : base + uri.replace(/^\.\//, "");

  const components: Components = {
    h1: ({ children }) => (
      <h1 className="mb-3 mt-7 text-[20px] font-semibold tracking-tight text-neutral-100">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-7 text-[18px] font-semibold tracking-tight text-neutral-100">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-6 text-[15.5px] font-semibold tracking-tight text-neutral-100">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="my-3 text-[14px] leading-[1.8] text-neutral-400">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={resolveUrl(href ?? "", blobBase)}
        target="_blank"
        rel="noreferrer"
        className="text-amber-200/90 hover:text-amber-100"
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <img
        src={resolveUrl(src ?? "", rawBase)}
        alt={alt ?? ""}
        loading="lazy"
        className="my-4 w-full border border-[#26272d] bg-[#0b0b0d]"
      />
    ),
    ul: ({ children }) => (
      <ul className="my-3 list-disc space-y-1.5 pl-5 text-[14px] leading-[1.75] text-neutral-400">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-3 list-decimal space-y-1.5 pl-5 text-[14px] leading-[1.75] text-neutral-400">{children}</ol>
    ),
    li: ({ children }) => <li className="pl-1 marker:text-neutral-600">{children}</li>,
    code: ({ children }) => {
      const block = String(children).includes("\n");
      return block ? (
        <code>{children}</code>
      ) : (
        <code className="num border border-[#2a2b31] bg-white/[0.03] px-1.5 py-0.5 text-[12px] text-neutral-200">
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="num my-4 overflow-x-auto border border-[#26272d] bg-[#0b0b0d] p-4 text-[12.5px] leading-relaxed text-neutral-300">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <table className="my-4 block overflow-x-auto text-[13px] text-neutral-400">{children}</table>
    ),
    th: ({ children }) => (
      <th className="border border-[#26272d] px-3 py-2 text-left font-semibold text-neutral-200">{children}</th>
    ),
    td: ({ children }) => <td className="border border-[#26272d] px-3 py-2">{children}</td>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-2 border-amber-400/40 pl-4 text-neutral-400">{children}</blockquote>
    ),
    hr: () => <hr className="my-6 border-[#26272d]" />,
    strong: ({ children }) => <strong className="font-semibold text-neutral-200">{children}</strong>,
  };

  return (
    <div className="groove-t mt-6 pt-2">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {stripFirstH1(text)}
      </ReactMarkdown>
    </div>
  );
}

export default ReadmeBody;
