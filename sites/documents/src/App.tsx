import { TeleporterProvider, Teleporter } from "@tkhquang/react-teleporter";

function App() {
  return (
    <TeleporterProvider>
      <Teleporter.Target portkey="LAYER-1" style={{ backgroundColor: "red" }}>
        LAYER-1
      </Teleporter.Target>
      <Teleporter.Target portkey="LAYER-2" style={{ backgroundColor: "green" }}>
        LAYER-2
      </Teleporter.Target>
      <Teleporter.Target portkey="LAYER-3" style={{ backgroundColor: "blue" }}>
        LAYER-3
      </Teleporter.Target>
      <Teleporter.Target
        portkey="LAYER-4"
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        LAYER-4
      </Teleporter.Target>
      <Teleporter.Domain portkey="LAYER-1">
        <div>This should be rendered in `document.body #1`</div>
        <Teleporter.Domain portkey="LAYER-4">
          <Teleporter.Attach>
            <div>This should be rendered in `LAYER-4 #1`</div>
          </Teleporter.Attach>
          <div>This should be rendered in `document.body #2`</div>
        </Teleporter.Domain>
        <Teleporter.Attach>
          <div>This should be rendered in `LAYER-1 #1`</div>
        </Teleporter.Attach>
        <div>This should be rendered in `document.body #3`</div>
      </Teleporter.Domain>
      <Teleporter.Domain portkey="LAYER-3">
        <Teleporter.Attach>
          <div>This should be rendered in `LAYER-3 #1`</div>
        </Teleporter.Attach>
        <div>This should be rendered in `document.body #4`</div>
      </Teleporter.Domain>
      <Teleporter.Domain portkey="LAYER-2">
        <Teleporter.Attach>
          <div>This should be rendered in `LAYER-2 #1`</div>
          <Teleporter.Domain>
            <div>This should be rendered in `document.body #5`</div>
          </Teleporter.Domain>
        </Teleporter.Attach>
        <div>This should be rendered in `document.body #6`</div>
      </Teleporter.Domain>
    </TeleporterProvider>
  );
}

export default App;
