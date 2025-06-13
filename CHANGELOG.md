## 0.3.5

- Default to longest match

## 0.2.0

- Internal: Rewrite the parser in moonlex/moonyacc.
    - `'''` now invalid syntax for character.
    - `'\\'` now can be safely used in character.
    - String literal now support escape sequence.
    - Support named regex, eg. `let digit = ['0'-'9'];`.

## 0.1.8

- Internal: Fix DIET data structure

## 0.1.6

- Fix parsing character literal with escape sequence.

## 0.1.5

- Support matching '\x00' in the input string.
