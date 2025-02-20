import {
  Plugin
} from "vite";

export default function test01(): Plugin {
  return {
    name: "test-01",
    configResolved() {

      // console.log(resolvedConfig, "resolvedConfig");

    }
  };
}
