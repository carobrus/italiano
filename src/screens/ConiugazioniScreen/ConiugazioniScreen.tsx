import React, { useState } from "react";
import { getRandomVerb } from "../../utils/verbs";
import { Modal } from "../../components/Modal/Modal";
import PresentModalContent from "./PresentModalContent";
import { VerbConjugated } from "../../models/verb";

const currentTensesAllow = ["PRESENTE", "IMPERATIVO"]

const ConiugazioniScreen = (): JSX.Element => {
    const [showModal, setShotModal] = useState(false);
    const [verb, setVerb] = useState<VerbConjugated>();

    const calculateConjugation = (): void => {
        setVerb(getRandomVerb('PRESENTE'))
    }

    return (
        <div className="flex justify-center mb-auto">
            {showModal && <Modal onClose={() => setShotModal(false)}> <PresentModalContent /> </Modal>}
            <div className="max-w-custom mx-6 flex flex-col place-content-center">
                <h1 className="text-2xl uppercase font-semibold py-3">Coniugazione dei verbi italiani</h1>
                <div className="bg-tertiary-red rounded-full px-2 border-2 border-white text-white">
                    <select name="cars" id="cars" className="px-1 py-1 w-full rounded-full bg-tertiary-red text-center font-semibold focus:outline-none">
                        {currentTensesAllow.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>

            </div>
        </div>
    );
}

export { ConiugazioniScreen };