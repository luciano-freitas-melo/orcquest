import { useState } from "react"
import { QuestForms } from "../QuestForms/QuestForms";
import { QuestItem } from "../QuestItem/QuestItem";

export function QuestList() {

    const [quests, setQuests] = useState([]);

    const addQuest = quest => {
        if (!quest.text || /^\s*$/.test(quest.text)) {
            return
        }

        const newQuests = [quest, ...quests];

        setQuests(newQuests);

    };

    const updateQuest = (questId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setQuests(prev => prev.map(item => (item.id === questId ? newValue : item)))

    };

    const removeQuest = id => {
        const removeArr = [...quests].filter(quest => quest.id !== id)

        setQuests(removeArr);
    };

    const completeQuest = id => {
        let updatedQuests = quests.map(quest => {
            if(quest.id === id){
                quest.isComplete = !quest.isComplete
            }
            return quest;
        });

        setQuests(updatedQuests);
    };

    return (
        <>
            <h1>Orc'Quest</h1>
            <QuestForms onSubmit = {addQuest}/>
            <QuestItem
                quests = {quests}   
                completeQuest = {completeQuest}
                removeQuest = {removeQuest}
                updateQuest = {updateQuest}
            />
        </>
    );
}