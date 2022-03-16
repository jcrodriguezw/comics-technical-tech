import { useState } from 'react';

import ComicLayout from '../layout/ComicLayout';
import Header from './ComicHeader';
import ComicsContent from './ComicsContent';

function ComicBooks() {
  const [view, setView] = useState('grid')

  return (
    <ComicLayout>
      <Header view={view} setView={setView}/>
      <ComicsContent view={view} />
    </ComicLayout>
  )
}

export default ComicBooks;