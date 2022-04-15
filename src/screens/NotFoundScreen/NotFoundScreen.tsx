import React from "react";
import { ReactComponent as EmptyDraw } from '../../assets/svg/undraw_empty_re_opql.svg';


const NotFoundScreen = (): JSX.Element => {
    return (
        <div className="flex flex-col place-content-center m-auto">
            <div className="flex items-center">
                <div className="text-center">
                    <h2 className="text-3xl pb-4">Oops!</h2>
                    <p> Looks like the page you're trying to reach was not found. </p>
                    <button className="my-2">Go back home</button>
                </div>
                <div className="w-72">
                    <EmptyDraw className="object-contain w-96" />
                </div>
            </div>
        </div>
    );
}

export { NotFoundScreen };