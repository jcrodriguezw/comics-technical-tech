import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';

import ComicLayout from "../layout/ComicLayout";
import { DetailSubtitle, ComicDetailWrapper } from "./styled";

const NO_DATA = 'No Data'

function ComicDetail() {
  const apiKey = process.env.REACT_APP_COMIC_API_KEY;

  const params = useParams();
  const { id } = params || {};

  const [comic, setComic] = useState(null)

  const getComic = useCallback(async () => {
    const comic = await axios.get(
      `/api/issue/${id}/?api_key=${apiKey}&format=json`
    ).catch(err => console.log(err))

    setComic(comic?.data?.results)

  }, [apiKey, id])

  useEffect(() => {
    getComic()
  }, [getComic])

  return (
    <ComicLayout>
      <ComicDetailWrapper>
        <div>
          <DetailSubtitle>Character</DetailSubtitle>
          {comic?.character_credits.length ? comic?.character_credits?.map(character => <p key={character.id}>{character?.name}</p>) : NO_DATA}

          <DetailSubtitle>Teams</DetailSubtitle>
          {comic?.team_credits.length ? comic?.team_credits?.map(team => <p key={team.id}>{team?.name}</p>) : NO_DATA}

          <DetailSubtitle>Locations</DetailSubtitle>
          {comic?.location_credits.length ? comic?.location_credits?.map(location => <p key={location.id}>{location?.name}</p>) : NO_DATA}

          <DetailSubtitle>Conepts</DetailSubtitle>
          {comic?.concept_credits.length ? comic?.concept_credits?.map(concept => <p key={concept.id}>{concept?.name}</p>) : NO_DATA}
        </div>

        <img src={comic?.image?.original_url} alt={comic?.name} width='550px'/>
      </ComicDetailWrapper>
    </ComicLayout>
  )
}

export default ComicDetail;