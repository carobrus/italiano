import React from "react";

const ParolacciaScreen = (): JSX.Element => {
    return (
        <div className="flex justify-center mb-auto">
            <div className="flex flex-col">
                <h2 className="text-3xl pb-4 font-semibold py-4">Parolacce!</h2>

                <ul>
                    <li>Cazzata</li>
                    <li>Pirla</li>
                    <li>Stronzo</li>
                    <li>Scemo</li>
                    <li>Rompicoglioni</li>
                    <li>Che cazzo</li>
                    <li>Che palle</li>
                    <li>Porca vacca</li>
                    <li>Vaffanculo</li>
                </ul>
            </div>
        </div>
    );
}

export { ParolacciaScreen };