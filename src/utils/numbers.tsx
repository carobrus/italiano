import { VERBS_COUNT } from "./constants";

export const getRandomNumber = (min = 0, max = VERBS_COUNT): number => {
    let difference = max - min;
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}