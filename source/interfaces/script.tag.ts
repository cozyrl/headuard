
import { GlobalAttributes } from "./global.attributes";

import { 
    ScriptTagType, 
    ScriptTagReferrerPolicy
} from "../types";

/**
    * Represents properties commonly used for HTML script tags.
*/

export interface ScriptTag extends GlobalAttributes {

    /**
        * The URL of the external script file.
    */

    src?: string;

    /**
        * MIME type for the associated scripting engine.
    */

    type?: ScriptTagType;

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

    referrerPolicy?: ScriptTagReferrerPolicy;
}