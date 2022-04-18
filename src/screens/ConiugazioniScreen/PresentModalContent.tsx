import React from "react";

const PresentModalContent = (): JSX.Element => {
    return (
        <>
            <h1 className="text-xl font-semibold">Il bigliettino</h1>
            <h2 className="font-semibold mb-4">Verbi regolari</h2>
            <ul>
                <li><span className="font-semibold">-are</span>: -o, -i, -a, -iamo, -ate, -ano</li>
                <li><span className="font-semibold">-ere</span>: -o, -i, -e, -iamo, -ete, -ono</li>
                <li><span className="font-semibold">-ire</span>: -o, -i, -e, -iamo, -ite, -ono</li>
            </ul>
        </>
    );
}

export default PresentModalContent;