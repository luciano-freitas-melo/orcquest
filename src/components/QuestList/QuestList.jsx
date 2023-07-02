import styled from "styled-components";

import { QuestForms } from "../QuestForms/QuestForms";
import { quests } from "../../../database";
import { QuestItem } from "../QuestItem/QuestItem";

const QuestListContainer = styled.div`
    width: 40%;
    height: 90%;
    background: #9567E0;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;

    h1 {
        font-size: 2em;
    }
`

export const QuestList = () => {

    return (
        <QuestListContainer>
            <h1>Orc'Quest</h1>
            <QuestForms />
            {quests.map((quest) => (
                <QuestItem key={quest.id} questName={quest.name} />
            ))}

        </QuestListContainer>
    );
}