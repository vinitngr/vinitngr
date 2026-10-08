import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import FeaturedCard from "./components/FeaturedCard";
import ProjectsSection from "./components/ProjectsSection";
import GithubContrib from "./components/GithubContrib";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import TechnicalSkills from "./components/TechnicalSkills";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import { JournalPage, BlogsPage } from "./components/StubPage";
import AboutPrev from "./components/AboutCard";
import { SidebarSection } from "./utils/type";
import { Mail } from "lucide-react";

const App = () => {
  const [selected, setSelected] = useState<SidebarSection>('about');
  const [route, setRoute] = useState(() => window.location.pathname);
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href="/projects"], a[href="/"], a[href^="/project/"], a[href="/journal"], a[href="/blogs"]');
      if (!a) return;
      e.preventDefault();
      const href = a.getAttribute('href')!;
      window.history.pushState(null, '', href);
      setRoute(href);
      window.scrollTo(0, 0);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const path = route.split('#')[0].split('?')[0];
  const isProjectsPage = path === '/projects' || path === '/projects/';
  const isJournalPage = path === '/journal' || path === '/journal/';
  const isBlogsPage = path === '/blogs' || path === '/blogs/';
  const isDetailPage = path !== '/project' && path !== '/project/' && path.startsWith('/project/');
  const detailSlug = isDetailPage ? path.replace(/\/+$/, '').split('/').pop() ?? '' : '';

  const go = (href: string) => {
    window.history.pushState(null, '', href);
    setRoute(href);
  };

  // land on the #anchor when present, else back to top of the scroll column
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: 'start' });
      });
    } else {
      document.getElementById('page-scroll')?.scrollTo({ top: 0 });
    }
  }, [route]);

  // header highlight follows the real route; journal/blogs live in the 4th tab
  const navSelected: SidebarSection = (isProjectsPage || isDetailPage)
    ? 'projects'
    : isJournalPage ? 'journal' : isBlogsPage ? 'blogs' : selected;
  const handleNav = (name: string) => {
    if (name === 'projects') {
      if (path !== '/projects') go('/projects');
      return;
    }
    if (name === 'experience') {
      setSelected('experience');
      if (route !== '/#experience') go('/#experience');
      else document.getElementById('experience')?.scrollIntoView();
      return;
    }
    if (path !== '/' || window.location.hash) go('/');
    setSelected(name as SidebarSection);
  };

  const noop = () => {};
  const animatedItems = ['card1','card2','card3','card4','card5','card6'];

  return (
    <div className="flex rough-bg min-h-screen">

      <div id="page-scroll" className="h-screen overflow-y-scroll w-full relative z-10">
        <div className="w-full flex justify-center px-3 sm:px-6 py-4">
          <div className="w-full max-w-[860px] flex flex-col pb-10">

            {/* plain flow on rough bg - no outer box, hairlines connect blocks */}
            <div id="top">
              <Navbar
                selected={navSelected}
                setselectfxn={handleNav}
                theme={theme}
                onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              />

              {/* identity - small photo left, compact */}

              {/* identity - small photo left, compact */}
              <div className="hair-t">
                <AboutPrev animatedItems={animatedItems} handleMouseEnter={noop} handleMouseLeave={noop} />
              </div>

              {/* stat strip - 3 joined cells, groove joints */}
              <div className="groove-tb grid grid-cols-3">
                <div className="py-4 pr-4">
                  <p className="lbl">Experience</p>
                  <p className="num text-[26px] leading-none text-zinc-100 mt-2.5">~1<span className="text-sm text-zinc-500"> yr</span></p>
                  <p className="num text-[11px] text-zinc-500 mt-2">+ backend · ai systems</p>
                </div>
                <div className="py-4 px-4 groove-l">
                  <p className="lbl">Proof</p>
                  <p className="num text-[26px] leading-none text-zinc-100 mt-2.5">#1</p>
                  <p className="num text-[11px] text-zinc-500 mt-2">+ doraHacks · codrel</p>
                </div>
                <div className="py-4 pl-4 groove-l">
                  <div className="flex items-center justify-between">
                    <p className="lbl">Status</p>
                    <a
                      href="mailto:vinitnagar56@gmail.com"
                      title="Email me at vinitnagar56@gmail.com"
                      className="text-zinc-600 transition-colors hover:text-zinc-100"
                    >
                      <Mail className="size-3.5" />
                    </a>
                  </div>
                  <p className="num text-[26px] leading-none text-zinc-100 mt-2.5 flex items-center gap-2">
                    <span className="inline-block size-2 rounded-full bg-emerald-500" /> Open
                  </p>
                  <p className="num text-[11px] text-zinc-500 mt-2">full-time · intern · freelance</p>
                </div>
              </div>

              {/* featured - its own rough box, daylight between blocks */}
              {isDetailPage ? (
                <div className="mt-5">
                  <ProjectDetailPage slug={detailSlug} />
                </div>
               ) : isProjectsPage ? (
                 <div className="mt-5">
                   <ProjectsPage />
                 </div>
               ) : isJournalPage ? (
                 <div className="mt-5">
                   <JournalPage />
                 </div>
               ) : isBlogsPage ? (
                 <div className="mt-5">
                   <BlogsPage />
                 </div>
               ) : (
                <>
                  <div className="mt-5 mb-2">
                    <FeaturedCard animatedItems={animatedItems} handleMouseEnter={noop} handleMouseLeave={noop} />
                  </div>

                  {/* skills - continuous badge cloud right after featured */}
                  <div className="mt-5">
                    <TechnicalSkills />
                  </div>

                  {/* projects - top 2 preview, full archive on /projects */}
                  <div className="mt-5">
                    <ProjectsSection />
                  </div>

                  {/* experience - right after projects */}
                  <div className="mt-5">
                    <ExperienceSection />
                  </div>

                  {/* education + certification - one connected block */}
                  <div className="mt-5">
                    <EducationSection />
                  </div>

                  {/* contributions - closing proof, direct on background */}
                  <div className="mt-5">
                    <GithubContrib />
                  </div>
                </>
              )}
            </div>

            <footer className="mt-4 flex items-center justify-between px-1 text-[11px] num text-zinc-600">
              <span>vinitngr © 2026</span>
              <span>vinitnagar56@gmail.com</span>
            </footer>
          </div>
        </div>
      </div>

      {/* version switcher — tiny text toggler, bottom-right */}
      <div className="num fixed bottom-2 right-3 z-50 flex items-center gap-1.5 text-[10px] tracking-wide text-zinc-700 opacity-70 transition-opacity hover:opacity-100">
        <a href="https://portfolio1st.itsvinit.me" title="portfolio v1" className="transition-colors hover:text-zinc-300">v1</a>
        <span>·</span>
        <a href="https://portfolio2nd.itsvinit.me" title="portfolio v2" className="transition-colors hover:text-zinc-300">v2</a>
        <span>·</span>
        <span title="you are here — portfolio v3" className="text-zinc-500">v3</span>
      </div>
    </div>
  );
};

export default App;
