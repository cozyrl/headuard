
import { GlobalAttributes } from "./global.attributes";

import { 
    LinkTagRel,
    LinkTagImagesSizes,
    LinkTagReferrerPolicy,
    LinkTagType,
    LinkTagAs,
    LinkTagCrossOrigin,
    LinkTagSizes
} from "../types";

/**
    * Represents properties commonly used for HTML link tags.
*/

export interface LinkTag extends GlobalAttributes {

    /**
        * Specifies the relationship between the current document and the linked resource.
    */

    rel?: LinkTagRel;

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

    imageSizes?: LinkTagImagesSizes;

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

    referrerPolicy?: LinkTagReferrerPolicy;

    /**
        * Specifies the MIME type of the linked resource.
    */

    type?: LinkTagType;

    /**
        * Specifies the intended behavior for the linked resource.
    */

    as?: LinkTagAs;

    /**
        * Specifies the crossorigin attribute for the linked resource.
    */

    crossOrigin?: LinkTagCrossOrigin;

    /**
        * Specifies the language of the linked resource.
    */

    hreflang?: string;

    /**
        * The sizes attribute specifies the sizes of icons for visual media.
    */

    sizes?: LinkTagSizes;

    /**
        * The color value. 
    */

    color?: string;
}