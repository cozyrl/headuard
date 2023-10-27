
<p align="center">
    <img alt="Cozyrl Logo" height="auto" width="80px" src="./assets/images/headuard.logo.png"/>
</p>

<h1 align="center">Headuard API Reference</h1>

Certainly! To provide enums for the possible values of attributes in your interfaces, we'll include them in the API reference. Here are the enums for the attributes mentioned in your interfaces:

---

## Global Attributes

All methods in `Headuard` support the following global attributes:

- `accessKey`: A keyboard shortcut to access an element.
  - Possible values: `"string"` (e.g., `"A"`, `"Ctrl+M"`, etc.)

- `autoCapitalize`: Controls capitalization of text input.
  - Possible values: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.

- `className`: A space-separated list of the classes of the element.
  - Possible values: `"string"` (e.g., `"class1 class2"`)

- `contentEditable`: Indicates if the element's content is editable.
  - Possible values: `"true"`, `"false"`, `"inherit"`.

- `dir`: The direction of text.
  - Possible values: `"ltr"`, `"rtl"`, `"auto"`.

- `draggable`: Indicates if the element can be dragged.
  - Possible values: `true`, `false`.

- `hidden`: Indicates if the element should be hidden.
  - Possible values: `true`, `false`.

- `id`: A unique identifier for the element.
  - Possible values: `"string"` (e.g., `"myElement"`).

- `lang`: The language of the element's content.
  - Possible values: `"string"` (e.g., `"en-US"`, `"fr"`, etc.).

- `slot`: The name of the slot that the element belongs to.
  - Possible values: `"string"` (e.g., `"header"`, `"footer"`, etc.).

- `spellCheck`: Indicates if spellchecking should be applied to the element's text content.
  - Possible values: `true`, `false`.

- `tabIndex`: The tabindex of the element.
  - Possible values: `number` (e.g., `0`, `1`, `2`, etc.).

- `title`: Additional information about the element.
  - Possible values: `"string"` (e.g., `"My Element"`).

- `translate`: Indicates if the element's content should be translated.
  - Possible values: `true`, `false`.

---

## `createTitle(attributes: TitleTag): HTMLTitleElement`

Creates a `<title>` element and appends it to the document head.

### `TitleTag` Attributes:

- `textContent`: The text content of the title element.
  - Possible values: `"string"` (e.g., `"My Page Title"`).

---

## `createBase(attributes: BaseTag): HTMLBaseElement`

Creates a `<base>` element and appends it to the document head.

### `BaseTag` Attributes:

- `href`: Gets or sets the baseline URL on which relative links are based.
  - Possible values: `"string"` (e.g., `"/base"`, `"https://example.com"`).

- `target`: Sets or retrieves the window or frame at which to target content.
  - Possible values: `"_self"`, `"_blank"`, `"_parent"`, `"_top"`.

---

## `createMeta(attributes: MetaTag): HTMLMetaElement`

Creates a `<meta>` element and appends it to the document head.

### `MetaTag` Attributes:

- `httpEquiv`: Information used to bind the value of a content attribute of a meta element to an HTTP response header.
  - Possible values: `"content-security-policy"`, `"content-type"`, `"default-style"`, `"x-ua-compatible"`.

- `name`: The name attribute of the meta tag.
  - Possible values: `"string"` (e.g., `"viewport"`, `"description"`, etc.).

- `content`: The content attribute of the meta tag.
  - Possible values: `"string"` (e.g., `"width=device-width, initial-scale=1"`).

- `charset`: The character encoding declaration for the document.
  - Possible values: `"string"` (e.g., `"UTF-8"`, `"ISO-8859-1"`, etc.).

---

## `createScript(attributes: ScriptTag): HTMLScriptElement`

Creates a `<script>` element and appends it to the document head.

### `ScriptTag` Attributes:

- `src`: The URL of the external script file.
  - Possible values: `"string"` (e.g., `"https://example.com/script.js"`).

- `type`: MIME type for the associated scripting engine.
  - Possible values: `"text/javascript"`, `"module"`, `"importmap"`.

- `async`: Indicates that the script should be executed asynchronously.
  - Possible values: `true`, `false`.

- `crossOrigin`: The CORS setting for the script.
  - Possible values: `"string"` or `null` (e.g., `"anonymous"`, `"use-credentials"`, `null`).

- `defer`: Indicates that the script should be executed after the page has finished parsing.
  - Possible values: `true`, `false`.

- `integrity`: The cryptographic hash value of the linked resource.
  -

 Possible values: `"string"` (e.g., `"sha256-abc123"`).

- `noModule`: Indicates that the script should be ignored if the browser does not support modules.
  - Possible values: `true`, `false`.

- `nonce`: A cryptographic nonce that can be used in combination with CSP settings.
  - Possible values: `"string"` (e.g., `"abc123"`).

- `referrerPolicy`: The referrer policy for the script.
  - Possible values: `"no-referrer"`, `"no-referrer-when-downgrade"`, `"origin"`, `"origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, `"strict-origin-when-cross-origin"`, `"unsafe-url"`.

---

## `createLink(attributes: LinkTag): HTMLLinkElement`

Creates a `<link>` element and appends it to the document head.

### `LinkTag` Attributes:

- `rel`: Specifies the relationship between the current document and the linked resource.
  - Possible values: `"alternate"`, `"author"`, `"canonical"`, `"dns-prefetch"`, `"help"`, `"icon"`, `"manifest"`, `"modulepreload"`, `"next"`, `"preconnect"`, `"prefetch"`, `"preload"`, `"prerender"`, `"prev"`, `"search"`, `"stylesheet"`,
  `"apple-touch-icon"`, `"mask-icon"`,`"shortcut icon"`, `"tag"`.

- `href`: Provides the destination of the linked resource.
  - Possible values: `"string"` (e.g., `"https://example.com/styles.css"`).

- `title`: Provides advisory information about the linked resource's content.
  - Possible values: `"string"` (e.g., `"Stylesheet"`).

- `imageSizes`: Specifies a list of image candidates and their respective display densities. Used in conjunction with `rel="preload"` and `as="image"`.
  - Possible values: See imageSizes values:
    - `"auto"`: The browser will determine the size automatically.
    - `${number}px`: Specifies the size in pixels (e.g., 100px).
    - `${number}em`: Specifies the size relative to the font-size of the element (e.g., 2em is twice the font size).
    - `${number}%`: Specifies the size as a percentage of its containing element.
    - `${number}vw`: Specifies the size relative to 1% of the viewport width.
    - `${number}vh`: Specifies the size relative to 1% of the viewport height.
    - `${number}vmin`: Specifies the size relative to 1% of the smaller of the viewport width and height.
    - `${number}vmax`: Specifies the size relative to 1% of the larger of the viewport width and height.
    - `calc(${string})`: Allows for more complex size calculations using CSS calc() function (e.g., calc(50% - 10px)).

- `imageSrcset`: Specifies a list of image candidates and their respective display densities. Used in conjunction with `rel="preload"` and `as="image"`.
  - Possible values: `"string"` (e.g., `"image-1x.jpg 1x, image-2x.jpg 2x"`).

- `integrity`: Specifies the integrity hash for the linked resource.
  - Possible values: `"string"` (e.g., `"sha256-abc123"`).

- `media`: Specifies the media types for which the linked resource is designed.
  - Possible values: `"string"` (e.g., `"screen and (min-width: 768px)"`).

- `referrerPolicy`: Specifies the referrer policy for the linked resource.
  - Possible values: `"no-referrer"`, `"no-referrer-when-downgrade"`, `"origin"`, `"origin-when-cross-origin"`, `"unsafe-url"`.

- `type`: Specifies the MIME type of the linked resource.
  - Possible values: `"text/css"`, `"text/sass"`, `"text/scss"`, `"text/javascript"`, `"image/png"`, `"image/jpeg"`, `"image/gif"`, `"font/woff"`, `"font/woff2"`, `"application/json"`, `"application/xml"`.

- `as`: Specifies the intended behavior for the linked resource.
  - Possible values: `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"style"`, `"track"`, `"video"`, `"worker"`.

- `crossOrigin`: Specifies the crossorigin attribute for the linked resource.
  - Possible values: `"anonymous"`, `"use-credentials"`.

- `hreflang`: Specifies the language of the linked resource.
  - Possible values: `"string"` (e.g., `"en"`, `"fr-FR"`, etc.).

- `sizes`: Specifies the dimensions of an element, typically used for images.
  - Possible values:
    - `${number}x${number}`: Specifies the dimensions in pixels (e.g., 100x100).
    - `${number}X${number}`: Also specifies the dimensions in pixels, but with capital 'X'.

- `color`: The color value.
  - `Possible values`: Any valid CSS color value (e.g., "red", "#00FF00", "rgba(255, 0, 0, 0.5)").