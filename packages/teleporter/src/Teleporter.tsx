import { useState, useContext, useCallback, forwardRef } from "react";
import { PortalContext, Portal } from "@react-riftgate/portal";
import { useSafeLayoutEffect } from "@react-riftgate/hooks";

import TeleporterContext from "./TeleporterContext";

import type {
  TeleporterGateProps,
  TeleporterDomainProps,
  TeleporterGateComponentProps,
} from "./types";

const DefaultComponent = forwardRef<
  HTMLDivElement,
  TeleporterGateComponentProps
>((props, ref) => {
  return <div {...props} ref={ref} />;
});

const Gate = ({
  component: Component = DefaultComponent,
  portKey,
  ...props
}: TeleporterGateProps) => {
  const { setState } = useContext(TeleporterContext);

  const refCallback = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        setState((prevState) => prevState.set(portKey, node));
      }
    },
    [setState],
  );

  return <Component ref={refCallback} data-portkey={portKey} {...props} />;
};

const Domain = ({ portKey = null, children }: TeleporterDomainProps) => {
  const [targetNode, setGateNode] = useState<HTMLElement | null>(null);
  const { state } = useContext(TeleporterContext);

  useSafeLayoutEffect(() => {
    if (portKey === null) {
      return;
    }

    if (!state.has(portKey)) {
      return;
    }

    setGateNode(state.get(portKey) as HTMLElement);
  }, [portKey, setGateNode, state]);

  if (portKey === null) {
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

const Move = Portal;

const Teleporter = {
  Gate: Gate,
  Domain: Domain,
  Move: Move,
};

export default Teleporter;
