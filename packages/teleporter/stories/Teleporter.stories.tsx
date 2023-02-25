import React from 'react';
import styled, { x } from "@xstyled/styled-components";

import { TeleporterProvider, Teleporter } from "../src";

export default {
  title: "Teleporter",
  decorators: [(story: Function) => <x.div>{story()}</x.div>]
};

export const Basic = () => {
  return (
    <TeleporterProvider>
      <Teleporter.Gate portKey="LAYER-1" style={{ backgroundColor: "red" }}>
        LAYER-1
      </Teleporter.Gate>
      <Teleporter.Gate portKey="LAYER-2" style={{ backgroundColor: "green" }}>
        LAYER-2
      </Teleporter.Gate>
      <Teleporter.Gate portKey="LAYER-3" style={{ backgroundColor: "blue" }}>
        LAYER-3
      </Teleporter.Gate>
      <Teleporter.Gate
        portKey="LAYER-4"
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        LAYER-4
      </Teleporter.Gate>
      <Teleporter.Domain portKey="LAYER-1">
        <div>This should be rendered in `document.body #1`</div>
        <Teleporter.Domain portKey="LAYER-4">
          <Teleporter.Move>
            <div>This should be rendered in `LAYER-4 #1`</div>
          </Teleporter.Move>
          <div>This should be rendered in `document.body #2`</div>
        </Teleporter.Domain>
        <Teleporter.Move>
          <div>This should be rendered in `LAYER-1 #1`</div>
        </Teleporter.Move>
        <div>This should be rendered in `document.body #3`</div>
      </Teleporter.Domain>
      <Teleporter.Domain portKey="LAYER-3">
        <Teleporter.Move>
          <div>This should be rendered in `LAYER-3 #1`</div>
        </Teleporter.Move>
        <div>This should be rendered in `document.body #4`</div>
      </Teleporter.Domain>
      <Teleporter.Domain portKey="LAYER-2">
        <Teleporter.Move>
          <div>This should be rendered in `LAYER-2 #1`</div>
          <Teleporter.Domain>
          <Teleporter.Move>
            <div>This should be rendered in `document.body #5`</div>
          </Teleporter.Move>
          </Teleporter.Domain>
        </Teleporter.Move>
        <div>This should be rendered in `document.body #6`</div>
      </Teleporter.Domain>
    </TeleporterProvider>
  );
}
