/**
 * Implements a variable with undo/redo
 */
export class Undoable<T>
{
    private _current?: T;
    private undoStack: T[] = [];
    private redoStack: T[] = [];

    /**
     * Creates a new instance with an initial value
     * @param value Initial value
     */
    constructor(value?: T) {
        if (value !== undefined) {
            this.setValue(value);
        }
    }

    /**
     * Gets the current value
     */
    get value(): T|undefined {
        return this._current;
    }

    /**
     * Sets the current value and pushes the old value onto the undo stack
     */
    set value(v: T) {
        this.setValue(v);
    }

    /**
     * Sets the current value and pushes the old value onto the undo stack
     * @param value New value
     */
    setValue(value: T) {
        if (this._current !== undefined) {
            this.undoStack.push(this._current);
        }
        this._current = value;
        this.redoStack = [];
    }

    /**
     * Sets the value to the previous value and returns it
     */
    undo(): T|undefined {
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
    redo(): T|undefined {
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
    get canUndo(): boolean {
        return this.undoStack.length > 0;
    }

    /**
     * Returns true if the value can be redone
     */
    get canRedo(): boolean {
        return this.redoStack.length > 0;
    }
}
