
export type AboutPrevProps = {
    animatedItems: string[];
    handleMouseEnter: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
    setisopen?: (option: boolean) => void,
    setselectfxn?: (option: SidebarSection) => void
  };

export type SidebarSection = "home" | "about" | "projects" | "experience" | "education" | "featured";

export interface Project {
  title: string;           
  description: string;     
  extendedDescription?: string
  image?: string;           
  tags: string[];          
  isExpanded: boolean;     
  onetag?: string;
  link?: string
}
