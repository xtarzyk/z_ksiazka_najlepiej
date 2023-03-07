import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  src: string
  title: string
}

export const Post: FunctionComponent<Props> = ({ src, title }) => {
  return (
    <PostContainer className='post-container'>
      <Img src={src} alt="post-img" />
      <TextOverlay>
        <Text>{title}</Text>
      </TextOverlay>
    </PostContainer>
  )
}

const TextOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.5);
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: transform .5s ease;
`

const Text = styled.p`
  position: absolute;
  color: white;
  font-size: 30px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform .5s ease;
`

const PostContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
  max-width: 960px;
  max-height: 400px;
  overflow: hidden;
  border: 20px solid transparent;
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