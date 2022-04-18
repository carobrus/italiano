import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg';

type Props = {
    url: string,
    name: string,
}

const RedirectionCard = (props: Props): JSX.Element => {
    const { url, name } = props;

    return (
        <Link to={url}>
            <div className="text-lg flex items-center justify-center text-center text-black bg-white rounded-xl opacity-80 w-64 h-32 px-10">
                {name}
            </div>
        </Link>
    );
}

export { RedirectionCard };