import React, { useState } from "react";
import { getConjugation } from 'italian-verbs';
import { getRandomVerb } from "../../utils/verbs";
import { Modal } from "../../components/Modal/Modal";
import PresentModalContent from "./PresentModalContent";
// import ItalianVerbsList from './assets/verbs.json';


const ConiugazioniScreen = (): JSX.Element => {
    const [showModal, setShotModal] = useState(true);

    return (
        <div className="flex justify-center mb-auto">
            {showModal && <Modal onClose={() => setShotModal(false)}> <PresentModalContent /> </Modal>}
            <div className="max-w-custom mx-6 flex flex-col place-content-center">
                <div>Verbs!</div>
                {getRandomVerb()}
            </div>
        </div>
    );
}

export { ConiugazioniScreen };