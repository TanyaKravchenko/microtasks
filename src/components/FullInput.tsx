import React, {ChangeEvent, useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type FullInputPropsType = {
    message: Array<MessageType>
    addMessage: (title: string) => void
}
export type MessageType = {
    message: string
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <div>
                <Input title={title} callBack={onChangeInputHandler}/>
                <Button name='Add' callBack={onClickButtonHandler}/>
            </div>
            <div>
                {
                    props.message.map((el, index) => {
                        return (
                            <div key={index}>{el.message}</div>
                        )
                    })
                }
            </div>
        </div>
    );
}