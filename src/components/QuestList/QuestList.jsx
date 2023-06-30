import { useState } from "react"
import { QuestForms } from "../QuestForms/QuestForms";
import { QuestItem } from "../QuestItem/QuestItem";
import styled from "styled-components";

const QuestListContainer = styled.div`
    width: 40%;
    height: 90%;
    background: #161a2b;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
`

export const QuestList = () => {

    return (
        <QuestListContainer>
            <h1>Orc'Quest</h1>
            <QuestForms />
            {/* <QuestItem
                quests={quests}
                completeQuest={completeQuest}
                removeQuest={removeQuest}
                updateQuest={updateQuest}
            /> */}
        </QuestListContainer>
    );
}