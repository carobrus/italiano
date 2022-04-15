// 
import React from "react";
import { getConjugation } from 'italian-verbs';
import { getRandomVerb } from "../../utils/verbs";
// import ItalianVerbsList from './assets/verbs.json';


const ConiugazioniScreen = (): JSX.Element => {
    return (
        <>
            <div>Verbs!</div>
            {getRandomVerb()}
        </>
    );
}

export { ConiugazioniScreen };