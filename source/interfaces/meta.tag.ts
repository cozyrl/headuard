
import { GlobalAttributes } from "./global.attributes";
import { MetaTagHttpEquiv } from "../types";

/**
    * Represents properties commonly used for HTML meta tags.
*/

export interface MetaTag extends GlobalAttributes {

    /**
        * Information used to bind the value of a content attribute of a meta element to an HTTP response header.
    */

    httpEquiv?: MetaTagHttpEquiv;

    /**
        * The name attribute of the meta tag.
    */

    name?: string;

    /**
        * The content attribute of the meta tag.
    */

    content?: string;

    /**
        * The character encoding declaration for the document.
    */
   
    charset?: string;
}
