import { JSX, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import navLinks from "../assets/navLinks";

interface CurrentNav {
  link: string;
  label: string;
  title: string;
  icon: JSX.Element;
  color: string;
}

export default function useCurrentNav() {
  const { pathname } = useLocation();
  const [currentNav, setCurrentNav] = useState<CurrentNav | null>(null);

  useEffect(() => {
    const pathArray = pathname.split("/");

    setCurrentNav(navLinks.filter(({ link }) => pathArray.includes(link))[0]);
  }, [pathname, navLinks]);

  return { currentNav };
}
