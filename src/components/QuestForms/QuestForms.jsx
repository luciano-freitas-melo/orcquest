// import { useEffect, useRef, useState } from "react";
// import { addQuest } from "../../../database";
import styled from "styled-components"

const QuestInputContainer = styled.form`

    button{
        padding: 16px;
        border: none;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        outline: none;
        background: linear-gradient(90deg,#5d0cff,#9b00fa);
        font-size: 1em;
        color: #fff;
        text-transform: capitalize;
    }
`

const QuestInput = styled.input`
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid #5d0cff;
    outline: none;
    width: 320px;
    background: transparent;

    color: #fff;
    font-size: 1em;

    &::placeholder {
        color: #e2e2e2
    }
`

export const QuestForms = () => {

    // const [input, setInput] = useState('');

    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus()
    // });

    // const addNewQuest = async (quest) => {
    //     try {
    //         const response = await addQuest(quest);
    //         console.log(response);

    //     } catch (error) {
    //         alert(error);
    //     }
    // };

    // const handleChangeInput = e => {
    //     setInput(e.target.value);
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     addNewQuest(input);
    //     setInput('');
    // };

    return (
        <QuestInputContainer>

            <QuestInput
                type="text"
                placeholder="Nova Quest"
                name='text'
                className="inputQuest"
            />

            <button>Adicionar</button>

        </QuestInputContainer>
    );
}