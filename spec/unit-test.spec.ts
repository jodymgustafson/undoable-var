import { Undoable } from ".."

describe("When test undo buffer", () => {
    it("initial state should be empty", () => {
        const undoable = new Undoable<string>();
        expect(undoable.value).toBeUndefined();
        expect(undoable.canRedo).toBe(false);
        expect(undoable.canUndo).toBe(false);
        expect(undoable.undo()).toBeUndefined();
        expect(undoable.redo()).toBeUndefined();
    });

    it("should have 1 item after pushing a value", () => {
        const undoable = new Undoable("");
        undoable.value = "a";
        expect(undoable.value).toBe("a", "current should be a");
        expect(undoable.canRedo).toBe(false);
        expect(undoable.canUndo).toBe(true);
        expect(undoable.redo()).toBeUndefined();
        expect(undoable.undo()).toBe("");
    });

    it("should return 1 item when undo", () => {
        const undoable = new Undoable("");
        let s = "a";
        undoable.value = s;
        s = "ab";
        undoable.value = s;
        s = undoable.undo();
        expect(s).toBe("a", "Undo should return a");
        expect(undoable.value).toBe("a");
        expect(undoable.canRedo).toBe(true);
        expect(undoable.canUndo).toBe(true);
        expect(undoable.undo()).toBe("");
    });

    it("should return item when redo with 2 item2", () => {
        const undoable = new Undoable("");
        let s = "a";
        undoable.value = s;
        s = "ab";
        undoable.value = s;
        s = "abc"
        undoable.value = s;
        s = undoable.undo();
        expect(s).toBe("ab");
        s = undoable.redo();
        expect(s).toBe("abc");
        expect(undoable.value).toBe("abc");
        expect(undoable.canRedo).toBe(false);
        expect(undoable.canUndo).toBe(true);
    });
});