import React from "react";
import { Link } from "react-router-dom";
import { UndrawEmpty } from "../../assets/svg";
import { Emoji } from "../../components";


const NotFoundScreen = (): JSX.Element => {
    return (
        <div className="flex justify-center my-auto">
            <div className="flex flex-col place-content-center md:flex-row md:justify-around items-center h-full w-full max-w-custom mx-6">
                <div className="text-center">
                    <h2 className="text-3xl pb-4 font-semibold">Oops!</h2>
                    <p>
                        Where are you trying to go?
                        <Emoji symbol={`\u{1F90C}`} label="Pinched Fingers" />
                    </p>
                    <p>Looks like the page you're trying to reach was not found.</p>
                    <button className="mt-7 mb-14 bg-primary-red hover:bg-secondary-red py-4 px-8 rounded-full text-white font-semibold">
                        <Link to={"/"}>Go Back Home</Link>
                    </button>
                </div>
                <UndrawEmpty className="w-auto max-h-72" />
            </div>
        </div>
    );
}

export { NotFoundScreen };