import React from "react";
import CountUp from "react-countup";

type CounterTypes = {
    endNumber: number;
    title: string;
};

export function Counter({ endNumber, title }: CounterTypes){
    return (
        <div className="number">
            <CountUp duration={3} className="counter" suffix="+ " end={endNumber} start={15000} />
            <span>{title}</span>
        </div>
    )
};

export function CounterOffices({ endNumber, title }: CounterTypes){
    return (
        <div className="number">
            <CountUp duration={3} className="counter" end={endNumber} start={10} />
            <span>{title}</span>
        </div>
    )
};

