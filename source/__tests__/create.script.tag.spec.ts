
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Create script tag specifications **/**", () => {

    var tag: HTMLScriptElement;

    it("must be able to create a meta tag element without conflict.", () => {
        tag = Headuard.createScript({});
        expect(tag.tagName).toBe("SCRIPT");
    });

    it("must be able to create a meta tag element whose src attribute is defined.", () => {
        const src = `http://localhost/${randomUUID()}`;
        tag = Headuard.createScript({ src });

        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.src).toBe(src);
    });

    it("must be able to create a script tag element whose the type attribute is set to text/javascript.", () => {
        const type = "text/javascript";
        tag = Headuard.createScript({ type });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a script tag element whose the type attribute is set to module.", () => {
        const type = "module";
        tag = Headuard.createScript({ type });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a script tag element whose the type attribute is set to importmap.", () => {
        const type = "importmap";
        tag = Headuard.createScript({ type });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.type).toBe(type);
    });

    it("must be able to create a meta tag element whose async attribute is set to true.", () => {
        const async = true;
        tag = Headuard.createScript({ async });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.async).toBeTruthy();
    });

    it("must be able to create a meta tag element whose async attribute is set to false.", () => {
        const async = false;
        tag = Headuard.createScript({ async });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.async).toBeFalsy();
    });

    it("must be able to create a meta tag element whose crossOrigin attribute is defined.", () => {
        const crossOrigin = randomUUID();
        tag = Headuard.createScript({ crossOrigin });

        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.crossOrigin).toBe(crossOrigin);
    });

    it("must be able to create a meta tag element whose crossOrigin attribute is null.", () => {
        const crossOrigin = null;
        tag = Headuard.createScript({ crossOrigin });

        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.crossOrigin).toBeNull();
    });

    it("must be able to create a meta tag element whose defer attribute is set to true.", () => {
        const defer = true;
        tag = Headuard.createScript({ defer });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.defer).toBeTruthy();
    });

    it("must be able to create a meta tag element whose defer attribute is set to false.", () => {
        const defer = false;
        tag = Headuard.createScript({ defer });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.defer).toBeFalsy();
    });

    it("must be able to create a meta tag element whose integrity attribute is defined.", () => {
        const integrity = randomUUID();
        tag = Headuard.createScript({ integrity });

        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.integrity).toBe(integrity);
    });

    it("must be able to create a meta tag element whose nomodule attribute is set to true.", () => {
        const noModule = true;
        tag = Headuard.createScript({ noModule });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.noModule).toBeTruthy();
    });

    it("must be able to create a meta tag element whose nomodule attribute is set to false.", () => {
        const noModule = false;
        tag = Headuard.createScript({ noModule });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.noModule).toBeFalsy();
    });

    it("must be able to create a meta tag element whose nonce attribute is defined.", () => {
        const nonce = randomUUID();
        tag = Headuard.createScript({ nonce });

        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.nonce).toBe(nonce);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to no-referrer.", () => {
        const referrerPolicy = "no-referrer";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to no-referrer-when-downgrade.", () => {
        const referrerPolicy = "no-referrer-when-downgrade";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to origin.", () => {
        const referrerPolicy = "origin";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to origin-when-cross-origin.", () => {
        const referrerPolicy = "origin-when-cross-origin";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to same-origin.", () => {
        const referrerPolicy = "same-origin";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to strict-origin.", () => {
        const referrerPolicy = "strict-origin";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to strict-origin-when-cross-origin.", () => {
        const referrerPolicy = "strict-origin-when-cross-origin";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

    it("must be able to create a script tag element whose the referrerPolicy attribute is set to unsafe-url.", () => {
        const referrerPolicy = "unsafe-url";
        tag = Headuard.createScript({ referrerPolicy });
        
        expect(tag.tagName).toBe("SCRIPT");
        expect(tag.referrerPolicy).toBe(referrerPolicy);
    });

});