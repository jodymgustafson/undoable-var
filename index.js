"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implements a variable with undo/redo
 */
class Undoable {
    /**
     * Creates a new instance with an initial value
     * @param value Initial value
     */
    constructor(value) {
        this.undoStack = [];
        this.redoStack = [];
        if (value !== undefined) {
            this.setValue(value);
        }
    }
    /**
     * Gets the current value
     */
    get value() {
        return this._current;
    }
    /**
     * Sets the current value and pushes the old value onto the undo stack
     */
    set value(v) {
        this.setValue(v);
    }
    /**
     * Sets the current value and pushes the old value onto the undo stack
     * @param value New value
     */
    setValue(value) {
        if (this._current !== undefined) {
            this.undoStack.push(this._current);
        }
        this._current = value;
        this.redoStack = [];
    }
    /**
     * Sets the value to the previous value and returns it
     */
    undo() {
        if (this.undoStack.length > 0) {
            if (this._current !== undefined) {
                this.redoStack.push(this._current);
            }
            this._current = this.undoStack.pop();
        }
        else {
            this._current = undefined;
        }
        return this._current;
    }
    /**
     * Sets the value back to the value before undo was called
     */
    redo() {
        if (this.redoStack.length > 0) {
            if (this._current !== undefined) {
                this.undoStack.push(this._current);
            }
            this._current = this.redoStack.pop();
        }
        else {
            this._current = undefined;
        }
        return this._current;
    }
    /**
     * Returns true if the value can be undone
     */
    get canUndo() {
        return this.undoStack.length > 0;
    }
    /**
     * Returns true if the value can be redone
     */
    get canRedo() {
        return this.redoStack.length > 0;
    }
}
exports.Undoable = Undoable;
