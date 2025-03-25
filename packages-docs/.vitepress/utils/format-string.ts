export default function formatString(value: string): string {
  return value.replace(/'/g, "\"").
      replace(/\\n/g, "").
      trim().
      replace(/^"/, "").
      replace(/"$/, "").
      replace(/,(\s)*\}$/, "}").
      replace(/,(\s)*\]$/, "]");
}
