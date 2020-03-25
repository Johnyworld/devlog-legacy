import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    ${props => props.theme.inputNormal}
    padding-left: 2.5em;
    color: ${props => props.theme.color.strongest};
    background-color: ${props => props.theme.color.input};
`;

const Icon = styled.svg`
    width: 16px;
    height: 16px;
    left: 10px;
    position: absolute;
    opacity: .7;
`;

interface Props {
/** 검색어를 받습니다. */
    term: string;
}

const SearchBar: React.FC<Props> = ({ term }: Props) => {
    return (
        <Container>
            <Icon xmlns="http://www.w3.org/2000/svg" 
                viewBox={`0 0 24 24`}>
                <path fill="white" d="M9.5,1C14.2,1,18,4.8,18,9.5S14.2,18,9.5,18S1,14.2,1,9.5S4.8,1,9.5,1 M9.5,0C4.3,0,0,4.3,0,9.5
                    C0,14.7,4.3,19,9.5,19S19,14.7,19,9.5C19,4.3,14.7,0,9.5,0L9.5,0z"/>
                <line stroke="white" x1="15.5" y1="15.5" x2="23.2" y2="23.2"/>
            </Icon>
            <SearchInput placeholder='Search' />
        </Container>
    )
};

export default SearchBar;
