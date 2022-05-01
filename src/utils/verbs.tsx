import { TenseType, VerbCollection, VerbIndex, VerbTense } from "../models/verb";
import { getRandomNumber } from "./numbers";
let VERB_LIST: VerbCollection = require('../assets/verbs.json');
let VERB_INDEX: VerbIndex = require('../assets/index-verbs.json');

export const getRandomVerb = (tense: TenseType, ratio: number): { verbInfinite: string, persons: VerbTense } => {
    let result: VerbTense | undefined;
    let infiniteVerb = '';
    let numberOfTry = 0;

    do {
        try {
            infiniteVerb = getRandomInfiniteVerb(ratio);
            if (tense === 'PRESENTE') {
                result = VERB_LIST[infiniteVerb]['ind']!['pres'];
            } else if (tense === 'IMPERATIVO') {
                result = VERB_LIST[infiniteVerb]['impr']!['pres'];
            }
        }
        catch {
            numberOfTry++;
        }
    } while (result === undefined && numberOfTry < 10)

    return { verbInfinite: infiniteVerb, persons: result ?? {} };
}

const getRandomInfiniteVerb = (ratio: number): string => {
    const elems = ["regular", "irregular", "irregular_on_root"]
    const weights = [(10 - ratio) * 2, ratio, ratio]; // weight of each element
    const totalWeight = weights.reduce((a, b) => a + b, 0);

    const weighedElems = [];
    let currentElem = 0;
    while (currentElem < elems.length) {
        for (let i = 0; i < weights[currentElem]; i++)
            weighedElems[weighedElems.length] = elems[currentElem];
        currentElem++;
    }

    const rnd = Math.floor(Math.random() * totalWeight);
    const typeOfVerb = weighedElems[rnd];

    const verbNumber = getRandomNumber(0, VERB_INDEX[typeOfVerb].length);
    return VERB_INDEX[typeOfVerb][verbNumber];
}