import { useState, useContext, useCallback, forwardRef } from "react";

import { PortalContext, Portal } from "../Portal";
import { useSafeLayoutEffect } from "../hooks";

import TeleporterContext from "./TeleporterContext";

import type {
  TeleporterTargetProps,
  TeleporterDomainProps,
  TeleporterTargetComponentProps,
} from "./types";

const DefaultComponent = forwardRef<
  HTMLDivElement,
  TeleporterTargetComponentProps
>((props, ref) => {
  return <div {...props} ref={ref} />;
});

const Target = ({
  component: Component = DefaultComponent,
  portkey,
  ...props
}: TeleporterTargetProps) => {
  const { setState } = useContext(TeleporterContext);

  const refCallback = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        setState((prevState) => prevState.set(portkey, node));
      }
    },
    [setState]
  );

  return <Component ref={refCallback} data-portkey={portkey} {...props} />;
};

const Domain = ({ portkey = null, children }: TeleporterDomainProps) => {
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);
  const { state } = useContext(TeleporterContext);

  useSafeLayoutEffect(() => {
    if (portkey === null) {
      return;
    }

    if (!state.has(portkey)) {
      return;
    }

    setTargetNode(state.get(portkey) as HTMLElement);
  }, [portkey, setTargetNode, state]);

  if (portkey === null) {
    return (
      <PortalContext.Provider value={null}>{children}</PortalContext.Provider>
    );
  }

  if (!targetNode) {
    return null;
  }

  return (
    <PortalContext.Provider value={targetNode}>
      {children}
    </PortalContext.Provider>
  );
};

const Attach = Portal;

const Teleporter = {
  Target: Target,
  Domain: Domain,
  Attach: Attach,
};

export default Teleporter;
