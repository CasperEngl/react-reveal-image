# React Reveal Image

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React Reveal Image will only ever reveal itself when it's in the viewport.

## Usage

```
import RevealImage from 'react-reveal-image';

export default () => (
  <RevealImage
    src="https://via.placeholder.com/400" // Link to an image
    as="article" // Default: figure - change the container element
    delay={2} // Delay in seconds
    className="extra class names" // Will add any classes here to the image container
  />
)
```


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
