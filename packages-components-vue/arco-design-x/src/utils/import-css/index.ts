export default async function importCss(): Promise<boolean> {
  try {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await import("@arco-design/web-vue/dist/arco.css");

    return true;
  } catch (error) {
    console.error("Failed to import CSS:", error);

    return false;
  }
}
