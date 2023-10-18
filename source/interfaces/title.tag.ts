
import { GlobalAttributes } from "./global.attributes";

/**
    * Represents properties commonly used for HTML title tags.
*/

export interface TitleTag extends GlobalAttributes {

    /**
        * The text content of the title element.
    */
   
    textContent: string;
}