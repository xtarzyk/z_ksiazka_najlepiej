import { Post } from "../components/Post"
import styled from 'styled-components'

export const IndexPage = () => {
  return (
    <MainPage>
      <Post src={'src/imgs/cztery.jpg'} title={'Cztery książki na prezent'} />
      <Post src={'src/imgs/simona.jpg'} title={'Simona'} />
      <Post src={'src/imgs/swieta.jpg'} title={'Świątecznie...'} />
    </MainPage>
  )
}

const MainPage = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media only screen and (min-width: 1200px) {
    padding: 120px 6%;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
