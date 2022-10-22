import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    title: string
    callBack: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputPropsType) => {
    return (
        <div>
            <input
                value={props.title}
                onChange={props.callBack}
            />
        </div>
    );
}