import * as React from 'react';
import styled from 'styled-components';
import ThemeModeButton from '../../Molecules/Buttons/ThemeModeButton';
import SearchBar from '../../Atoms/Inputs/SearchBar';
import LanguageChanger from '../../Molecules/Selection/LanguageChanger';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`;

const Column = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > *:not(:last-child) {
        margin-right: 10px;
    }
`;

const HeaderContainer: React.FC = () => {
    return (
        <Container>
            <h2>로고</h2>
            <Column>
                <ThemeModeButton />
                <LanguageChanger />
                <SearchBar term='' />
            </Column>
        </Container>
    );
};

export default HeaderContainer;
