import { useLayoutEffect } from "react";
/**
 * `React.useLayoutEffect` that fallbacks to `React.useEffect` on server side.
 */
declare const useSafeLayoutEffect: typeof useLayoutEffect;
export default useSafeLayoutEffect;
