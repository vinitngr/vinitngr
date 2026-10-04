import GitHubCalendar from "react-github-calendar";

function GithubContrib() {
  return (
    <section>
      <div className="flex items-center justify-between py-2.5">
        <span className="lbl">github - contribution graph</span>
        <a
          href="https://github.com/vinitngr"
          target="_blank"
          rel="noreferrer"
          className="num group text-[12px] font-medium tracking-wide text-neutral-100 transition-colors hover:text-white"
        >
          @vinitngr
          <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
      </div>

      <div className="contrib-rough overflow-x-auto pb-6 [&_text]:fill-[#71717a]">
        <div className="mx-auto w-fit">
          <GitHubCalendar
            username="vinitngr"
            year="last"
            colorScheme="dark"
            blockSize={12.3}
            blockMargin={4}
            blockRadius={0}
            fontSize={12}
            labels={{ totalCount: "{{count}} contributions in the last year" }}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["transparent", "#0c2b1a", "#0f5c31", "#1a8a46", "#35c46a"],
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default GithubContrib;
