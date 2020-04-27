# Undoable Variable

Implements a variable with support for undo/redo.

## Install

`npm i undoable-var`

## Usage

This package contains one class called Undoable.

Create an instance with an initial value.

`const undoableString = new Undoable("")`

Set it to a new value.

`undoableString.value = "a"`

You can always get the current value using the `value` property.

`undoableString.value // => "a"`

Undo the last value set. Undo returns the new value.

`undoableString.undo() // => ""`

Redo the value. Redo also returns the new value.

`undoableString.redo() // => "a"`

Check if undo is possible.

`undoableString.canUndo // => true`

Check if redo is possible.

`undoableString.canRedo // => false`

## Usage with non-primitive values

When using non-primitive values such as objects or arrays be careful that you don't set the value then change it's properties or elements later. The value stored in this class is only the pointer. Therefore every time you set the value you must clone the object or array.

If you want the Undoable class to handle this for you pass `true` as a second parameter to the constructor.

`const undoableArray = new Undoable([1, 2], true)`

Now every time you set the value it will be deep-cloned first (using JSON.stringify()).

## TypeScript Support

This package includes the type definition file.
The Undoable class is generic so you can specify a type, or it will assume the type of the initial value.

`let undoableNumber: Undoable<number>;`
