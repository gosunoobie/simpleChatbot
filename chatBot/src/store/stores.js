import { writable } from 'svelte/store';
import Elizabot from 'elizabot';
export let messageArray = writable([]);
export const elizabot = new Elizabot();
// export let currentValue = message.get();



// export let resetMessage = {...message.get()};
// resetMessage = '';


export function reply(text){
    messageArray.update(value =>[...value,elizabot.transform(text)]);
}

export function add(text){
    messageArray.update(value => [...value, text]);
}



