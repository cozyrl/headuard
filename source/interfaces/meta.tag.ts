
/**
    * Represents a meta tag element with specified CSS properties.
*/

export interface MetaTag {

    /** 
        * Information used to bind the value of a content attribute of a meta element to an HTTP response header.
    */

    httpEquiv?: string;

    /**
        * The name attribute of the meta tag.
    */

    name: string;

    /**
        * The content attribute of the meta tag.
    */
   
    content: string;
}