
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

Headuard is react strict mode friendly!

```jsx
import { useEffect } from 'react';
import { Headuard } from 'headuard';

const BaseLayout = () => {

    useEffect(() => {

        const mountedElements = [

            // Create and mount a title element
            Headuard.createTitle({ textContent: 'My Page Title' }),

            // Create and mount a base element
            Headuard.createBase({ href: '/base', target: '_blank' }),

            // Create and mount a meta element
            Headuard.createMeta({ name: 'description', content: 'This is a description' }),

            // Create and mount a script element
            Headuard.createScript({ src: 'script.js', type: 'text/javascript', async: true }),

            // Create and mount a link element
            Headuard.createLink({ rel: 'stylesheet', href: 'styles.css', type: 'text/css' })
        ];

        return () => {
            // Unmount the elements when the component is cleaned up
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