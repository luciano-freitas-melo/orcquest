import axios from 'axios';

const questsAPI = axios.create({baseURL: 'http://localhost:8000/quests'})

async function getQuests(){
    const response = await questsAPI.get('/')

    return response.data
}

export{
    getQuests
}