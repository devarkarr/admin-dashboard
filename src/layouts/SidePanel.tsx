import { useEffect, useState } from "react";
import { Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cx from "clsx";
import navLinks from "../assets/navLinks";
import { NavLink } from "react-router-dom";
import classes from "./styles/SidePanel.module.css";
import useCurrentNav from "../hooks/useCurrentNav";

interface Active {
  index: number;
  color: string;
}

interface SidePanelProps {
  opened: boolean;
  minOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SidePanel({
  opened,
  setOpened,
  minOpened,
}: SidePanelProps) {
  const largeScreen = useMediaQuery("(min-width: 48em)");
  const [active, setActive] = useState<Active | null>(null);
  const { currentNav } = useCurrentNav();

  useEffect(() => {
    if (currentNav) {
      setActive({
        index: navLinks.findIndex((item) => item.link === currentNav.link),
        color: currentNav.color,
      });
    }
  }, [currentNav]);

  const links = navLinks.map((item, index) => (
    <NavLink
      className={cx(classes.link, {
        [classes.currentActiveLink]: active?.index === index,
      })}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive({ index, color: item.color });
        setOpened(false);
      }}
    >
      {item.icon}
      {!minOpened && (
        <Text ml={8} fw={500}>
          {item.label}
        </Text>
      )}
    </NavLink>
  ));

  return (
    <Box
      style={{
        left: largeScreen ? 0 : opened ? 0 : "-100%",
        transition: "left 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      w={{ sm: minOpened ? 85 : 257 }}
      h="100%"
      className={classes.navbar}
    >
      <Box
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        {links}
        {active && (
          <Box
            className={cx(classes.link, classes.linkActive)}
            h={44}
            style={{ top: `calc(${active.index} * (44px + 6px))` }}
          >
            <Box className={classes.activeState} bg={active.color} />
          </Box>
        )}
      </Box>

      <Box className={classes.footer}></Box>
    </Box>
  );
}
