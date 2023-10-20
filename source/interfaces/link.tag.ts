
import { GlobalAttributes } from "./global.attributes";

/**
    * Represents properties commonly used for HTML link tags.
*/

export interface LinkTag extends GlobalAttributes {

    /**
        * Specifies the relationship between the current document and the linked resource.
    */

    rel?: "alternate" 
    | "author"
    | "canonical"
    | "dns-prefetch"
    | "help"
    | "icon"
    | "manifest"
    | "modulepreload"
    | "next"
    | "preconnect"
    | "prefetch"
    | "preload"
    | "prerender"
    | "prev"
    | "search"
    | "stylesheet"
    | "apple-touch-icon"
    | "mask-icon"
    | "shortcut icon"
    | "tag";

    /**
        * Specifies the destination of the linked resource.
    */

    href?: string;

    /**
        * Provides advisory information about the linked resource's content.
    */

    title?: string;

    /**
        * Specifies the media types for which the linked resource is designed.
    */

    imageSizes?: "auto"
    | `${number}px`
    | `${number}em`
    | `${number}%`
    | `${number}vw`
    | `${number}vh`
    | `${number}vmin`
    | `${number}vmax`
    | `calc(${string})`;

    /**
        * Specifies a list of image candidates and their respective display densities.
        * Used in conjunction with `rel="preload"` and `as="image"`.
    */

    imageSrcset?: string;

    /**
        * Specifies the integrity hash for the linked resource.
    */

    integrity?: string;

    /**
        * Specifies the media types for which the linked resource is designed.
    */

    media?: string;

    /**
         * Specifies the referrer policy for the linked resource.
     */

    referrerPolicy?: "no-referrer" 
    | "no-referrer-when-downgrade" 
    | "origin" 
    | "origin-when-cross-origin" 
    | "unsafe-url";

    /**
        * Specifies the MIME type of the linked resource.
    */

    type?: "text/css"
    | "text/sass"
    | "text/scss"
    | "text/javascript"
    | "image/png"
    | "image/jpeg"
    | "image/gif"
    | "font/woff"
    | "font/woff2"
    | "application/json"
    | "application/xml"; 

    /**
        * Specifies the intended behavior for the linked resource.
    */

    as?: "audio" 
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "style"
    | "track"
    | "video"
    | "worker";

    /**
        * Specifies the crossorigin attribute for the linked resource.
    */

    crossOrigin?: "anonymous" | "use-credentials";

    /**
        * Specifies the language of the linked resource.
    */

    hreflang?: string;

    /**
        * The sizes attribute specifies the sizes of icons for visual media.
    */

    sizes?: `${number}x${number}`| `${number}X${number}`;
}