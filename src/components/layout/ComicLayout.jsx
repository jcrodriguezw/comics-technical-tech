import { LayoutContainer } from './styled'

function ComicLayout({ children }) {
  return (
    <LayoutContainer>
      <h1>Comic Book</h1>
      {children}
    </LayoutContainer>
  )
}

export default ComicLayout;