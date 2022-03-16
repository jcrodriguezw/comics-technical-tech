import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import moment from 'moment';

import { GridContainer, GridStyledLink, ListStyledLink } from './styled';

const ComicsContent = ({ view }) => {
  const apiKey = process.env.REACT_APP_COMIC_API_KEY;

  const [allComics, setAllComics] = useState([])

  const getComics = useCallback(async () => {

    const comics = await axios.get(
      `/api/issues/?api_key=${apiKey}&format=json&sort=date_last_updated:desc&limit=20`
    ).catch(err => console.log(err))

    setAllComics(comics?.data?.results)

  }, [apiKey])

  useEffect(() => {
    getComics()
  }, [getComics])

  if(view === 'list')
    return (
      <div>
        {allComics?.map(comic => {
          const urlIndex = comic.api_detail_url.indexOf('issue/')
          const url = comic.api_detail_url.slice(urlIndex)
          const comicId = url.replace('issue/', '')

          return (
            <ListStyledLink to={`/comic/${comicId}`} key={comic.id}>
              <img src={comic.image.original_url} alt={comic.name} width={270} height={390}/>
              <div>
                <p><strong>{`${comic.name || ''} #${comic.issue_number}`}</strong></p>
                <p>{moment(comic.date_added).format('MMMM DD, YYYY')}</p>
              </div>
            </ListStyledLink>
          )
        })}
      </div>
    )

  return (
    <GridContainer>
      {allComics?.map(comic => {
        const urlIndex = comic.api_detail_url.indexOf('issue/')
        const url = comic.api_detail_url.slice(urlIndex)
        const comicId = url.replace('issue/', '')
        
        return (
          <GridStyledLink to={`/comic/${comicId}`} key={comic.id}>
            <img src={comic.image.original_url} alt={comic.name} width={270} height={390}/>
            <p><strong>{`${comic.name || ''} #${comic.issue_number}`}</strong></p>
            <p>{moment(comic.date_added).format('MMMM DD, YYYY')}</p>
          </GridStyledLink>
        )
      })}
    </GridContainer>
  )
}

export default ComicsContent;