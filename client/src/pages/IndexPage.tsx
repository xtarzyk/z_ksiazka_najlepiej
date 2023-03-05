import { Post } from "../components/Post"
import styled from 'styled-components'

export const IndexPage = () => {
  return (
    <MainPage>
      <Post src={'src/imgs/cztery.jpg'}/>
      <Post src={'src/imgs/simona.jpg'}/>
      <Post src={'src/imgs/swieta.jpg'}/>
    </MainPage>
  )
}

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
`
