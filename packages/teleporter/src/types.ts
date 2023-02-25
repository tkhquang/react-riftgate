type NodesMap = Map<string, HTMLElement>;

export type TeleporterContextValue = {
  state: NodesMap;
  setState: React.Dispatch<React.SetStateAction<NodesMap>>;
};

export type TeleporterProviderProps = React.PropsWithChildren<{}>;

export type TeleporterGateComponentProps =
  React.ComponentPropsWithRef<"div"> & {
    "data-portKey": string;
  };

export type TeleporterGateProps<T = TeleporterGateComponentProps> =
  React.PropsWithChildren<
    Omit<TeleporterGateComponentProps, "data-portKey"> & {
      component?: React.ComponentType<T>;
      portKey: string;
    }
  >;

export type TeleporterDomainProps = React.PropsWithChildren<{
  portKey?: string | null | undefined;
}>;
