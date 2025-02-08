import {
  resolve
} from "path";

const projRoot = resolve(__dirname, "..", "..", "..", "..");

// Docs
const docsDirName = "packages-docs";

const docRoot = resolve(projRoot, docsDirName);

export default docRoot;
