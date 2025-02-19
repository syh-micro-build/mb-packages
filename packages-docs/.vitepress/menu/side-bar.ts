import siderBarJson from "../json/side-bar.json";

function getComponentsSideBar() {
  return Object.fromEntries(Object.entries(siderBarJson).map(([lang, val]) => [
    lang,
    Object.values(val).map(item => mapPrefix(item, lang, "/component"))
  ]));
}

function mapPrefix(item, lang: string, prefix = "") {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map(child => mapPrefix(child, lang, prefix))
    };
  }

  return {
    ...item,
    link: `${(lang)}${prefix}${item.link}`
  };
}

const getSidebars = () => ({
  "/component/": getComponentsSideBar()
});

const sidebars = getSidebars();

export default sidebars;
