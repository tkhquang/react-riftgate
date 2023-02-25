[![From Vietnam with <3](https://raw.githubusercontent.com/webuild-community/badge/master/svg/love.svg)](https://webuild.community)

[react-riftgate](https://github.com/tkhquang/react-riftgate) is an open source library that provides lower-level [React](https://reactjs.org/)
components for teleporting React components from one place to another in the same React tree. 

# [Docs](https://github.com/tkhquang/react-riftgate)

See the documentation at [tkhquang](https://github.com/tkhquang/react-riftgate) for more information about using xstyled!

# Example

```tsx
import { Teleporter } from "@react-riftgate/teleporter";

const MyComponent = () => {
  return (
    <div>
      {`Teleporter.Gate is the destination that will have dynamic content`}
      <Teleporter.Gate portKey="somekey" id="gate" />
      {`Teleporter.Domain is the teleport1able area that will move
        everything inside Teleporter.Move to the Gate which has the same portKey
        While leaving the rest which are outside of Teleporter.Move untouched`}
      <Teleporter.Domain portKey="somekey">
        {`... Stuff here won't be put to Teleporter.Gate because
          they are not inside Teleporter.Move`}
        <div id="ignore-me-please" />
        <Teleporter.Move>
          {`This will be teleported to <Teleporter.Gate portKey="somekey" />`}
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

# License

Licensed under the MIT License, Copyright © 2023-present Quang Trinh.

See [LICENSE](https://github.com/tkhquang/react-riftgate/blob/main/LICENSE.md) for more information.
