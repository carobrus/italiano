import React from "react";

const ImperativoModalContent = (): JSX.Element => {
    return (
        <>
            <h1 className="text-xl font-semibold">Il bigliettino</h1>
            <h2 className="font-semibold mb-4">Verbi regolari - Imperativo</h2>
            <ul>
                <li><span className="font-semibold">-are</span>: -a, -iamo, -ate</li>
                <li><span className="font-semibold">-ere</span>: -i, -iamo, -ete</li>
                <li><span className="font-semibold">-ire</span>: -i, -iamo, -ite</li>
            </ul>
        </>
    );
}

export default ImperativoModalContent;