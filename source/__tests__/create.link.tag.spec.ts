
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Link tag specifications **/**", () => {

    var tag: HTMLLinkElement;

    it("must be able to create a link tag.", () => {
        tag = Headuard.createLink({});
        expect(tag.tagName).toBe("LINK");
    });

    it("must be able to create a link tag element whose the rel attribute is set to alternate.", () => {
        const rel = "alternate";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to author.", () => {
        const rel = "author";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to canonical.", () => {
        const rel = "canonical";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to dns-prefetch.", () => {
        const rel = "dns-prefetch";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to help.", () => {
        const rel = "help";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to icon.", () => {
        const rel = "icon";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to manifest.", () => {
        const rel = "manifest";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to modulepreload.", () => {
        const rel = "modulepreload";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to next.", () => {
        const rel = "next";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to preconnect.", () => {
        const rel = "preconnect";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to prefetch.", () => {
        const rel = "prefetch";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to preload.", () => {
        const rel = "preload";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to prerender.", () => {
        const rel = "prerender";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to prev.", () => {
        const rel = "prev";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to search.", () => {
        const rel = "search";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to stylesheet.", () => {
        const rel = "stylesheet";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to apple-touch-icon.", () => {
        const rel = "apple-touch-icon";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to mask-icon.", () => {
        const rel = "mask-icon";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to shortcut icon.", () => {
        const rel = "shortcut icon";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose the rel attribute is set to tag.", () => {
        const rel = "tag";
        tag = Headuard.createLink({ rel });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.rel).toBe(rel);
    });

    it("must be able to create a link tag element whose href attribute is defined.", () => {
        const href = `http://localhost/${randomUUID()}`;
        tag = Headuard.createLink({ href });

        expect(tag.tagName).toBe("LINK");
        expect(tag.href).toBe(href);
    });

    it("must be able to create a link tag element whose title attribute is defined.", () => {
        const title = randomUUID();
        tag = Headuard.createLink({ title });

        expect(tag.tagName).toBe("LINK");
        expect(tag.title).toBe(title);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in pixels.", () => {
        const imageSizes = "1px";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in em units.", () => {
        const imageSizes = "1em";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in percentage.", () => {
        const imageSizes = "1%";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in viewport width.", () => {
        const imageSizes = "1vw";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in viewport height.", () => {
        const imageSizes = "1vh";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in viewport minimum.", () => {
        const imageSizes = "1vmin";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in viewport maximum.", () => {
        const imageSizes = "1vmax";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose the imagesSizes attribute is set in complex calculations.", () => {
        const imageSizes = "calc(1% - 1px)";
        tag = Headuard.createLink({ imageSizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSizes).toBe(imageSizes);
    });

    it("must be able to create a link tag element whose imageSrcset attribute is defined.", () => {
        const imageSrcset = randomUUID();
        tag = Headuard.createLink({ imageSrcset });

        expect(tag.tagName).toBe("LINK");
        expect(tag.imageSrcset).toBe(imageSrcset);
    });

    it("must be able to create a link tag element whose integrity attribute is defined.", () => {
        const integrity = randomUUID();
        tag = Headuard.createLink({ integrity });

        expect(tag.tagName).toBe("LINK");
        expect(tag.integrity).toBe(integrity);
    });

    it("must be able to create a link tag element whose media attribute is defined.", () => {
        const media = randomUUID();
        tag = Headuard.createLink({ media });

        expect(tag.tagName).toBe("LINK");
        expect(tag.media).toBe(media);
    });

    it("must be able to create a link tag element whose the referrerPolicy attribute is set to no-referrer.", () => {
        const referrerPolicy = "no-referrer";
        tag = Headuard.createLink({ referrerPolicy });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a link tag element whose the referrerPolicy attribute is set to no-referrer-when-downgrade.", () => {
        const referrerPolicy = "no-referrer-when-downgrade";
        tag = Headuard.createLink({ referrerPolicy });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a link tag element whose the referrerPolicy attribute is set to origin.", () => {
        const referrerPolicy = "origin";
        tag = Headuard.createLink({ referrerPolicy });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a link tag element whose the referrerPolicy attribute is set to origin-when-cross-origin.", () => {
        const referrerPolicy = "origin-when-cross-origin";
        tag = Headuard.createLink({ referrerPolicy });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a link tag element whose the referrerPolicy attribute is set to unsafe-url.", () => {
        const referrerPolicy = "unsafe-url";
        tag = Headuard.createLink({ referrerPolicy });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a link tag element whose the type attribute is set to text/css.", () => {
        const type = "text/css";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to text/sass.", () => {
        const type = "text/sass";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });


    it("must be able to create a link tag element whose the type attribute is set to text/scss.", () => {
        const type = "text/scss";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to text/javaLINK.", () => {
        const type = "text/javascript";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to image/png.", () => {
        const type = "image/png";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to image/jpeg.", () => {
        const type = "image/jpeg";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to image/gif.", () => {
        const type = "image/gif";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to font/woff.", () => {
        const type = "font/woff";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to font/woff2.", () => {
        const type = "font/woff2";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to application/json.", () => {
        const type = "application/json";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the type attribute is set to application/xml.", () => {
        const type = "application/xml";
        tag = Headuard.createLink({ type });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a link tag element whose the as attribute is set to audio.", () => {
        const as = "audio";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to document.", () => {
        const as = "document";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to embed.", () => {
        const as = "embed";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to fetch.", () => {
        const as = "fetch";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to font.", () => {
        const as = "font";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to image.", () => {
        const as = "image";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to object.", () => {
        const as = "object";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to style.", () => {
        const as = "style";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to track.", () => {
        const as = "track";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to video.", () => {
        const as = "video";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the as attribute is set to worker.", () => {
        const as = "worker";
        tag = Headuard.createLink({ as });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.as).toBe(as);
    });

    it("must be able to create a link tag element whose the crossOrigin attribute is set to anonymous.", () => {
        const crossOrigin = "anonymous";
        tag = Headuard.createLink({ crossOrigin });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.crossOrigin).toBe(crossOrigin);
    });

    it("must be able to create a link tag element whose the crossOrigin attribute is set to use-credentials.", () => {
        const crossOrigin = "use-credentials";
        tag = Headuard.createLink({ crossOrigin });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.crossOrigin).toBe(crossOrigin);
    });

    it("must be able to create a link tag element whose hreflang attribute is defined.", () => {
        const hreflang = randomUUID();
        tag = Headuard.createLink({ hreflang });

        expect(tag.tagName).toBe("LINK");
        expect(tag.hreflang).toBe(hreflang);
    });

    it("must be able to create a link tag element whose the sizes attribute is set with minor x.", () => {
        const sizes = "1x1";
        tag = Headuard.createLink({ sizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.sizes).toBe(sizes);
    });

    it("must be able to create a link tag element whose the sizes attribute is set with major x.", () => {
        const sizes = "1X1";
        tag = Headuard.createLink({ sizes });
        
        expect(tag.tagName).toBe("LINK");
        expect(tag.sizes).toBe(sizes);
    });

    it("must be able to create a link tag element whose color attribute is defined.", () => {
        const color = randomUUID();
        tag = Headuard.createLink({ color });

        expect(tag.tagName).toBe("LINK");
        expect(tag.getAttribute("color")).toBe(color);
    });

});