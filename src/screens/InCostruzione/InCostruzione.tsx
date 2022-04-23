import React from "react";
import { UndrawUnderConstruction } from "../../assets/svg";


const InCostruzione = (): JSX.Element => {
    return (
        <div className="flex justify-center my-auto">
            <div className="flex flex-col place-content-center md:flex-row md:justify-around items-center h-full w-full max-w-custom mx-6">
                <div className="text-center pb-6">
                    <h2 className="text-3xl pb-4 font-semibold">In Costruzione!</h2>
                    <p> Come back later. </p>
                </div>
                <UndrawUnderConstruction className="h-52 w-auto md:h-72" />
            </div>
        </div>
    );
}

export { InCostruzione };