import { ContentContainer, HeaderWrapp, OptionStyled } from "./styled";

const listOptions = [
  {
    id: 'list',
    icon: 'reorder',
    label: 'List'
  },
  {
    id: 'grid',
    icon: 'apps',
    label: 'Grid'
  }
]

function Header({ view, setView }) {
  return (
    <HeaderWrapp>
      <p>Latest Issues</p>

      <ContentContainer>
        {listOptions?.map(item => <OptionStyled 
          view={view}
          item={item}
          key={item.id} 
          onClick={() => setView(item.id)}
        >        
          <span className="material-icons-outlined">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </OptionStyled>)}
      </ContentContainer>
    </HeaderWrapp>
  )
}

export default Header;