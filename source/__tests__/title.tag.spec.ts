
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("** Title tag (specs) **", () => {

    var mounted: HTMLTitleElement;
    var textContent: string;

    beforeEach(() => {
        textContent = randomUUID();
    })

    it("should be able to mount an title element with text content", () => {
        mounted = Headuard.createTitle({ textContent });
        expect(mounted.tagName).toBe("TITLE");
        expect(mounted.textContent).toBe(textContent);
    });

    it("should be able to unmount an title element", () => {
        mounted = Headuard.createTitle({ textContent });
        Headuard.unmount(mounted);
        expect(document.head.contains(mounted)).toBe(false);
    });

});