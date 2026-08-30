export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? "/portfolio" : ""}${path}`;
}
