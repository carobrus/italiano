export interface VerbConjugated extends VerbSimple {
    verbInfinite: string;
    s1: string;
    s2: string;
    s3: string;
    p1: string;
    p2: string;
    p3: string;
}

export interface VerbSimple {
    s1: string;
    s2: string;
    s3: string;
    p1: string;
    p2: string;
    p3: string;
}

export interface VerbAns {
    person: string;
    correctAns?: boolean;
}