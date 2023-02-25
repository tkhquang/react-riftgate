import { useState } from "react";

import TeleporterContext from "./TeleporterContext";

import type { TeleporterContextValue, TeleporterProviderProps } from "./types";

function TeleporterProvider({ children }: TeleporterProviderProps) {
  const [state, setState] = useState<TeleporterContextValue["state"]>(
    new Map([]),
  );

  return (
    <TeleporterContext.Provider value={{ state, setState }}>
      {children}
    </TeleporterContext.Provider>
  );
}

export default TeleporterProvider;
