import * as React from 'react';
// import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';

interface List {
    id: string;
    content: string | React.ReactNode;
    uri: string;
    children?: List[];
}

interface Layout {
    horisontal?: boolean;
}

interface Props extends Layout {
    list: List[];
}

const Container: StyledComponent<'ul', DefaultTheme, Layout, never> = styled.ul`
    display: flex;
    ${(props: Layout) =>
        props.horisontal
            ? `
            margin-right: 2rem;
            align-items: center;`
            : `
            flex-direction: column;
            align-items: flex-start;
        `}
`;

const ListItem: StyledComponent<'li', DefaultTheme, Layout, never> = styled.li`
    font-size: 1.4rem;
    cursor: pointer;
    ${(props: Layout) => props.horisontal && ` margin-right: 2rem;`}
    &.selected {
        font-weight: 600;
    }
`;

const Menu: React.FC<Props> = ({ list, horisontal }: Props) => {
    // const location = useLocation();
    // console.log(location);

    return (
        <Container horisontal={horisontal}>
            {list.map(item => (
                <ListItem
                    horisontal={horisontal}
                    // className={`/${item.id}` === location.pathname ? 'selected' : ''}
                >
                    {/* prettier-ignore-start */}
                    { item.uri.includes('http')
                        ? <a href={item.uri}>{item.content}</a>
                        : <Link to={item.uri}>{item.content}</Link>
                    }
                    {/* prettier-ignore-end */}
                </ListItem>
            ))}
        </Container>
    );
};

export default Menu;
