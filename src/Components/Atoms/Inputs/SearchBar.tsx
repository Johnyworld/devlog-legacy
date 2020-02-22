import * as React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    ${props => props.theme.inputNormal}
    padding-left: 2.5em;
    color: ${props => props.theme.color.strongest};
    background-color: ${props => props.theme.color.lightest};
`;

interface Props {
    /** 검색어를 받습니다. */
    term: string;
}

const SearchBar: React.FC<Props> = ({ term }: Props) => {
    return <SearchInput placeholder='Search' />;
};

export default SearchBar;
