import { IconDashboard, IconUserCircle } from "@tabler/icons-react";

const navLinks = [
  {
    link: "dashboard",
    label: "Dashboard",
    title: "Dashboard",
    icon: <IconDashboard color="var(--color-fary)" />,
    color: "var(--color-fary)",
  },
  {
    link: "users",
    label: "Users",
    title: "Users",
    icon: <IconUserCircle color="var(--accent-danger)" />,
    color: "var(--accent-danger)",
  },
];

export default navLinks;
