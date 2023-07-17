// @ts-ignore
import React, { useState, useEffect, useRef } from 'react'
// @ts-ignore
import { useQuery } from '@apollo/client'
import { ANIME_DETAIL } from '../Queries/Queries'
// @ts-ignore
import { useParams } from 'react-router-dom'
import {
  Container,
  Banner,
  CoverComponent,
  CoverWarp,
  HeaderDetail,
  Img,
  DescriptionWrap,
  ContentWrap,
  InformationWrap,
  H4,
  FlexInfor,
  H3,
  CharWrap,
  CharCard,
  CharCover,
} from '../styles/animeDetail'
import { H5 } from '../styles/globals'
import styled from '@emotion/styled'

function Detail() {
  const [anime, setAnime] = useState([])
  const [coverImage, setCoverImage] = useState()
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [studio, setStudio] = useState([])
  const [character, setCharacter] = useState([])

  const { id } = useParams()

  const { loading, data } = useQuery(ANIME_DETAIL(id))

  useEffect(() => {
    if (title) {
      document.title = `${title}| AniList`
    }
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    if (data) {
      setAnime(data.Media)
      setCoverImage(data.Media.coverImage.large)
      setTitle(
        data.Media.title.english
          ? data.Media.title.english
          : data.Media.title.romaji
      )
      setStartDate(
        `${month[data.Media.startDate.month - 1]} ${
          data.Media.startDate.day
        }, ${data.Media.startDate.year}`
      )
      setEndDate(
        data.Media.endDate.month
          ? `to ${month[data.Media.endDate.month - 1]} ${
              data.Media.endDate.day
            }, ${data.Media.endDate.year}`
          : ''
      )
      setStudio(data.Media.studios.edges)
      setCharacter(data.Media.characters.edges)
    }
  }, [data, title, anime])

  const ref = useRef(null)
  if (loading) {
    return <p>Now Loading</p>
  }

  const imgStyle = {
    opacity: '1', // 50% opacity
    width: '100%', // Set the width to 100% (optional)
  }

  const FullPageBanner = styled(Banner)`
    position: relative;
    opacity: 0.5;
  `

  return (
    <div ref={ref}>
      <HeaderDetail>
        <FullPageBanner
          // @ts-ignore
          image={anime.bannerImage}
        />
        <Container>
          <CoverWarp>
            <CoverComponent>
              <div>
                <Img src={coverImage} alt={title} style={imgStyle} />
              </div>
            </CoverComponent>
          </CoverWarp>
        </Container>
      </HeaderDetail>

      <Container>
        <ContentWrap>
          <InformationWrap>
            <FlexInfor>
              <div>
                <H4>Status</H4>
                <H4
                  // @ts-ignore
                  desc
                >
                  {
                    // @ts-ignore
                    anime.status
                  }
                </H4>
              </div>
              <div>
                <H4>Episode</H4>
                <H4
                  // @ts-ignore
                  desc
                >
                  {
                    // @ts-ignore
                    anime.episode
                      ? // @ts-ignore
                        anime.episode
                      : 'Ongoing'
                  }
                </H4>
              </div>
            </FlexInfor>
            <br />
            <H4>Aired</H4>
            <H4
              // @ts-ignore
              desc
            >
              {startDate}
              <br />
              {endDate}
            </H4>

            <br />
            <H4>Genre</H4>
            {
              // @ts-ignore
              anime.genres
                ? // @ts-ignore
                  anime.genres.map((el, i) => (
                    <H4
                      // @ts-ignore
                      desc
                      key={i}
                    >
                      {el}
                    </H4>
                  ))
                : ''
            }

            <br />
            <H4>Studios</H4>
            {studio
              .filter((el) => el.isMain)
              .map((el, i) => (
                <H4
                  // @ts-ignore
                  desc
                  key={i}
                >
                  {el.node.name}
                </H4>
              ))}

            <br />
            <H4>Producers</H4>
            {studio
              .filter((el) => !el.isMain)
              .map((el, i) => (
                <H4
                  // @ts-ignore
                  desc
                  key={i}
                >
                  {el.node.name}
                </H4>
              ))}
          </InformationWrap>
          <div>
            <DescriptionWrap
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: `<p>${anime.description}</p>`,
              }}
            ></DescriptionWrap>

            <H3>Characters & Voices Actors</H3>
            <CharWrap>
              {character.map((el, i) => (
                <CharCard key={i}>
                  <CharCover className="character">
                    <Img src={el.node.image.medium} alt="" />
                    <H5>{el.node.name.full}</H5>
                  </CharCover>
                </CharCard>
              ))}
              {character.map((el, i) => (
                <CharCard key={i}>
                  <CharCover className="character">
                    <Img src={el.voiceActors[0].image.medium} alt="" />
                    <H5>{el.voiceActors[0].name.full}</H5>
                  </CharCover>
                </CharCard>
              ))}
            </CharWrap>

            <H3
              // @ts-ignore
              desc
            >
              Information
            </H3>

            <InformationWrap
              // @ts-ignore
              mobile
            >
              <FlexInfor
                // @ts-ignore
                mobile
              >
                <div>
                  <H4>Status</H4>
                  <H4
                    // @ts-ignore
                    desc
                  >
                    {
                      // @ts-ignore
                      anime.status
                    }
                  </H4>

                  <br />
                  <H4>Episode</H4>
                  <H4
                    // @ts-ignore
                    desc
                  >
                    {
                      // @ts-ignore
                      anime.episode
                        ? // @ts-ignore
                          anime.episode
                        : 'Ongoing'
                    }
                  </H4>

                  <br />
                  <H4>Aired</H4>
                  <H4
                    // @ts-ignore
                    desc
                  >
                    {startDate}
                    <br />
                    {endDate}
                  </H4>
                </div>
                <div>
                  <H4>Genre</H4>
                  {
                    // @ts-ignore
                    anime.genres
                      ? // @ts-ignore
                        anime.genres.map((el, i) => (
                          <H4
                            // @ts-ignore
                            desc
                            key={i}
                          >
                            {el}
                          </H4>
                        ))
                      : ''
                  }

                  <br />
                  <H4>Studios</H4>
                  {studio
                    .filter((el) => el.isMain)
                    .map((el, i) => (
                      <H4
                        // @ts-ignore
                        desc
                        key={i}
                      >
                        {el.node.name}
                      </H4>
                    ))}

                  <br />
                  <H4>Producers</H4>
                  {studio
                    .filter((el) => !el.isMain)
                    .map((el, i) => (
                      <H4
                        // @ts-ignore
                        desc
                        key={i}
                      >
                        {el.node.name}
                      </H4>
                    ))}
                </div>
              </FlexInfor>
            </InformationWrap>
          </div>
        </ContentWrap>
      </Container>
    </div>
  )
}

export default Detail
