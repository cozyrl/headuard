
<p align="center">
    <img alt="Cozyrl Logo" height="auto" width="80px" src="./assets/images/headuard.logo.png"/>
</p>

<h1 align="center">Headuard</h1>

<p align="center">
    <img alt="npm" src="https://img.shields.io/npm/v/@cozyrl/headuard"/>
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@cozyrl/headuard"/>
</p>


<p align="center">
Headuard is an npm package that provides a utility class for creating and managing head elements in the DOM. It simplifies the process of dynamically adding essential head elements to your web page, such as title, base, meta, script, and link.
</p>

## Installation

To install Headuard, use npm:

```bash
npm install @cozyrl/headuard
```

## Usage

Headuard provides a convenient way to manage essential head elements in your web page. When using Headuard, you can simplify your HTML structure by allowing Headuard to take care of adding necessary head elements for you.

```html
<!doctype html>
<html lang="en">
  
  <head>
    <!-- Leave it to Headuard -->
  </head>
  
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>

</html>
```

<P>Headuard is strict mode friendly!</p>

```jsx
import { useEffect } from "react";
import { Headuard } from "headuard";

const BaseLayout = () => {

    useEffect(() => {

        // Create head elements.
        const titleTag = Headuard.createTitle({ textContent: "My Page Title" });
        const metaTag = Headuard.createMeta({ name: "description", content: "This is a description" });
        const baseTag = Headuard.createBase({ href: "/base", target: "_blank" });
        const scriptTag = Headuard.createScript({ src: "script.js", type: "text/javascript", async: true });
        const linkTag = Headuard.createLink({ rel: "stylesheet", href: "styles.css", type: "text/css" });

        // Mount the head elements.
        const mountedElements = [
            titleTag, 
            metaTag, 
            baseTag, 
            scriptTag, 
            linkTag
        ].map(elem => Headuard.mount(elem));

        return () => {
            // Unmount the head elements when the component is cleaned up
            mountedElements.map(elem => Headuard.unmount(elem));  
        }
    }, [])

    return <>...</>;
};

export default BaseLayout;

```

## API Reference

For detailed information on each method, refer to the [API Reference](./api.reference.md).

## Links

- **NPM Package**: [@cozyrl/headuard](https://www.npmjs.com/package/@cozyrl/headuard)
- **GitHub Repository**: [https://github.com/cozyrl/headuard](https://github.com/cozyrl/headuard)

## Author

- Salem Djekoun
- Email: auditif.auvents.0k@icloud.com

## License

This project is licensed under the [MIT License](LICENSE).