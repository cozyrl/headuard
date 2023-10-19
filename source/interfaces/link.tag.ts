
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

    media?: "all"
    | "print"
    | "screen"
    | "speech";

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
        * Indicates if the linked resource is disabled.
    */

    disabled?: boolean;

    /**
        * Specifies the language of the linked resource.
    */

    hreflang?: string;

    /**
        * Specifies the sizes for icons or other visual media.
    */

    sizes?: "any" | `${number}x${number}` | `${number}X${number}`;
}