import { useEffect, useRef, useState } from "react";


export function QuestForms(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChangeInput = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };



    return (
        <form className="questForm" onSubmit={handleSubmit}>
            {
                props.edit ? (
                    <>
                        <input
                            type="text"
                            placeholder="Alterar Quest"
                            name='text'
                            value={input}
                            onChange={handleChangeInput}
                            className="inputQuest edit"
                            ref={inputRef}
                        />
                        <button
                            onClick={handleSubmit}
                            className="QuestButton edit">Alterar
                        </button>
                    </>
                ) : (
                    <>
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
                            onClick={handleSubmit}
                            className="QuestButton">Adicionar
                        </button>
                    </>

                )
            }
        </form>
    );
}