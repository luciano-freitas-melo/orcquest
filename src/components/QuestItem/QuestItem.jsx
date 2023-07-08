import styled from "styled-components";

import EditIcon from "../../assets/icons/edit_icon.svg";
import DeleteIcon from "../../assets/icons/delete_icon.svg";

const QuestItemContainer = styled.div`
    width: 50vw;
    margin: 0.25em;
    padding: 0 1.15em;
    background: #9567E0;
    border: 2px solid #6c4aa2;
    border-radius: 10px;
   

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const DoneCheckBox = styled.input`
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;

`

const LeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`

const RightSide = styled.div`
    
`

const Icon = styled.img`
    width: 2em;
    cursor: pointer;

    &:hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
`
export const QuestItem = ({ questName }) => {


    return (
        <QuestItemContainer>
            <LeftSide>
                <DoneCheckBox type="checkbox" />
                <h2>{questName}</h2>
            </LeftSide>
            <RightSide>
                <Icon src={EditIcon} alt="edit icon" />
                <Icon src={DeleteIcon} alt="delete icon" />
            </RightSide>
        </QuestItemContainer>
    );
};