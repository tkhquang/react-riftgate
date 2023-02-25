import { useContext } from "react";
import { createPortal } from "react-dom";

import { checkIsBrowser } from "../utils";
import PortalContext from "./PortalContext";

import type { PortalProps } from "./types";

const Portal = ({ children }: PortalProps) => {
  const rootNode = useContext(PortalContext);

  if (!checkIsBrowser()) {
    return null;
  }

  return createPortal(children, rootNode || document.body);
};

export default Portal;
