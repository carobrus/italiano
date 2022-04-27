export interface VerbCollection {
    [key: string]: VerbConjugations;
}

export interface VerbConjugations {
    ger?: VerbConjugation;
    inf?: VerbConjugation;
    impr?: VerbConjugation;
    cond?: VerbConjugation;
    ind?: VerbConjugation;
    part?: VerbConjugation;
    sub?: VerbConjugation;
}

export interface VerbConjugation {
    pres?: VerbTense;
    past?: VerbTense;
    impf?: VerbTense;
    fut?: VerbTense;
}

export interface VerbAns {
    person: PersonType;
    ans?: string;
    correctAns?: boolean;
}

export type VerbTense = {
    [key in PersonType]?: string;
};

export type Tenses = {
    [key in TenseType]: PersonType[];
};

export type TenseType = 'PRESENTE' | 'IMPERATIVO';

export type PersonType = 's1' | 's2' | 's3' | 'p1' | 'p2' | 'p3';
