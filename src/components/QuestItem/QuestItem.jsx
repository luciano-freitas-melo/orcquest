import { Pencil, XCircle } from "phosphor-react";
import styled from "styled-components";

const QuestItemContainer = styled.div`
    width: 40vw;
    margin: 0.25em;
    padding: 0 1em;

   

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