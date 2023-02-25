import React, { createContext } from "react";

import type { TeleporterContextValue } from "./types";

const TeleporterContext = createContext<TeleporterContextValue>({
  state: new Map([]),
  setState: () => {},
});

export default TeleporterContext;
