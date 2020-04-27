# Undoable Wrapper

Implements a wrapper for a variable with support for undo/redo.

## Install

`npm i undoable-wrapper`

## Usage

This package contains one class called `Undoable`.

Create an instance with an initial value.

`const undoableString = new Undoable("")`

Set it to a new value using the `value` property.

`undoableString.value = "a"`

You can always get the current value using the `value` property too.

`undoableString.value // => "a"`

Undo the last value set using `undo()`. Undo returns the new value.

`undoableString.undo() // => ""`

Redo the last undo using `redo()`. Redo also returns the new value.

`undoableString.redo() // => "a"`

Check if undo is possible using `canUndo`.

`undoableString.canUndo // => true`

Check if redo is possible using `canRedo`.

`undoableString.canRedo // => false`

## Usage with non-primitive values

When using non-primitive values such as objects or arrays be careful that you don't set the value then change it's properties or elements later. The value stored in this class is only the pointer. Therefore every time you set the value you should clone the object or array.

If you want the Undoable class to handle this for you pass `true` as a second parameter to the constructor.

`const undoableArray = new Undoable([1, 2], true)`

Now every time you set the value it will be deep-cloned first (using JSON.stringify()).

## TypeScript Support

This package includes the type definition file.
The Undoable class is generic so you can specify a type, or it will assume the type of the initial value.

`let undoableNumber: Undoable<number>;`
