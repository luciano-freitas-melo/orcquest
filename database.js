// quests have:
//     id: sequencial number
//     name: text (description of the quest)
//     done: boolean


let quests = [];
let id = 0;

// adiciona a quest com descrição dada no parâmetro e retorna a array atualizada de quests
export const addQuest = (description) => {

    return new Promise((resolve, reject) => {
        if (!description) {
            reject(new Error("Não há descrição da quest"))
        }

        else{
            const quest = {
                id: id++,
                name: description,
                done: false
            }
            console.log(quest)
            
            quests.push(quest)
            
            resolve(quests)
        }

    })
}

export const getQuests = () =>{

    return new Promise((resolve, reject) => {
        if(!quests){
            reject(new Error("Array vazia"))
        }

        resolve(quests)
    })
}


