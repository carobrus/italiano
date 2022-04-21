import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ConstructionDraw } from '../../assets/svg/undraw_under_construction_-46-pa.svg';
import { Emoji } from "../../components";


const InCostruzione = (): JSX.Element => {
    return (
        <div className="flex justify-center my-auto">
            <div className="flex flex-col place-content-center md:flex-row md:justify-around items-center h-full w-full max-w-custom mx-6">
                <div className="text-center pb-6">
                    <h2 className="text-3xl pb-4 font-semibold">In Costruzione!</h2>
                    <p> Come back later. </p>
                </div>
                <ConstructionDraw className="h-72 w-auto" />
            </div>
        </div>
    );
}

export { InCostruzione };