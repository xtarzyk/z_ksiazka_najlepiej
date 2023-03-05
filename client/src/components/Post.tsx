import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  src: string
}

export const Post: FunctionComponent<Props> = ({ src }) => {
  return (
    <PostContainer>
      <ImgContainer src={src} alt="post-img" />
    </PostContainer>
  )
}

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  max-width: 50%;
`

const ImgContainer = styled.img`
  display: flex;
  overflow: hidden;
  
`
