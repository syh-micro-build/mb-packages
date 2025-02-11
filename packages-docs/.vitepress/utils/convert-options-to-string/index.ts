export default function convertOptionsToString(obj: Object): string {
  const parts: string[] = [];

  for (const [key, value] of Object.entries(obj)) {

    // 将键值对以 key="value" 的形式添加到 parts 数组中
    parts.push(`${key}="${value}"`);
  }

  // 使用空格将 parts 数组中的元素连接成一个字符串
  return parts.join(" ");
}
