
import { stringify } from "querystring";
import { TenseType, VerbCollection, VerbTense } from "../models/verb";
import { VERBS_COUNT } from "./constants";
import { getRandomNumber } from "./numbers";
let VERB_LIST: VerbCollection = require('../assets/verbs.json');


export const getRandomVerb = (tense: TenseType): { verbInfinite: string, persons: VerbTense } => {
    let result: VerbTense | undefined;
    let infiniteVerb = "";

    do {
        try {
            const verbNumber = getRandomNumber(0, VERBS_COUNT);
            infiniteVerb = Object.keys(VERB_LIST)[verbNumber];

            if (tense === 'PRESENTE') {
                result = VERB_LIST[infiniteVerb]['ind']!['pres'];
            } else {
                result = VERB_LIST[infiniteVerb]['impr']!['pres'];
            }

        }
        catch {
            result = undefined
        }
    } while (result === undefined);


    return { verbInfinite: infiniteVerb, persons: result };
}