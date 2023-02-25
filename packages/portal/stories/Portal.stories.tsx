import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styled, { x } from "@xstyled/styled-components";
import { Portal, PortalContext } from "../src";

export default {
  title: "Portal",
  decorators: [(story: Function) => <x.div>{story()}</x.div>]
};

const Red = styled.box`
  background-color: red;
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Green = styled.box`
  background-color: green;
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Blue = styled.box`
  background-color: blue;
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Yellow = styled.box`
  background-color: yellow;
  color: black;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Basic = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Red></Red>
      <Green></Green>
      <Blue></Blue>
      <Yellow></Yellow>
      <PortalContext.Provider value={null}>
        <Portal>
          <div ref={elementRef}>
            This should not be rendered in colored containers
          </div>
        </Portal>
      </PortalContext.Provider>
    </>
  );
};

export const Custom = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const redDivRef = useRef<HTMLDivElement>(null);
  const greenDivRef = useRef<HTMLDivElement>(null);
  const blueDivRef = useRef<HTMLDivElement>(null);
  const yellowDivRef = useRef<HTMLDivElement>(null);

  const [parentNode, setParentNode] = useState<HTMLElement | null | undefined>(
    () => redDivRef.current
  );

  useLayoutEffect(() => {
    setParentNode(redDivRef.current);
  }, []);

  return (
    <>
      <Red ref={redDivRef}>
        <x.div
          as="button"
          type="button"
          onClick={() => setParentNode(redDivRef.current)}
        >
          Move
        </x.div>
      </Red>
      <Green ref={greenDivRef}>
        <x.div
          as="button"
          type="button"
          onClick={() => setParentNode(greenDivRef.current)}
        >
          Move
        </x.div>
      </Green>
      <Blue ref={blueDivRef}>
        <x.div
          as="button"
          type="button"
          onClick={() => setParentNode(blueDivRef.current)}
        >
          Move
        </x.div>
      </Blue>
      <Yellow ref={yellowDivRef}>
        <x.div
          as="button"
          type="button"
          onClick={() => setParentNode(yellowDivRef.current)}
        >
          Move
        </x.div>
      </Yellow>
      <x.div as="button" type="button" onClick={() => setParentNode(null)}>
        Remove
      </x.div>
      <PortalContext.Provider value={parentNode}>
        <Portal>
          <div ref={elementRef}>
            This should be initially rendered in container which has&nbsp;
            <x.div as="span" backgroundColor="red">
              red
            </x.div>
            &nbsp;background
          </div>
        </Portal>
      </PortalContext.Provider>
    </>
  );
};
