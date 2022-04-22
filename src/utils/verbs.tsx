// @ts-nocheck
import { getConjugation, ItalianTense } from "italian-verbs";
import { VerbsInfo } from "italian-verbs-dict";
import { VerbConjugated } from "../models/verb";
import { VERBS_COUNT } from "./constants";
import { getRandomNumber } from "./numbers";
let VERB_LIST: VerbsInfo = require('../assets/verbs.json');


export const getRandomVerb = (italianTense: ItalianTense): VerbConjugated => {
    let result: VerbConjugated | undefined;

    do {
        try {
            const verbNumber = getRandomNumber(0, VERBS_COUNT);
            const infiniteVerb = Object.keys(VERB_LIST)[verbNumber];

            result = {
                verbInfinite: infiniteVerb,
                s2: getConjugation(VERB_LIST, infiniteVerb, italianTense, 2, 'S'),
                s1: getConjugation(VERB_LIST, infiniteVerb, italianTense, 1, 'S'),
                s3: getConjugation(VERB_LIST, infiniteVerb, italianTense, 3, 'S'),
                p1: getConjugation(VERB_LIST, infiniteVerb, italianTense, 1, 'P'),
                p2: getConjugation(VERB_LIST, infiniteVerb, italianTense, 2, 'P'),
                p3: getConjugation(VERB_LIST, infiniteVerb, italianTense, 3, 'P'),
            };
        }
        catch {
            result = undefined
        }
    } while (result === undefined);

    return result;
}