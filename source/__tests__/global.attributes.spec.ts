
import { Headuard } from "../headuard";
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
        mounted = Headuard.createTitle(attributes);

        for (const [key, value] of Object.entries(attributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        Headuard.unmount(mounted);
    });


    it("should be able to apply the global attributes to the base tag", () => {
        mounted = Headuard.createBase(globalAttributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        Headuard.unmount(mounted);
    });

    it("should be able to apply the global attributes to the base tag", () => {
        mounted = Headuard.createMeta(globalAttributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        Headuard.unmount(mounted);
    });

    it("should be able to apply the global attributes to the script tag", () => {
        const attributes = Object.assign({}, globalAttributes);
        mounted = Headuard.createScript(attributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        Headuard.unmount(mounted);
    });

    it("should be able to apply the global attributes to the link tag", () => {
        const attributes = Object.assign({}, globalAttributes);
        mounted = Headuard.createLink(attributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (mounted as any)[key] = value;
            expect((mounted as any)[key]).toBe(value);
        }
      
        Headuard.unmount(mounted);
    });

});