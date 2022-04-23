import React, { useEffect, useState } from "react";
import { getRandomVerb } from "../../utils/verbs";
import PresentModalContent from "./PresentModalContent";
import { PERSON, TENSE_TYPE, VerbAns, VerbConjugated } from "../../models/verb";
import { Modal } from "../../components";
import { ReactComponent as InformationIcon } from '../../assets/svg/information-circle.svg';
import { CheckCircleIcon, CheckIcon, TrashIcon, XCircleIcon } from "../../assets/svg";
import { PERSON_MAP, TENSES_ALLOWED } from "../../utils/constants";

const ConiugazioniScreen = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const [verb, setVerb] = useState<VerbConjugated>();
    const [answear, setAnswear] = useState<VerbAns[]>([]);
    const [correctAnswearCount, setCorrectAnswearCount] = useState(0);
    const [wrongAnswearCount, setWrongAnswearCount] = useState(0);
    const [areAllItemsCorrect, setAreAllItemsCorrect] = useState(false);
    const [tense, setTense] = useState<TENSE_TYPE>('PRESENTE');

    useEffect(() => {
        const correctAnsLocal = localStorage.getItem('correctAnswears');
        const wrongAnsLocal = localStorage.getItem('wrongAnswears');
        if (correctAnsLocal && wrongAnsLocal) {
            setCorrectAnswearCount(parseInt(correctAnsLocal));
            setWrongAnswearCount(parseInt(wrongAnsLocal));
        }
    }, [])

    useEffect(() => {
        setVerb(getRandomVerb(tense));
    }, [tense])

    useEffect(() => {
        localStorage.setItem('correctAnswears', JSON.stringify(correctAnswearCount));
    }, [correctAnswearCount]);

    useEffect(() => {
        localStorage.setItem('wrongAnswears', JSON.stringify(wrongAnswearCount));
    }, [wrongAnswearCount]);

    const getAnotherVerb = (): void => {
        setAnswear([]);
        setAreAllItemsCorrect(false);
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        setVerb(getRandomVerb(tense));
    }

    const checkResult = (): void => {
        if (verb !== undefined) {
            let alreadyCorrect = 0;
            let correctAnswearCount = 0;
            let wrongAnswearCount = 0;

            answear.forEach(a => {
                if (a.correctAns === false || a.correctAns === undefined) {
                    if (String(verb.persons[a.person]).toLowerCase() === String(a.ans).toLowerCase()) {
                        a.correctAns = true;
                        correctAnswearCount++;
                    } else {
                        a.correctAns = false;
                        wrongAnswearCount++;
                    }
                }
                else if (a.correctAns) {
                    alreadyCorrect++;
                }
            })

            const nonAnsweared = TENSES_ALLOWED[tense].length - answear.length;
            if (nonAnsweared > 0) {
                wrongAnswearCount += nonAnsweared;
            }

            setCorrectAnswearCount(oldValue => oldValue + correctAnswearCount);
            setWrongAnswearCount(oldValue => oldValue + wrongAnswearCount);

            if (alreadyCorrect + correctAnswearCount === TENSES_ALLOWED[tense].length) {
                setAreAllItemsCorrect(true)
            }
        }
    }

    const handleChangeInput = (evt: React.FormEvent<HTMLInputElement>) => {
        const name = evt.currentTarget.name as PERSON;
        const value = evt.currentTarget.value;

        setAnswear(oldAnswears => {
            const ansFiltered = oldAnswears.filter(o => o.person !== name)
            ansFiltered.push({ person: name, ans: value })
            return ansFiltered;
        });
    }

    const onChangeTense = (evt: React.FormEvent<HTMLSelectElement>) => {
        setTense(evt.currentTarget.value as TENSE_TYPE);
    }

    const isInputCorrect = (person: string): boolean => {
        return (answear.find(a => a.person === person && a.correctAns) !== undefined)
    }

    return (
        <div className="flex flex-col items-center mb-auto">
            {showModal && <Modal onClose={() => setShowModal(false)}> <PresentModalContent /> </Modal>}
            <div className="bg-center bg-cover bg-cinque-effect w-full flex items-center justify-center py-4 rounded-b-3xl">
                <div className="max-w-custom mx-6 flex flex-col place-content-center">

                    <h1 className="text-2xl uppercase font-semibold pb-3 text-white text-center">Coniugazione dei verbi italiani</h1>
                    <div className="flex items-center">
                        <div className="flex-grow group">
                            <div className="ml-9 bg-tertiary-red group-hover:bg-secondary-red rounded-full px-2 border-2 border-white text-white">
                                <select
                                    id="tense"
                                    name="tense"
                                    className="px-1 py-1 w-full rounded-full bg-tertiary-red group-hover:bg-secondary-red text-center font-semibold focus:outline-none"
                                    onChange={onChangeTense}
                                >
                                    {Object.keys(TENSES_ALLOWED).map((t) => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                        </div>
                        <button className="w-6 ml-3" onClick={() => setShowModal(true)}>
                            <InformationIcon className="text-white" />
                        </button>
                    </div>

                    <div className="mt-6 mb-2">
                        <div className="bg-tertiary-red rounded-full py-2 border-2 border-white text-center font-semibold text-white my-2 uppercase">
                            {verb && verb.verbInfinite}
                        </div>
                        {TENSES_ALLOWED[tense].map(p => {
                            const isCorrect = isInputCorrect(p);
                            return <div key={p} className="flex items-center bg-white text-black rounded-full mb-2 py-1 font-medium">
                                <div className="w-20 text-center border-r-2 border-neutral-300 text-sm cursor-default">{PERSON_MAP[p]}</div>
                                <input
                                    className={`flex-grow mx-4 focus:outline-none bg-white ${!isCorrect && 'pr-7'}`}
                                    onChange={handleChangeInput}
                                    name={p}
                                    disabled={isCorrect}
                                    autoComplete="off"
                                >
                                </input>
                                {isCorrect && <CheckIcon className="text-primary-green w-5 mr-2" />}
                            </div>
                        })}
                    </div>

                    <div className="flex space-x-4 justify-center">
                        <button onClick={getAnotherVerb} className="rounded-full bg-primary-green hover:bg-secondary-green text-white font-semibold w-32 py-1 place-self-center">
                            Cambia Verbo
                        </button>
                        <button onClick={checkResult} disabled={areAllItemsCorrect} className={`rounded-full bg-primary-green hover:bg-secondary-green text-white font-semibold w-32 py-1 place-self-center ${areAllItemsCorrect && 'bg-secondary-green cursor-default'}`}>
                            Check
                        </button>
                    </div>

                </div>
            </div>

            <div className="flex items-center">
                <div className="flex tabular-nums items-center text-center py-3 text-3xl font-semibold text-black border-2 border-black bg-white rounded-full mt-6 mb-8 divide-x-2 divide-neutral-300">
                    <div className="px-6 flex">
                        <CheckCircleIcon className="text-primary-green w-6 mr-2" />
                        <div> {correctAnswearCount} </div>
                    </div>
                    <div className="px-6 flex">
                        <XCircleIcon className="text-primary-red w-6 mr-2" />
                        <div> {wrongAnswearCount} </div>
                    </div>
                </div>
                <button className="-mr-8">
                    <TrashIcon className="text-black w-6 ml-2" onClick={() => {
                        setCorrectAnswearCount(0);
                        setWrongAnswearCount(0);
                    }} />
                </button>
            </div>
        </div>
    );
}

export { ConiugazioniScreen };