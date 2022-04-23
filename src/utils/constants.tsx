import { Tenses } from "../models/verb";

export const VERBS_COUNT = 6122;

export const PERSON_MAP = {
    s1: 'io',
    s2: 'tu',
    s3: 'lui/lei',
    p1: 'noi',
    p2: 'voi',
    p3: 'loro'
}

export const TENSES_ALLOWED: Tenses =
{
    'PRESENTE': ['s1', 's2', 's3', 'p1', 'p2', 'p3'],
    'IMPERATIVO': ['s2', 'p1', 'p2'],
}