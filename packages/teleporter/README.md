<h1 align="center">React Riftgate</h1>

<p align="center">
  <a href="https://webuild.community">
    <img src="https://raw.githubusercontent.com/webuild-community/badge/master/svg/love.svg" alt="From Vietnam with &lt;3">
  </a>
  <a href="https://www.npmjs.com/package/@react-riftgate/teleporter">
    <img alt="NPM version" src="https://img.shields.io/npm/v/@react-riftgate/teleporter.svg?logo=npm&color=007acc" />
  </a>
  <a href="https://app.netlify.com/sites/react-riftgate/deploys">
    <img src="https://api.netlify.com/api/v1/badges/f85a4880-68da-440b-aeb9-fd54f0140286/deploy-status?branch=main" alt="Netlify Status">
  </a>
</p>

**react-riftgate** is an open source library that provides lower-level [React](https://reactjs.org/)
components for teleporting React components from one place to another in the same React tree.

# [Docs](https://react-riftgate.netlify.app)

See the documentation at [react-riftgate.netlify.app](https://react-riftgate.netlify.app) for more information about using `react-riftgate`!

# Example

```tsx
import { Teleporter } from "@react-riftgate/teleporter";

const MyComponent = () => {
  return (
    <div>
      {/**
       * `Teleporter.Gate` is the destination that will have dynamic content
       **/}
      <Teleporter.Gate portKey="somekey" id="gate" />
      {/**
       * `Teleporter.Domain` is the teleport1able area that will move everything
       * inside `Teleporter.Move` to the `Teleporter.Gate` which has the same
       * `portKey` value, while leaving the rest which are outside of
       * `Teleporter.Move` untouched
       **/}
      <Teleporter.Domain portKey="somekey">
        {/**
         * Stuff here won't be put to `Teleporter.Gate` because they are
         * not inside `Teleporter.Move`
         **/}
        <div id="ignore-me-please" />
        <Teleporter.Move>
          {/**
           * This will be teleported to `<Teleporter.Gate portKey="somekey" />`
           **/}
          <div id="please-put-me-in-gate" />
        </Teleporter.Move>
      </Teleporter.Domain>
    </div>
  );
};
```

The rendered HTML structure will be like below

```html
<div>
  <div id="gate">
    <div id="please-put-me-in-gate"></div>
  </div>
  <div id="ignore-me-please"></div>
</div>
```

# Quick start

[Codesandbox example](https://codesandbox.io/p/sandbox/react-riftgate-example-6j3k9u)

# License

Licensed under the MIT License, Copyright © 2023-present Quang Trinh.

See [LICENSE](https://github.com/tkhquang/react-riftgate/blob/main/LICENSE) for more information.
