
/**
    * Message indicating that setting the defer attribute of a script tag to true has no effect on module scripts,
    * which are already deferred by default.
*/

export const deferHasNoEffect = "Setting the defer attribute of a script tag to true has no effect on module scripts, which are already deferred by default.";


/**
    * Message indicating that the defer attribute of a script tag must not be used or set to true if the src attribute is absent
    * (i.e. for inline scripts), as in this case it would have no effect.
*/

export const deferMustNotBeUsed = "The defer attribute of a script tag must not be used or set to true if the src attribute is absent (i.e. for inline scripts), as in this case it would have no effect.";


/**
    * Message indicating that the hreflang attribute of a link tag can only be used if the href attribute is present.
*/

export const hreflangCanOnlyBeUsed = "The hreflang attribute of a link tag can only be used if the href attribute is present.";


/**
    * Message indicating that the imageSizes attribute of a link tag can only be used if the rel attribute is set to preload
    * and the as attribute to image.
*/

export const imageSizesCanOnlyBeUsed = "The imageSizes attribute of a link tag can only be used if the rel attribute is set to preload and the as attribute to image.";


/**
    * Message indicating that the imageSrcset attribute of a link tag can only be used if the rel attribute is set to preload
    * and the as attribute to image.
*/

export const imageSrcSetCanOnlyBeUsed = "The imageSrcset attribute of a link tag can only be used if the rel attribute is set to preload and the as attribute to image.";


/**
    * Message indicating that the sizes attribute of a link tag can only be used if the rel contain an icon.
*/

export const sizesCanOnlyBeUsed = "The sizes attribute of a link tag can only be used if the rel contain an icon.";