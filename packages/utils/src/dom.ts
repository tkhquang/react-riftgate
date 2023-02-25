export function checkIsBrowser() {
  return typeof window !== "undefined" && !!window.document?.createElement;
}
