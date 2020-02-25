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
    position: relative;
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
    padding: 2em 0;
    ${(props: Layout) => props.horisontal && ` margin-right: 2rem;`}
    &.selected {
        font-weight: 600;
    }
    &:hover {
        .gnb-children {
            display: block;
        }
    }
`;

const Children = styled.ul`
    position: absolute;
    top: 4.5em;
    display: none;
    ${props=> props.theme.boxStyle};
`;

const ChildrenListItem = styled.li`
    ${props=> props.theme.listInBox};
`;

const Menu: React.FC<Props> = ({ list, horisontal }: Props) => {
    // const location = useLocation();
    // console.log(location);

    return (
        <Container horisontal={horisontal}>
            {list.map(item => (
                <ListItem
                    key={item.id}
                    horisontal={horisontal}
                    // className={`/${item.id}` === location.pathname ? 'selected' : ''}
                >
                    { item.uri.includes('http')
                        ? <a href={item.uri} target='blank'>{item.content}</a>
                        : <Link to={item.uri}>{item.content}</Link>
                    }
                    { item.children &&
                        <Children className='gnb-children'>
                            { item.children.map(child=> (
                                <ChildrenListItem>
                                    { child.uri.includes('http')
                                        ? <a href={child.uri} target='blank'>{child.content}</a>
                                        : <Link to={child.uri}>{child.content}</Link>
                                    }
                                </ChildrenListItem>
                            ))}
                        </Children>
                    }
                </ListItem>
            ))}
        </Container>
    );
};

export default Menu;
