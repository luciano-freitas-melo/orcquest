import { styled } from 'styled-components'
import { QuestList } from './components/QuestList/QuestList'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
`

export function App() {

  return (
    <AppContainer>
      <QuestList />
    </AppContainer>
  )
}

export default App
