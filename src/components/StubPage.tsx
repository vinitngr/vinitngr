function StubPage({ label, note }: { label: string; note: string }) {
  return (
    <section>
      <div className="flex items-center justify-between py-2.5">
        <a
          href="/"
          className="num group text-[11px] tracking-wide text-neutral-500 transition-colors hover:text-neutral-200"
        >
          <span className="mr-1.5 inline-block transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          overview
        </a>
        <span className="num text-[11px] text-neutral-600">00 entries</span>
      </div>

      <div className="groove-tb py-10">
        <p className="lbl">{label}</p>
        <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-neutral-500">
          {note}
        </p>
      </div>
    </section>
  );
}

function JournalPage() {
  return <StubPage label="journal - notes & essays" note="nothing here yet - writing soon." />;
}

function BlogsPage() {
  return <StubPage label="blog - long-form" note="nothing here yet - writing soon." />;
}

export { JournalPage, BlogsPage };
