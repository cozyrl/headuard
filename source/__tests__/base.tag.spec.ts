
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("** Base tag (specs) **", () => {

    var mounted: HTMLBaseElement;

    it("should be able to mount an base element", () => {
        mounted = Headuard.createBase({});
        expect(mounted.tagName).toBe("BASE");
    });

    it("should be able to mount an base element with href", () => {
        const href = `http://localhost/${randomUUID()}`;
        mounted = Headuard.createBase({ href });
 
        expect(mounted.tagName).toBe("BASE");
        expect(mounted.href).toBe(href);
    });

    it("should be able to mount a base element whose target is set to _self", () => {
        const target = "_self";
        mounted = Headuard.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to mount a base element whose target is set to _blank", () => {
        const target = "_blank";
        mounted = Headuard.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to mount a base element whose target is set to _parent", () => {
        const target = "_blank";
        mounted = Headuard.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to mount a base element whose target is set to _top", () => {
        const target = "_top";
        mounted = Headuard.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to unmount an base element", () => {     
        mounted = Headuard.createBase({});
        Headuard.unmount(mounted);

        expect(document.head.contains(mounted)).toBe(false);
    });

});