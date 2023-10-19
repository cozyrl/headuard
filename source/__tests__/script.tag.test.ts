
import { DocumentHead } from "../document.head";
import { randomUUID } from "crypto";
import { w001, w002 } from "../warnings";

describe("** Script tag (specs) **", () => {

    var mounted: HTMLScriptElement;

    it("should be able to mount a script element", () => {
        mounted = DocumentHead.createScript({});
        expect(mounted.tagName).toBe("SCRIPT");
    });

    it("should be able to mount a script element whose src is set", () => {
        const src = `http://localhost/${randomUUID()}`;
        mounted = DocumentHead.createScript({ src });

        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.src).toBe(src);
    });

    it("should be able to mount a script element whose async is set to true", () => {
        const async = true;
        mounted = DocumentHead.createScript({ async });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.async).toBeTruthy()
    });

    it("should be able to mount a script element whose async is set to false", () => {
        const async = false;
        mounted = DocumentHead.createScript({ async });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.async).toBeFalsy()
    });

    it("should be able to mount a script element whose crossorigin is set", () => {
        const crossOrigin = `https://${randomUUID()}.test`;
        mounted = DocumentHead.createScript({ crossOrigin });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.crossOrigin).toBe(crossOrigin)
    });

    it("should be able to mount a script element with defer attribute set", () => {
        const defer = true;
        const src = `http://localhost/${randomUUID()}`;
        mounted = DocumentHead.createScript({ defer, src });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.src).toBe(src)
        expect(mounted.defer).toBeTruthy()
    });

    it("should warn about the defer attribute having no effect on module scripts", () => {
        const defer = true;
        const type = 'module';
        const src = `http://localhost/${randomUUID()}`;

        const warn = jest.spyOn(console, "warn").mockImplementation()
        mounted = DocumentHead.createScript({ defer, type, src });

        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.defer).toBeTruthy();
        expect(mounted.type).toBe(type);
        expect(mounted.src).toBe(src);
        expect(warn).toBeCalledTimes(1);
        expect(warn).toHaveBeenCalledWith(w001);
        
        warn.mockRestore();
    });

    it("should warn about the defer attribute must not be used if the src attribute is absent", () => {
        const defer = true;

        const warn = jest.spyOn(console, "warn").mockImplementation()
        mounted = DocumentHead.createScript({ defer });

        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.defer).toBeTruthy();
        expect(warn).toBeCalledTimes(1);
        expect(warn).toHaveBeenCalledWith(w002);
        
        warn.mockRestore();
    });

    it("should be able to mount a script element whose defer is set to false", () => {
        const defer = false;
        mounted = DocumentHead.createScript({ defer });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.defer).toBeFalsy()
    });

    it("should be able to mount a script element with integrity attribute set", () => {
        const integrity = randomUUID();
        mounted = DocumentHead.createScript({ integrity});
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.integrity).toBe(integrity);
    });

    it("should be able to mount a script element whose nomodule is set to true", () => {
        const noModule = true;
        mounted = DocumentHead.createScript({ noModule });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.noModule).toBeTruthy()
    });

    it("should be able to mount a script element whose nomodule is set to false", () => {
        const noModule = false;
        mounted = DocumentHead.createScript({ noModule });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.noModule).toBeFalsy()
    });

    it("should be able to mount a script element with nonce attribute set", () => {
        const nonce = randomUUID();
        mounted = DocumentHead.createScript({ nonce});
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.nonce).toBe(nonce);
    });

    it("should be able to mount a script element whose referrerPolicy is set to no-referrer", () => {
        const referrerPolicy = "no-referrer";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose referrerPolicy is set to no-referrer-when-downgrade", () => {
        const referrerPolicy = "no-referrer-when-downgrade";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose referrerPolicy is set to origin", () => {
        const referrerPolicy = "origin";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose referrerPolicy is set to origin-when-cross-origin", () => {
        const referrerPolicy = "origin-when-cross-origin";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose referrerPolicy is set to same-origin", () => {
        const referrerPolicy = "same-origin";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose referrerPolicy is set to strict-origin", () => {
        const referrerPolicy = "strict-origin";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose referrerPolicy is set to strict-origin-when-cross-origin", () => {
        const referrerPolicy = "strict-origin-when-cross-origin";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose referrerPolicy is set to unsafe-url", () => {
        const referrerPolicy = "unsafe-url";
        mounted = DocumentHead.createScript({ referrerPolicy });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.referrerPolicy).toBe(referrerPolicy);
    });

    it("should be able to mount a script element whose type is set to text/javascript", () => {
        const type = "text/javascript";
        mounted = DocumentHead.createScript({ type });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a script element whose type is set to module", () => {
        const type = "module";
        mounted = DocumentHead.createScript({ type });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.type).toBe(type);
    });

    it("should be able to mount a script element whose type is set to importmap", () => {
        const type = "importmap";
        mounted = DocumentHead.createScript({ type });
        
        expect(mounted.tagName).toBe("SCRIPT");
        expect(mounted.type).toBe(type);
    });

});