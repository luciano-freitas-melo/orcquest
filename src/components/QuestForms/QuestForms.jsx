import styled from "styled-components"
import { useState } from "react"

const QuestInputContainer = styled.form`

    button{
        padding: 1em ;
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
    width: 40vw;
    background: transparent;

    color: #fff;
    font-size: 1em;

    &::placeholder {
        color: #e2e2e2
    }
`

export const QuestForms = () => {

    const [newQuest, setNewQuest] = useState('');
    
    // const handleAddQuest = (event) => {
    //     event.preventDefault();
        
    //     addQuest(newQuest);
    // }

    return (
        <QuestInputContainer>

            <QuestInput
                placeholder="Nova Quest"
                onBlur={(event) => setNewQuest(event.target.value)}
            />

            <button>Adicionar</button>

        </QuestInputContainer>
    );
}