export function assetPath(path: string) {
  return `${process.env.GITHUB_PAGES === "true" ? "/andreacarniti" : ""}${path}`;
}
