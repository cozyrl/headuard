
import { Headuard } from "../headuard";
import { HeadElement } from "../types";

describe("**/** Lifecycles specifications **/**", () => {

    var tag: HeadElement;

    it("must be able to mount and unmount title tag", () => {        
        tag = document.createElement("title");

        // mount title tag element
        Headuard.mount(tag)
        expect(tag.tagName).toBe("TITLE");

        // unmount title tag element
        Headuard.unmount(tag);
        expect(document.head.contains(tag)).toBeFalsy();
    });

    it("must be able to mount and unmount base tag", () => {        
        tag = document.createElement("base");

        // mount base tag element
        Headuard.mount(tag)
        expect(tag.tagName).toBe("BASE");

        // unmount base tag element
        Headuard.unmount(tag);
        expect(document.head.contains(tag)).toBeFalsy();
    });

    it("must be able to mount and unmount link tag", () => {        
        tag = document.createElement("link");

        // mount link tag element
        Headuard.mount(tag)
        expect(tag.tagName).toBe("LINK");

        // unmount link tag element
        Headuard.unmount(tag);
        expect(document.head.contains(tag)).toBeFalsy();
    });

    it("must be able to mount and unmount meta tag", () => {        
        tag = document.createElement("meta");

        // mount meta tag element
        Headuard.mount(tag)
        expect(tag.tagName).toBe("META");

        // unmount meta tag element
        Headuard.unmount(tag);
        expect(document.head.contains(tag)).toBeFalsy();
    });

    it("must be able to mount and unmount script tag", () => {        
        tag = document.createElement("script");

        // mount script tag element
        Headuard.mount(tag)
        expect(tag.tagName).toBe("SCRIPT");

        // unmount script tag element
        Headuard.unmount(tag);
        expect(document.head.contains(tag)).toBeFalsy();
    });

});