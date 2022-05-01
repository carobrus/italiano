import React, { useEffect, useState } from "react";
import { UndrawReading } from "../../assets/svg";
import { RedirectionCard } from "../../components";

const HomeScreen = (): JSX.Element => {
    const [style, setStyle] = useState("opacity-0")

    useEffect(() => { setStyle("opacity-100"); }, [])

    return (
        <div className="max-w-none bg-black">
            {/* Parallax Scrolling */}
            <section className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-home transition-opacity duration-1000 ease-in">
                <h1 className={`uppercase font-bold text-5xl text-white transition-opacity duration-1000 ease-in ${style}`}>
                    Benvenuto
                </h1>
            </section>


            <div className='h-52 bg-secondary-green text-white flex justify-center'>
                <div className="flex items-center justify-between h-full w-full max-w-custom mx-12">
                    <div className="max-w-md text-xl">
                        <p>This is just a personal project to improve my italian. Join me on this journey.</p>
                    </div>
                    <UndrawReading className="w-96 h-96 bg-cover -mt-2 hidden md:block" />
                </div>
            </div>

            {/* Parallax Scrolling */}
            <section className="flex items-center justify-center h-[40vh] bg-fixed bg-center bg-cover bg-home">
                <RedirectionCard url={"/coniugazioni"} name="Coniugazione dei verbi italiani" />
            </section>

            {/* <div className='h-52 bg-secondary-red text-white flex justify-center'>
                <div className="flex items-center h-full w-full max-w-custom mx-12">
                    <div className="max-w-md text-xl">
                        <p>This is just a personal project to improve my italian. Join me on this journey.</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export { HomeScreen };