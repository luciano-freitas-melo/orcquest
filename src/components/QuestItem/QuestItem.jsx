import { Pencil, XCircle } from "phosphor-react";
import { useState } from "react"
import { QuestForms } from "../QuestForms/QuestForms";


export function QuestItem( {quests, completeQuest, removeQuest, updateQuest }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateQuest(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <QuestForms edit={edit} onSubmit={submitUpdate} />;
    };

    return quests.map((quest, index) => (

        <div
            className={quest.isComplete ? 'questRow complete' : 'questRow'}
            key={index}
        >

            <div key={quest.id} onClick={() => completeQuest(quest.id)}>
                {quest.text}
            </div>

            <div className="icons">
                <XCircle size={32}
                    onClick={() => removeQuest(quest.id)}
                    className="deleteIcon"
                />
                <Pencil size={32}
                    onClick={() => setEdit({ id: quest, value: quest.text })}
                    className="editIcon"
                />
            </div>
        </div>
    ));
};