import { useEffect, useRef, useState } from "react";
import { addQuest } from "../../../database";


export const QuestForms = () => {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const addNewQuest = async (quest) => {
        try {
            const response = await addQuest(quest);
            console.log(response);

        } catch (error) {
            alert(error);
        }
    };

    const handleChangeInput = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewQuest(input);
        setInput('');
    };


    return (
        <form className="questForm" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Nova Quest"
                name='text'
                value={input}
                onChange={handleChangeInput}
                className="inputQuest"
                ref={inputRef}
            />

            <button
                type="submit"
                className="QuestButton">Adicionar
            </button>

        </form>
    );
}