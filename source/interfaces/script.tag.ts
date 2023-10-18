
import { GlobalAttributes } from "./global.attributes";

/**
    * Represents properties commonly used for HTML script tags.
*/

export interface ScriptTag extends GlobalAttributes {

    /**
        * The URL of the external script file.
    */

    src: string;

    /**
        * MIME type for the associated scripting engine.
    */

    type?: "text/javascript" | "module" | "importmap";

    /**
        * Indicates that the script should be executed asynchronously.
    */

    async?: boolean;

    /**
        * The CORS setting for the script.
    */

    crossOrigin?: string | null;

    /**
        * Indicates that the script should be executed after the page has finished parsing.
    */

    defer?: boolean; 

    /**
        * The cryptographic hash value of the linked resource.
    */

    integrity?: string;

    /**
        * Indicates that the script should be ignored if the browser does not support modules.
    */

    noModule?: boolean;

    /**
        * A cryptographic nonce that can be used in combination with CSP settings.
    */

    nonce?: string;

    /**
        * The referrer policy for the script.
    */

    referrerPolicy?: "no-referrer" 
    | "no-referrer-when-downgrade" 
    | "origin" 
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin" 
    | "unsafe-url";
}