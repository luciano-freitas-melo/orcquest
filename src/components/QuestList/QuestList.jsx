import { useState } from "react"
import { QuestForms } from "../QuestForms/QuestForms";
import { QuestItem } from "../QuestItem/QuestItem";

export const QuestList = () =>{
    
    
    return (
        <>
            <h1>Orc'Quest</h1>
            <QuestForms />
            {/* <QuestItem
                quests={quests}
                completeQuest={completeQuest}
                removeQuest={removeQuest}
                updateQuest={updateQuest}
            /> */}
        </>
    );
}