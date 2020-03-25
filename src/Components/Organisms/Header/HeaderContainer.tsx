import * as React from 'react';
import styled from 'styled-components';
import ThemeModeButton from '../../Molecules/Buttons/ThemeModeButton';
import SearchBar from '../../Atoms/Inputs/SearchBar';
import LanguageChanger from '../../Molecules/Selection/LanguageChanger';
import Global from '../../Molecules/Menu/Global/Global';
import HeaderLogo from '../../Molecules/Logos/HeaderLogo';

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0; 
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    z-index: 999;
    height: var(--header_height);
    border-bottom: 1px solid ${props=> props.theme.color.lightest};
    background-color: ${props=> props.theme.color.background}
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
            <HeaderLogo />
            <Column>
                <Global />
                <ThemeModeButton />
                <LanguageChanger />
                <SearchBar term='' />
            </Column>
        </Container>
    );
};

export default HeaderContainer;
