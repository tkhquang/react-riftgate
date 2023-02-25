type NodesMap = Map<string, HTMLElement>;
export type TeleporterContextValue = {
    state: NodesMap;
    setState: React.Dispatch<React.SetStateAction<NodesMap>>;
};
export type TeleporterProviderProps = React.PropsWithChildren<{}>;
export type TeleporterTargetComponentProps = React.ComponentPropsWithRef<"div"> & {
    "data-portkey": string;
};
export type TeleporterTargetProps<T = TeleporterTargetComponentProps> = React.PropsWithChildren<Omit<TeleporterTargetComponentProps, "data-portkey"> & {
    component?: React.ComponentType<T>;
    portkey: string;
}>;
export type TeleporterDomainProps = React.PropsWithChildren<{
    portkey?: string | null;
}>;
export {};
