
import { DocumentHead } from "../document.head";
import { randomUUID } from "crypto";

describe("** Base tag (specs) **", () => {

    var mounted: HTMLBaseElement;

    it("should be able to mount an base element", () => {
        mounted = DocumentHead.createBase({});
        expect(mounted.tagName).toBe("BASE");
    });

    it("should be able to mount an base element with href", () => {
        const href = `http://localhost/${randomUUID()}`;
        mounted = DocumentHead.createBase({ href });
 
        expect(mounted.tagName).toBe("BASE");
        expect(mounted.href).toBe(href);
    });

    it("should be able to mount a base element whose target is set to _self", () => {
        const target = "_self";
        mounted = DocumentHead.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to mount a base element whose target is set to _blank", () => {
        const target = "_blank";
        mounted = DocumentHead.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to mount a base element whose target is set to _parent", () => {
        const target = "_blank";
        mounted = DocumentHead.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to mount a base element whose target is set to _top", () => {
        const target = "_top";
        mounted = DocumentHead.createBase({ target });
        

        expect(mounted.tagName).toBe("BASE");
        expect(mounted.target).toBe(target);
    });

    it("should be able to unmount an base element", () => {     
        mounted = DocumentHead.createBase({});
        DocumentHead.unmount(mounted);

        expect(document.head.contains(mounted)).toBe(false);
    });

});