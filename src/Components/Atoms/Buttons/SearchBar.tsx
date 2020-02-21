import * as React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    border: none;
    outline: none;
    font-size: 1.4rem;
    font-weight: 600;
    width: 12em;
    line-height: 2.2em;
    padding-left: 2.5em;
    padding-right: 1em;
    border-radius: 2em;
    color: ${props=> props.theme.color.strongest};
    background-color: ${props=> props.theme.color.lightest};
`;

interface Props {
    /** 검색어를 받습니다. */
    term: string;
}

const SearchBar:React.FC<Props> = ({ term }:Props) => {
    return (
        <SearchInput placeholder='Search' />
    )
}

export default SearchBar;