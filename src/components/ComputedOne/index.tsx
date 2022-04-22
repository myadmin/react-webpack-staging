import React from 'react';
import { add, miuns } from 'utils/math';
import './index.scss';

interface IProps {
    a: number;
    b: number;
}

const ComputedOne = (props: IProps) => {
    const { a, b } = props;
    const sum = add(a, b);

    return <p className="computed-one">{`Hi, I'm computed one, my sum is ${sum}.!!!!`}</p>;
};

export default ComputedOne;
