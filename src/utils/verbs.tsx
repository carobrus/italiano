import { getConjugation } from "italian-verbs";
import { getRandomNumber } from "./numbers";
let VerbList = require('../assets/verbs.json');

export const getRandomVerb = (): string => {
    const verbNumber = getRandomNumber(0, 6122);

    const infiniteVerb = Object.keys(VerbList)[verbNumber];

    // @ts-ignore
    const conjugation = getConjugation(VerbList, infiniteVerb, 'PRESENTE', 3, 'S');

    return conjugation;
}