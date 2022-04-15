import React from 'react';

type Props = {
    symbol: string
    label?: string;
}

const Emoji = (props: Props) => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
export { Emoji };