
import { GlobalAttributes } from "./global.attributes";

/**
    * Represents properties commonly used for HTML link tags.
*/

export interface LinkTag extends GlobalAttributes {

    /**
        * The URL of the linked resource.
    */

    href: string;

    /**
        * The MIME type of the linked resource.
    */

    type?: string;

    /**
        * Specifies the relationship between the current document and the linked resource.
    */

    rel: string;

    /**
        * The type of the linked resource, such as "audio", "document", "embed", etc.
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
        * How the element handles crossorigin requests.
    */

    crossOrigin?: "anonymous" | "use-credentials";

    /**
        * The language of the linked resource.
    */

    hreflang?: string;

    /**
        * Specifies the referrer policy for the linked resource.
    */

    referrerPolicy?: "no-referrer" 
    | "no-referrer-when-downgrade" 
    | "origin" 
    | "origin-when-cross-origin" 
    | "unsafe-url";

    /**
        * The cryptographic hash value of the linked resource.
    */

    integrity?: string;
}