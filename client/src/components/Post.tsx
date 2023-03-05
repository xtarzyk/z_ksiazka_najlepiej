import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  src: string
}

export const Post: FunctionComponent<Props> = ({ src }) => {
  return (
    <PostContainer className='post-container'>
      <Img src={src} alt="post-img" />
      <TextOverlay>
        <Text>Book title</Text>
      </TextOverlay>
    </PostContainer>
  )
}

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.5);
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: transform .5s ease;
`

const Text = styled.p`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform .5s ease;
`

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
  max-width: 960px;
  overflow: hidden;
  cursor: pointer;
  &:hover ${TextOverlay} {
    opacity: 1;
  }
  &:hover ${Text} {
    transform: translate(-50%, -50%) scale(1);
  }
  &:hover ${Img} {
    transform: scale(1.1);
  }
`