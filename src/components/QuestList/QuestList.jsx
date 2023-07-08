import styled from "styled-components";
import { useState, useEffect} from "react";

import { QuestItem } from "../QuestItem/QuestItem";
import { getQuests } from "../../services/quests";

const QuestListContainer = styled.div`
    width: 100%;          
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const QuestList = () => {
    const [quests, setQuests] = useState([])

    useEffect(() => {
        fetchQuests();
    }, [])
    
    async function fetchQuests() {
        const questsAPI = await getQuests();
        setQuests(questsAPI);
    }

    return (
        <QuestListContainer>
            {quests.map((quest) => (
                <QuestItem key={quest.id} questName={quest.name} />
            ))}
        </QuestListContainer>
    );
}