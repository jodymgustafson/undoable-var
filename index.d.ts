/**
 * Implements a variable with undo/redo
 */
export declare class Undoable<T> {
    private readonly cloneValue;
    private _current?;
    private undoStack;
    private redoStack;
    /**
     * Creates a new instance with an initial value
     * @param value Initial value
     * @param cloneValue If true non-primitive values will be deep-cloned whenever the value is set
     */
    constructor(value?: T, cloneValue?: boolean);
    /**
     * Gets the current value
     */
    get value(): T | undefined;
    /**
     * Sets the current value and pushes the old value onto the undo stack
     */
    set value(v: T);
    /**
     * Sets the current value and pushes the old value onto the undo stack
     * @param value New value
     */
    setValue(value: T): void;
    /**
     * Sets the value to the previous value and returns it
     */
    undo(): T | undefined;
    /**
     * Sets the value back to the value before undo was called
     */
    redo(): T | undefined;
    /**
     * Returns true if the value can be undone
     */
    get canUndo(): boolean;
    /**
     * Returns true if the value can be redone
     */
    get canRedo(): boolean;
}
