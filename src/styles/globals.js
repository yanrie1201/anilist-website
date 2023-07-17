// @ts-ignore
import styled from '@emotion/styled'

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

export const Body = styled.div({
  backgroundColor: '#EDF3FF',
  minHeight: '100vh',
})

export const Container = styled.div((props) => ({
  width: '100%',
  margin: '0 auto',
  padding: '0 20px',
  minWidth: '320px',
  [mq[0]]: {
    maxWidth: '540px',
  },
  [mq[1]]: {
    maxWidth: '720px',
  },
  [mq[2]]: {
    maxWidth: '960px',
  },
  [mq[3]]: {
    maxWidth: '1140px',
  },
  // @ts-ignore
  display: props.display,
}))

export const H3 = styled.h3((props) => ({
  color: '#606060',
  // @ts-ignore
  margin: props.home && '0px',
}))

export const H4 = styled.h4((props) => ({
  color: props.color,
  // @ts-ignore
  cursor: props.pointer && 'pointer',
}))

export const H5 = styled.h5((props) => ({
  color: '#606060',
  margin: 0,
  // @ts-ignore
  textAlign: props.align,
  // @ts-ignore
  alignSelf: props.bottom && 'flex-end',
}))

export const H2 = styled.h2((props) => ({
  color: '#606060',
  // @ts-ignore
  margin: props.collection && '0px',
}))

export const H1 = styled.h1((props) => ({
  color: '#606060',
  // @ts-ignore
  margin: props.collection && '0px',
}))

export const Flex = styled.div((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  // @ts-ignore
  justifyContent: props.justifyContent,
  marginLeft: 'auto',
  marginRight: 'auto',
}))
