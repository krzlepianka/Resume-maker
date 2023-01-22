import NumberedParagraph from 'components/features/numberedParagraph/NumberedParagraph';
import styled, { withTheme } from 'styled-components';

const ListContainer = withTheme(styled('div')`
    
`)

const List = ({items}: any) => {
    return (
        <ListContainer>
            {items.map(item => <NumberedParagraph key={item.id} index={item.id} description={item.description}></NumberedParagraph>)}
        </ListContainer>
    )
}

export default List;