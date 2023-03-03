
import { createReducer, on } from "@ngrx/store";
import { pseudo_random_lowercase_strs } from "./actions_file";

export const initial_state: string = '';

export const _reducer_ = createReducer(
    initial_state,
    on(pseudo_random_lowercase_strs, () => char_loaf())
);

function char_loaf(): string {
    var loaf: Array<string> = ['', '', '', '', '', '', '', '', ''];
    function char(): string {
        return <string>String.fromCharCode(
            <number>(
                (Math.floor(Math.random() * 26) + 1) + 96)
        );
    };
    for (let y = 0; y <= 8; y++) for (let x = 0; x <= 8; x++) loaf[y] += char();
    return (`  ${loaf[0]}  ${loaf[1]}  ${loaf[2]}  
  ${loaf[3]}  ${loaf[4]}  ${loaf[5]}  
  ${loaf[6]}  ${loaf[7]}  ${loaf[8]}  `);
};