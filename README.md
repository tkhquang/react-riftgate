[![From Vietnam with <3](https://raw.githubusercontent.com/webuild-community/badge/master/svg/love.svg)](https://webuild.community)

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

See [LICENSE](https://github.com/tkhquang/react-riftgate/blob/main/LICENSE.md) for more information.
