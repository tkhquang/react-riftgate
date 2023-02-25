import { createContext } from "react";

import type { PortalContextValue } from "./types";

const PortalContext = createContext<PortalContextValue>(null);

export default PortalContext;
