import React from 'react';
import { add } from 'utils/math';
import './index.scss';

interface IProps {
    a: number;
    b: number;
}

const ComputedTwo = (props: IProps) => {
    const { a, b } = props;
    const sum = add(a, b);

    return <p className="computed-two">{`Hi1, I'm computed two, my sum is ${sum}.`}</p>;
};

export default ComputedTwo;
