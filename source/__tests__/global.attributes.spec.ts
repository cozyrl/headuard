
import { DocumentHead } from "../document.head";
import { HeadElement } from "../types"
import { randomUUID } from "crypto";
import { globalAttributes } from "../utilities";

describe("** Global attributes (specs) **", () => {

    var mounted: HeadElement;
    var textContent: string;

    beforeEach(() => {
        textContent = randomUUID();
    })

    it("should be able to apply global attributes to the title tag with the required textContent", () => {
        const attributes = Object.assign({ textContent }, globalAttributes);
        mounted = DocumentHead.createTitle(attributes);

        for (const [key, value] of Object.entries(attributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        DocumentHead.unmount(mounted);
    });


    it("should be able to apply the global attributes to the base tag", () => {
        mounted = DocumentHead.createBase(globalAttributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        DocumentHead.unmount(mounted);
    });

    it("should be able to apply the global attributes to the base tag", () => {
        mounted = DocumentHead.createMeta(globalAttributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        DocumentHead.unmount(mounted);
    });

    it("should be able to apply the global attributes to the script tag", () => {
        const attributes = Object.assign({}, globalAttributes);
        mounted = DocumentHead.createScript(attributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        DocumentHead.unmount(mounted);
    });

    it("should be able to apply the global attributes to the link tag", () => {
        const attributes = Object.assign({}, globalAttributes);
        mounted = DocumentHead.createLink(attributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        DocumentHead.unmount(mounted);
    });

});