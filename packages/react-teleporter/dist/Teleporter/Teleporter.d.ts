import type { TeleporterTargetProps, TeleporterDomainProps } from "./types";
declare const Teleporter: {
    Target: ({ component: Component, portkey, ...props }: TeleporterTargetProps) => JSX.Element;
    Domain: ({ portkey, children }: TeleporterDomainProps) => JSX.Element | null;
    Attach: ({ children }: {
        children?: import("react").ReactNode;
    }) => import("react").ReactPortal | null;
};
export default Teleporter;
