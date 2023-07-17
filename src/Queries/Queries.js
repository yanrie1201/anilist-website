// @ts-ignore
import { gql } from '@apollo/client'

export const ANIME_LIST = gql`
  query {
    Page(perPage: 10, page: 1) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME, sort: SCORE_DESC, isAdult: false, status: RELEASING) {
        id
        title {
          userPreferred
          romaji
          english
        }
        genres
        averageScore
        episodes
        coverImage {
          large
        }
      }
    }
  }
`

export const ANIME_DETAIL = (id) => {
  return gql`
        query {
        Media(type: ANIME, id: ${id}) {
            id
            title {
            userPreferred
            romaji
            english
            }
            genres
            averageScore
            studios {
              edges {
                node {
                  name
                }
                isMain
              }
            }
            episodes
            duration
            status
            format
            startDate {
            year
            month
            day
            }
            endDate {
            year
            month
            day
            }
            description
            coverImage {
              large
            }
            bannerImage
            characters (sort: ID role: MAIN, perPage: 6) {
            edges {
                voiceActors (language: JAPANESE, sort: ROLE) {
                name {
                    full
                }
                image {
                    medium
                }
                }
                node {
                name {
                    full
                }
                image {
                    medium
                }
                }
            }
            }
        }
    }
    `
}
