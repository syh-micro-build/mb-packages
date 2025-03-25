/**
 * 根据组件路径组合组件引用名称
 * @param path
 * @returns
 */
const composeComponentName = (path: string): string => {
  let isFlag = true;

  const componentList: string[] = [];

  while (isFlag) {
    const lastIndex = path.lastIndexOf("/");

    if (lastIndex === -1) {
      isFlag = false;
    } else {
      const name = path.substring(lastIndex + 1);

      componentList.unshift(name);
      path = path.substring(0, lastIndex);
    }
  }

  return `Temp${ btoa(encodeURIComponent(componentList.join("-").split(".").
      slice(0, -1).
      join("."))).replace(/=/g, "Equal")}`;
};

export default composeComponentName;
