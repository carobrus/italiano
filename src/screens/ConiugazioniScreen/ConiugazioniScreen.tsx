import React, { useEffect, useState } from "react";
import { getRandomVerb } from "../../utils/verbs";
import PresentModalContent from "./PresentModalContent";
import { VerbAns, VerbConjugated } from "../../models/verb";
import { Modal } from "../../components";
import { ReactComponent as XIcon } from '../../assets/svg/x-circle.svg';
import { ReactComponent as CheckIcon } from '../../assets/svg/check-circle.svg';
import { ReactComponent as InformationIcon } from '../../assets/svg/information-circle.svg';

const currentTensesAllow = ["PRESENTE", "IMPERATIVO"]
const person = [['io', 's1'], ['tu', 's2'], ['lui/lei', 's3'], ['noi', 'p1'], ['voi', 'p2'], ['loro', 'p3']]

const ConiugazioniScreen = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const [verb, setVerb] = useState<VerbConjugated>();
    const [answear, setAnswear] = useState<VerbAns[]>([]);
    const [correctAnswearCount, setCorrectAnswearCount] = useState(0);
    const [wrongAnswearCount, setWrongAnswearCount] = useState(0);

    useEffect(() => {
        setVerb(getRandomVerb('PRESENTE'));
    }, [])

    const getAnotherVerb = (): void => {
        setVerb(getRandomVerb('PRESENTE'))
    }

    const checkResult = (): void => {
        console.log(verb);

        let areAllCorrect = true;
        if (verb !== undefined) {
            let correctAnswearCount = 0;
            let wrongAnswearCount = 0;

            /*if (answear !== undefined && verb !== undefined) {
                for (let key in answear) {
                    if (!(key in verb!)) isCorrect = false;
                    if (String(answear[key as keyof VerbSimple]) !== String(verb[key as keyof VerbConjugated])) isCorrect = false;
                }
            }*/

            answear.forEach(a => {
                if (String(verb[a.person as keyof VerbConjugated]) === a.ans) {
                    a.correctAns = true;
                    correctAnswearCount++;
                } else {
                    a.correctAns = false;
                    wrongAnswearCount++;
                }
            })

            setCorrectAnswearCount(oldValue => oldValue + correctAnswearCount);
            setWrongAnswearCount(oldValue => oldValue + wrongAnswearCount);
        }
        // check cases
        // mark correct answears so far
        // clear results and save best score on on local storage
        //try catch get another verb
    }

    const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
        // [evt.currentTarget.name]: evt.currentTarget.value
        const name = evt.currentTarget.name;
        const value = evt.currentTarget.value;

        setAnswear(oldAnswears => {
            const ansFiltered = oldAnswears.filter(o => o.person !== name)
            ansFiltered.push({ person: name, ans: value })
            return ansFiltered;
        });
    }

    return (
        <div className="flex flex-col items-center mb-auto">
            {showModal && <Modal onClose={() => setShowModal(false)}> <PresentModalContent /> </Modal>}
            <div className="bg-center bg-cover bg-cinque-effect w-full flex items-center justify-center py-4 rounded-b-3xl">
                <div className="max-w-custom mx-6 flex flex-col place-content-center">

                    <h1 className="text-2xl uppercase font-semibold pb-3 text-white">Coniugazione dei verbi italiani</h1>
                    <div className="flex items-center">
                        <div className="group flex-grow">
                            <div className="bg-tertiary-red group-hover:bg-secondary-red rounded-full px-2 border-2 border-white text-white">
                                <select name="tense" id="tense" className="px-1 py-1 w-full rounded-full bg-tertiary-red group-hover:bg-secondary-red text-center font-semibold focus:outline-none">
                                    {currentTensesAllow.map((t) => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="-mr-10">
                            <button className="w-6 ml-4" onClick={() => setShowModal(true)}>
                                <InformationIcon className="text-white" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 mb-2">
                        <div className="bg-tertiary-red rounded-full py-2 border-2 border-white text-center font-semibold text-white my-2 uppercase">
                            {verb && verb.verbInfinite}
                        </div>
                        {person.map(p => <div key={p[1]} className="flex items-center bg-white text-black rounded-full mb-2 py-1 font-medium">
                            <div className="w-24 text-center border-r-2 border-neutral-300 text-sm">{p[0]}</div>
                            <input className="w-full mx-4 focus:outline-none" onChange={handleChange} name={p[1]}></input>
                        </div>)}
                    </div>

                    <button onClick={checkResult} className="rounded-full bg-primary-green hover:bg-secondary-green text-white font-semibold w-28 py-1 place-self-center">
                        Check
                    </button>

                </div>
            </div>

            <div className="flex tabular-nums items-center text-center py-3 text-3xl font-semibold text-black border-2 border-black bg-white rounded-full mt-6 mb-8 divide-x-2 divide-neutral-300">
                <div className="px-6 flex">
                    <CheckIcon className="text-primary-green w-6 mr-2" />
                    <div> {correctAnswearCount} </div>
                </div>
                <div className="px-6 flex">
                    <XIcon className="text-primary-red w-6 mr-2" />
                    <div> {wrongAnswearCount} </div>
                </div>
            </div>
        </div>
    );
}

export { ConiugazioniScreen };