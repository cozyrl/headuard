

/**
    * Interface for global HTML attributes that can be used across HTML elements.
*/

export interface GlobalAttributes extends Partial<GlobalEventHandlers> {

    /**
        * A keyboard shortcut to access an element. Expressed as a string of one or more keystrokes, separated by spaces.
    */

    accessKey?: string;

    /**
        * Controls capitalization of text input. Can take one of the following values:
        * - "off": No autocapitalization.
        * - "none": No autocapitalization.
        * - "on": Enable autocapitalization.
        * - "sentences": Autocapitalize the start of each sentence.
        * - "words": Autocapitalize the start of each word.
        * - "characters": Autocapitalize every character.
    */

    autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";

    /**
        * A space-separated list of the classes of the element.
    */

    className?: string;

    /**
        * Indicates if the element"s content is editable. Can take one of the following values:
        * - true: Content is editable.
        * - false: Content is not editable.
        * - "inherit": Inherit the editable behavior from the parent element.
    */
   
    contentEditable?: "true" | "false" | "inherit";

    /**
        * The direction of text. Can take one of the following values:
        * - "ltr": Left to right.
        * - "rtl": Right to left.
        * - "auto": Determined by the user agent.
    */

    dir?: "ltr" | "rtl" | "auto";

    /**
        * Indicates if the element can be dragged. Can take one of the following values:
        * - true: Element is draggable.
        * - false: Element is not draggable.
    */

    draggable?: boolean;

    /**
        * Indicates if the element should be hidden. Set to true to hide the element.
    */

    hidden?: boolean;

    /**
        * A unique identifier for the element.
    */

    id?: string;

    /**
        * The language of the element"s content.
    */

    lang?: string;

    /**
        * The name of the slot that the element belongs to.
    */

    slot?: string;

    /**
         * Indicates if spellchecking should be applied to the element"s text content.
        * Can take one of the following values:
        * - true: Spellcheck is applied.
        * - false: Spellcheck is not applied.
    */

    spellCheck?: boolean;

    /**
        * The tabindex of the element, indicating its position in the tab order.
    */

    tabIndex?: number;

    /**
        * Additional information about the element.
    */

    title?: string;

    /**
        * Indicates if the element"s content should be translated.
        * Can take one of the following values:
        * - "yes": Content should be translated.
        * - "no": Content should not be translated.
    */

    translate?: boolean
}