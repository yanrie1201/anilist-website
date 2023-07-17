// @ts-ignore
import React, { useEffect, useState } from 'react'
// @ts-ignore
import { useQuery } from '@apollo/client'
import { TOP_AIRING_ANIME } from '../Queries/Queries'
import { Container, Flex, H1, H2, H5 } from '../styles/globals'
import { Content, Img, Card, ImgWrap, TextWrap } from '../styles/animeHome'
// @ts-ignore
import { useNavigate } from 'react-router-dom'

function Home() {
  const [anime, setAnime] = useState([])

  const navigate = useNavigate()

  const { loading, data } = useQuery(TOP_AIRING_ANIME)

  useEffect(() => {
    document.title = 'Home | AnimeKita'
    if (data) {
      setAnime(data.Page.media)
    }
  }, [data])

  return (
    <Content>
      <Container>
        <H2>10 List Anime</H2>
        <Flex
          // @ts-ignore
          justifyContent={loading ? 'center' : 'space-evenly'}
        >
          {loading ? <H1>Now Loading</H1> : ''}
          {anime.map((el, i) => (
            <Card key={i} onClick={() => navigate(`/anime/${el.id}`)}>
              <ImgWrap>
                <Img src={el.coverImage.large} alt="" />
              </ImgWrap>
              <TextWrap>
                <H5
                  // @ts-ignore
                  align="center"
                >
                  {el.title.english ? el.title.english : el.title.romaji}
                </H5>
              </TextWrap>
            </Card>
          ))}
        </Flex>
      </Container>
    </Content>
  )
}

export default Home
