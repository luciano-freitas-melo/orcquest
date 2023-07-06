import styled from "styled-components";

import { QuestForms } from "../QuestForms/QuestForms";
import { quests } from "../../../database";
import { QuestItem } from "../QuestItem/QuestItem";

const QuestListContainer = styled.div`
    width: 100%;          
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const QuestList = () => {

    return (
        <QuestListContainer>
            {quests.map((quest) => (
                <QuestItem key={quest.id} questName={quest.name} />
            ))}
        </QuestListContainer>
    );
}