
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

import { 
    hreflangWithoutHref,
    imageSizesCanOnlyUsed,
    imageSrcsetCanOnlyUsed,
    sizesCanOnlyUsed 
} from "../utilities";

describe("** Link tag (specs) **", () => {

    var mounted: HTMLLinkElement;

    it("should be able to mount a link element", () => {
        mounted = Headuard.createLink({});
        expect(mounted.tagName).toBe("LINK");
    });

    it("should be able to mount a link element whose as is set to object", () => {
        const as = "object";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to audio", () => {
        const as = "audio";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to embed", () => {
        const as = "embed";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to style", () => {
        const as = "style";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to track", () => {
        const as = "track";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to video", () => {
        const as = "video";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to document", () => {
        const as = "document";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to fetch", () => {
        const as = "fetch";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to font", () => {
        const as = "font";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to image", () => {
        const as = "image";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose as is set to worker", () => {
        const as = "worker";
        mounted = Headuard.createLink({ as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.as).toBe(as);
    });

    it("should be able to mount a link element whose crossorigin is set to preload", () => {
        const crossOrigin = "anonymous";
        mounted = Headuard.createLink({ crossOrigin });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.crossOrigin).toBe(crossOrigin);
    });

    it("should be able to mount a link element whose crossorigin is set to use-credentials", () => {
        const crossOrigin = "use-credentials";
        mounted = Headuard.createLink({ crossOrigin });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.crossOrigin).toBe(crossOrigin);
    });

    it("should be able to mount a link element with href attribute set", () => {
        const href = `http://localhost/${randomUUID()}`;
        mounted = Headuard.createLink({ href });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.href).toBe(href);
    });

    it("should warn that the hreflang attribute cannot be used if the href attribute is present", () => {
        const hreflang = randomUUID();
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ hreflang });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.hreflang).toBe(hreflang);
        expect(warn).toBeCalledTimes(1);
        expect(warn).toHaveBeenCalledWith(hreflangWithoutHref);
        
        warn.mockRestore();
    });

    it("should be able to mount a link element with the hreflang and href attributes set without warning", () => {
        const href = `http://localhost/${randomUUID()}`;
        const hreflang = randomUUID();
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ href, hreflang });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.href).toBe(href);
        expect(mounted.hreflang).toBe(hreflang);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should warn that the imageSizes attribute can only be used for rel='preload' and as='image'", () => {
        const imageSizes = "100px";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(warn).toBeCalledTimes(1);
        expect(warn).toHaveBeenCalledWith(imageSizesCanOnlyUsed);
        
        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set to auto", () => {
        const imageSizes = "auto";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set to auto", () => {
        const imageSizes = "auto";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in pixels", () => {
        const imageSizes = "100px";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in  em units", () => {
        const imageSizes = "2em";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in percentage", () => {
        const imageSizes = "45%";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in Viewport Width", () => {
        const imageSizes = "23vw";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in Viewport Height", () => {
        const imageSizes = "76vh";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in Viewport Minimum", () => {
        const imageSizes = "5vmin";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in Viewport Maximum", () => {
        const imageSizes = "8vmax";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with imageSizes attribute set in complex calculations", () => {
        const imageSizes = "calc(50% - 10px)";
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSizes, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSizes).toBe(imageSizes);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should warn that the imagesrcset attribute can only be used for rel='preload' and as='image'", () => {
        const imageSrcset = randomUUID();
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSrcset });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSrcset).toBe(imageSrcset);
        expect(warn).toBeCalledTimes(1);
        expect(warn).toHaveBeenCalledWith(imageSrcsetCanOnlyUsed);
        
        warn.mockRestore();
    });

    it("should be able to mount a link element with imagesrcset attribute set", () => {
        const imageSrcset = randomUUID();
        const rel = "preload";
        const as = "image";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ imageSrcset, rel, as });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.imageSrcset).toBe(imageSrcset);
        expect(mounted.rel).toBe(rel);
        expect(mounted.as).toBe(as);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

    it("should be able to mount a link element with integrity attribute set", () => {
        const integrity = randomUUID();
        mounted = Headuard.createLink({ integrity });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.integrity).toBe(integrity);
    });

    it("should be able to mount a link element with media attribute set", () => {
        const media = randomUUID();
        mounted = Headuard.createLink({ media });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.media).toBe(media);
    });

    it("should be able to mount a link element whose referrerPolicy is set to no-referrer", () => {
        const referrerPolicy = "no-referrer";
        mounted = Headuard.createLink({ referrerPolicy });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a link element whose referrerPolicy is set to no-referrer-when-downgrade", () => {
        const referrerPolicy = "no-referrer-when-downgrade";
        mounted = Headuard.createLink({ referrerPolicy });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a link element whose referrerPolicy is set to origin", () => {
        const referrerPolicy = "origin";
        mounted = Headuard.createLink({ referrerPolicy });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a link element whose referrerPolicy is set to origin-when-cross-origin", () => {
        const referrerPolicy = "origin-when-cross-origin";
        mounted = Headuard.createLink({ referrerPolicy });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a link element whose referrerPolicy is set to unsafe-url", () => {
        const referrerPolicy = "unsafe-url";
        mounted = Headuard.createLink({ referrerPolicy });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a link element whose rel is set to search", () => {
        const rel = "search";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to preload", () => {
        const rel = "preload";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to alternate", () => {
        const rel = "alternate";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to author", () => {
        const rel = "author";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to canonical", () => {
        const rel = "canonical";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to dns-prefetch", () => {
        const rel = "dns-prefetch";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to help", () => {
        const rel = "help";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to icon", () => {
        const rel = "icon";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to manifest", () => {
        const rel = "manifest";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to modulepreload", () => {
        const rel = "modulepreload";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to next", () => {
        const rel = "next";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to preconnect", () => {
        const rel = "preconnect";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to prefetch", () => {
        const rel = "prefetch";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to prerender", () => {
        const rel = "prerender";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to prev", () => {
        const rel = "prev";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to stylesheet", () => {
        const rel = "stylesheet";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to tag", () => {
        const rel = "tag";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to apple-touch-icon", () => {
        const rel = "apple-touch-icon";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to mask-icon", () => {
        const rel = "mask-icon";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element whose rel is set to shortcut icon", () => {
        const rel = "shortcut icon";
        mounted = Headuard.createLink({ rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.rel).toBe(rel);
    });

    it("should be able to mount a link element with title attribute set", () => {
        const title = randomUUID();
        mounted = Headuard.createLink({ title });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.title).toBe(title);
    });

    it("should be able to mount a link element whose type is set to text/css", () => {
        const type = "text/css";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to text/sass", () => {
        const type = "text/sass";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to text/scss", () => {
        const type = "text/scss";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to text/javascript", () => {
        const type = "text/javascript";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to image/png", () => {
        const type = "image/png";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to image/jpeg", () => {
        const type = "image/jpeg";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to image/gif", () => {
        const type = "image/gif";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to font/woff", () => {
        const type = "font/woff";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to font/woff2", () => {
        const type = "font/woff2";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to application/json", () => {
        const type = "application/json";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a link element whose type is set to application/xml", () => {
        const type = "application/xml";
        mounted = Headuard.createLink({ type });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.type).toBe(type);
    });

    it("should warn that the sizes attribute can only be used for rel='icon'", () => {
        const sizes = "10x10";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ sizes });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.sizes).toBe(sizes);
        expect(warn).toBeCalledTimes(1);
        expect(warn).toHaveBeenCalledWith(sizesCanOnlyUsed);
        
        warn.mockRestore();
    });

    it("should be able to mount a link element whose sizes is set properly", () => {
        const sizes = "10x10";
        const rel = "icon";
        const warn = jest.spyOn(console, "warn").mockImplementation();
        mounted = Headuard.createLink({ sizes, rel });

        expect(mounted.tagName).toBe("LINK");
        expect(mounted.sizes).toBe(sizes);
        expect(mounted.rel).toBe(rel);
        expect(warn).toBeCalledTimes(0);

        warn.mockRestore();
    });

});