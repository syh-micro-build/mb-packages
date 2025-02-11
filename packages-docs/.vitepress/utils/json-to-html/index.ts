import convertOptionsToString from "../convert-options-to-string";

export default function jsonToHtml(value: string): string {

  const data = JSON.parse(value);

  const str = convertOptionsToString(data?.options);

  return `<${data.type} ${str}>
  ${data.label}
</${data.type}>`;
}
