export interface VerbConjugated {
    verbInfinite: string;
    persons: Persons;
}

export interface VerbAns {
    person: PERSON;
    ans?: string;
    correctAns?: boolean;
}

export type Persons = {
    [key in PERSON]?: string;
};

export type Tenses = {
    [key in TENSE_TYPE]: PERSON[];
};

export type TENSE_TYPE = 'PRESENTE' | 'IMPERATIVO';

export type PERSON = 's1' | 's2' | 's3' | 'p1' | 'p2' | 'p3';
