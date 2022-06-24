import Logo from "../components/SideBar/Logo";

const routes = [
  {
    path: "/",
    label: "home",
    exact: true,
    renderInSideBar: () => <Logo />
  },
  {
    path: "/about",
    label: "About",
    exact: true,
  },
  {
    path: "/skills",
    label: "Skills",
    exact: true,
  },
  {
    path: "/projects",
    label: "Projects",
    exact: true,
  },
];

export default routes;
