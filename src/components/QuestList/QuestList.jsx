import { useState } from "react"
import { QuestForms } from "../QuestForms/QuestForms";
import { QuestItem } from "../QuestItem/QuestItem";
import addQuest from "../../../database";

export function QuestList() {

    const [quests, setQuests] = useState([]);

    const addNewQuest = async (quest) => {
        try {
            
            const response = await addQuest(quest);
            console.log(response);
            setQuests(response);

        } catch (error) {
        }
    };

    const updateQuest = (questId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setQuests(prev => prev.map(item => (item.id === questId ? newValue : item)));

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
            <QuestForms onSubmit = {addNewQuest}/>
            <QuestItem
                quests = {quests}   
                completeQuest = {completeQuest}
                removeQuest = {removeQuest}
                updateQuest = {updateQuest}
            />
        </>
    );
}