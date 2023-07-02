import { Pencil, XCircle } from "phosphor-react";
import styled from "styled-components";

const QuestItemContainer = styled.div`
    margin: 0.25em;
    padding: 0 1em;

    border: 2px solid #5d0cff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2{
        color: #fff;
    }
`

export function QuestItem({questName}) {

    return (
        <QuestItemContainer>
            <input type="checkbox" />
            <h2>{questName}</h2>
            <div>
                <Pencil size={24} />
                <XCircle size={24} />
            </div>
        </QuestItemContainer>
    );
};