import {writable} from 'svelte/store';

let data = {'1111':{number: '1111', pin: '1111'},
            '2222':{number: '2222', pin: '2222'}};

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable('menu');
