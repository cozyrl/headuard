
import { GlobalAttributes } from "./global.attributes";

/**
    * Represents a base tag element.
*/

export interface BaseTag extends GlobalAttributes {

    /** 
        * Gets or sets the baseline URL on which relative links are based.  
    */

    href?: string;

    /** 
        * Sets or retrieves the window or frame at which to target content.
    */

    target?: "_self"
    | "_blank"
    | "_parent"
    | "_top";
}
