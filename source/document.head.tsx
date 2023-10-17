
import { final } from "@cozyrl/decorators";

import { 
    TitleTag,
    BaseTag,
    MetaTag
} from "./interfaces";

/**
    * Represents various HTML head elements.
*/

export type HeadElement =
| HTMLTitleElement
| HTMLBaseElement
| HTMLLinkElement
| HTMLMetaElement
| HTMLStyleElement
| HTMLScriptElement;


/**
    * A utility class for dynamically managing the head section of an HTML document.
*/

@final

export class DocumentHead {

    public static mount(headElement: HeadElement) {
        return document.head.appendChild(headElement);
    }

    public static unmount(headElement: HeadElement) {
        return document.head.removeChild(headElement);
    }

    public static createTitle(attributes: TitleTag) {
        const title = document.createElement("title");
        title.innerHTML = attributes.title;

        return this.mount(title) as HTMLTitleElement;
    }

    public static createBase(attributes: BaseTag) {
        const base = document.createElement("base");
        attributes.href ? base.href = attributes.href : undefined;
        attributes.target ? base.target = attributes.target : undefined;

        return this.mount(base) as HTMLBaseElement;
    }

    public static createMeta(attributes: MetaTag) {
        const meta = document.createElement("meta");
        attributes.httpEquiv ? meta.httpEquiv = attributes.httpEquiv : undefined;
        attributes.content ? meta.content = attributes.content : undefined;
        attributes.name ? meta.name = attributes.name : undefined;

        return this.mount(meta) as HTMLMetaElement;
    }
}