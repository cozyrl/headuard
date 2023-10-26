
import { final } from "./decorators";
import { HeadElement, HeadTag } from "./types";

import { 
    TitleTag,
    BaseTag,
    MetaTag,
    ScriptTag,
    LinkTag
} from "./interfaces";


/**
    * A utility class for creating and managing head elements in the DOM.
*/

@final

export class Headuard {

    /**
        * Attempts to apply a specified attribute to a head element.
        * @template K - The key of the HeadTag.
        * @param {K} key - The key of the attribute.
        * @param {HeadTag[K]} value - The value of the attribute.
        * @param {HeadElement} headElement - The head element.
        * @private
   */

    private static tryToApplyAttribute<K extends keyof HeadTag>(
        key: K, 
        value: HeadTag[K], 
        headElement: HeadElement
    ): void {
        if(value !== undefined) (headElement as HeadTag)[key] = value;
    };

    /**
        * Sets optional attributes on a head element.
        * @param {HeadTag} attributes - The attributes to set.
        * @param {HeadElement} element - The head element.
        * @private
   */

    private static setOptionalAttributes(
        attributes: HeadTag, 
        element: HeadElement
    ): void {
        Object.keys(attributes).forEach((key) => {
            const attributeKey = key as keyof HeadTag;
            const attributeValue = attributes[attributeKey];
            this.tryToApplyAttribute(attributeKey, attributeValue, element);
        });
    }

    /**
        * Mounts a head element to the document head.
        * @param {HeadElement} headElement - The head element to mount.
        * @private
    */

    public static mount(headElement: HeadElement) {
        return document.head.appendChild(headElement);
    }

    /**
        * Unmounts a head element from the document head.
        * @param {HeadElement} headElement - The head element to unmount.
        * @public
   */

    public static unmount(headElement: HeadElement) {
        return document.head.removeChild(headElement);
    }

    /**
        * Creates a title element and appends it to the document head.
        * @param {TitleTag} attributes - The attributes for the title element.
        * @public
    */

    public static createTitle(attributes: TitleTag): HTMLTitleElement {
        const titleElem = document.createElement("title");
        const { textContent } = attributes;

        // required
        titleElem.textContent = textContent;

        // global atrributes
        this.setOptionalAttributes(attributes, titleElem);

        return titleElem;
    }

    /**
        * Creates a base element and appends it to the document head.
        * @param {BaseTag} attributes - The attributes for the base element.
        * @public
    */

    public static createBase(attributes: BaseTag): HTMLBaseElement {
        const baseElem = document.createElement("base");
        const { href, target } = attributes;

        // optional
        href ? baseElem.href = href : undefined;
        target ? baseElem.target = target : undefined;

        // global atrributes
        this.setOptionalAttributes(attributes, baseElem);

        return baseElem;
    }

    /**
        * Creates a meta element and appends it to the document head.
        * @param {MetaTag} attributes - The attributes for the meta element.
        * @public
    */

    public static createMeta(attributes: MetaTag): HTMLMetaElement {
        const metaElem = document.createElement("meta");
        const { httpEquiv, name, content, charset } = attributes;

        // optional
        httpEquiv ? metaElem.httpEquiv = httpEquiv : undefined;
        name ? metaElem.name = name : undefined;
        content ? metaElem.content = content : undefined;
        charset ? metaElem.setAttribute("charset", charset) : undefined;

        // global atrributes
        this.setOptionalAttributes(attributes, metaElem);

        return metaElem;
    }

    /**
        * Creates a script element and appends it to the document head.
        * @param {ScriptTag} attributes - The attributes for the script element.
        * @public
    */

    public static createScript(attributes: ScriptTag): HTMLScriptElement {

        const scriptElem = document.createElement("script");

        const { 
            type, 
            defer, 
            src, 
            async, 
            crossOrigin, 
            integrity,
            noModule,
            nonce,
            referrerPolicy
        } = attributes;

        // optional
        src ? scriptElem.src = src : undefined;
        async ? scriptElem.async = async : undefined;
        crossOrigin ? scriptElem.crossOrigin = crossOrigin : undefined;
        defer ? scriptElem.defer = defer : undefined
        integrity ? scriptElem.integrity = integrity : undefined;
        noModule ? scriptElem.noModule = noModule : undefined;
        nonce ? scriptElem.nonce = nonce : undefined;
        referrerPolicy ? scriptElem.referrerPolicy = referrerPolicy : undefined;
        type ? scriptElem.type = type : undefined

        // global atrributes
        this.setOptionalAttributes(attributes, scriptElem);

        return scriptElem;
    }

    /**
        * Creates a link element and appends it to the document head.
        * @param {LinkTag} attributes - The attributes for the link element.
        * @public
    */

    public static createLink(attributes: LinkTag): HTMLLinkElement {
        const linkElem = document.createElement("link");

        const {
            hreflang,
            href,
            imageSizes,
            rel,
            imageSrcset,
            crossOrigin,
            referrerPolicy,
            integrity,
            media,
            title,
            type,
            as,
            sizes,
            color
        } = attributes;

        // optional
        as ? linkElem.as = as : undefined;
        crossOrigin ? linkElem.crossOrigin = crossOrigin : undefined;
        href ? linkElem.href = href : undefined;
        hreflang ? linkElem.hreflang = hreflang : undefined;
        imageSizes ? linkElem.imageSizes = imageSizes : undefined;
        imageSrcset ? linkElem.imageSrcset = imageSrcset : undefined;
        integrity ? linkElem.integrity = integrity : undefined;
        media ? linkElem.media = media : undefined;
        referrerPolicy ? linkElem.referrerPolicy = referrerPolicy : undefined;
        rel ? linkElem.rel = rel : undefined;
        title ? linkElem.title = title : undefined;
        type ? linkElem.type = type : undefined;
        sizes ? linkElem.setAttribute("sizes", sizes) : undefined;
        color ? linkElem.setAttribute("color", color) : undefined;

        // global atrributes
        this.setOptionalAttributes(attributes, linkElem);

        return linkElem;
    }

}