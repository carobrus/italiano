
import { getConjugation } from "italian-verbs";
import { VerbsInfo } from "italian-verbs-dict";
import { TENSE_TYPE, VerbConjugated } from "../models/verb";
import { VERBS_COUNT } from "./constants";
import { getRandomNumber } from "./numbers";
let VERB_LIST: VerbsInfo = require('../assets/verbs.json');


export const getRandomVerb = (tense: TENSE_TYPE): VerbConjugated => {
    let result: VerbConjugated | undefined;

    do {
        try {
            const verbNumber = getRandomNumber(0, VERBS_COUNT);
            const infiniteVerb = Object.keys(VERB_LIST)[verbNumber];

            if (tense === 'PRESENTE') {
                result = {
                    verbInfinite: infiniteVerb,
                    persons: {
                        // @ts-expect-error
                        s1: getConjugation(VERB_LIST, infiniteVerb, tense, 1, 'S'),
                        // @ts-expect-error
                        s2: getConjugation(VERB_LIST, infiniteVerb, tense, 2, 'S'),
                        // @ts-expect-error
                        s3: getConjugation(VERB_LIST, infiniteVerb, tense, 3, 'S'),
                        // @ts-expect-error
                        p1: getConjugation(VERB_LIST, infiniteVerb, tense, 1, 'P'),
                        // @ts-expect-error
                        p2: getConjugation(VERB_LIST, infiniteVerb, tense, 2, 'P'),
                        // @ts-expect-error
                        p3: getConjugation(VERB_LIST, infiniteVerb, tense, 3, 'P'),
                    }
                };
            } else {
                result = {
                    verbInfinite: infiniteVerb,
                    persons: {
                        // @ts-expect-error
                        s2: getConjugation(VERB_LIST, infiniteVerb, tense, 2, 'S'),
                        // @ts-expect-error
                        p1: getConjugation(VERB_LIST, infiniteVerb, tense, 1, 'P'),
                        // @ts-expect-error
                        p2: getConjugation(VERB_LIST, infiniteVerb, tense, 2, 'P'),
                    }
                };

            }

        }
        catch {
            result = undefined
        }
    } while (result === undefined);


    return result;
}