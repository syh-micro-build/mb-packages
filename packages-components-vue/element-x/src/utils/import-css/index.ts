export default async function importCss(): Promise<boolean> {
  try {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await import("element-plus/dist/index.css");

    return true;
  } catch (error) {
    console.error("Failed to import CSS:", error);

    return false;
  }
}
