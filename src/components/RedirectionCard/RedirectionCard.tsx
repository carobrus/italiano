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
            <div className="text-lg flex items-center justify-center text-center text-black bg-neutral-100 rounded-xl opacity-90 w-64 h-32 px-10 hover:opacity-100">
                {name}
            </div>
        </Link>
    );
}

export { RedirectionCard };