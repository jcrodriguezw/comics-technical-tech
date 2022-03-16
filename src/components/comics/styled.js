import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderWrapp = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;

  & > p:first-child {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`

export const OptionStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ view, item }) => view === item.id ? '#00b300' : ''}
`

export const GridContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 3em;
`

export const GridStyledLink = styled(Link)`
  text-align: center;
  margin-bottom: 2em;
  text-decoration: none;
  color: #000;

  & > img {
    margin-bottom: 1em;
  }

  & > p {
    margin: 0;
  }

  & > p:last-child {
    color: grey;
  }
`

export const ListStyledLink = styled(Link)`
  display: flex;
  margin: 2em 0;
  border-bottom: 1px solid grey;
  text-decoration: none;

  & > img {
    margin-bottom: 1em;
  }

  & > div {
    text-align: center;
    width: 100%;

    & > p {
      margin: 0;
    }

    & > p:last-child {
      color: grey;
    }
  }
`
export const DetailSubtitle = styled.h2`
  border-bottom: 1px solid grey;
`

export const ComicDetailWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1em;
`