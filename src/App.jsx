import { styled } from 'styled-components'
import { QuestList } from './components/QuestList/QuestList'
import { QuestForms } from './components/QuestForms/QuestForms'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  h1 {
      font-size: 2em;
      color: #fff;
  }
`

export function App() {

  return (
    <AppContainer>
      <h1>Orc'Quest</h1>
      <QuestForms />
      <QuestList />
    </AppContainer>
  )
}

export default App
