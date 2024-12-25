import { Suspense, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AppShell } from "@mantine/core";
import classes from "./styles/App.module.css";
import AppHeader from "./AppHeader";
import SidePanel from "./SidePanel";

export default function App() {
  const [navOpened, setNavOpened] = useState(false);
  const [minNavOpened,setMinNavOpened] = useState(false)

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: minNavOpened ? 80 : 260,
        breakpoint: "sm",
        collapsed: { mobile: !navOpened },
      }}
      classNames={{
        root: classes.root,
        main: classes.main,
      }}
    >
      <AppShell.Header>
        <AppHeader opened={navOpened} setOpened={setNavOpened} minOpened={minNavOpened} setMinOpened={setMinNavOpened}/>
      </AppShell.Header>

      <AppShell.Navbar className={classes.nav}>
        <SidePanel opened={navOpened} setOpened={setNavOpened} minOpened={minNavOpened} />
      </AppShell.Navbar>

      <AppShell.Main id="main-content" className={classes.content}>
        <Suspense fallback={<div>loader</div>}>
          <Outlet />
        </Suspense>
      </AppShell.Main>

      <ScrollRestoration />
    </AppShell>
  );
}
