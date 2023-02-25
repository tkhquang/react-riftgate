import { useLayoutEffect, useEffect } from "react";

/**
 * `React.useLayoutEffect` that fallbacks to `React.useEffect` on server side.
 */
const useSafeLayoutEffect =
  typeof window !== "undefined" && !!window.document?.createElement
    ? useLayoutEffect
    : useEffect;

export default useSafeLayoutEffect;
