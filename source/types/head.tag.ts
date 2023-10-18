
import {
    TitleTag,
    BaseTag,
    MetaTag,
    ScriptTag,
    LinkTag
} from "../interfaces";

/**
    * Represents a union type of properties commonly used for HTML head tags.
*/

export type HeadTag = TitleTag 
| BaseTag 
| MetaTag 
| ScriptTag 
| LinkTag;