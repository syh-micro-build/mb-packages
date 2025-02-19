import path from "path";

export default function nodeWriteFile() {
  const rootDir = path.resolve(__dirname);

  // eslint-disable-next-line no-console
  console.log(rootDir);
}
