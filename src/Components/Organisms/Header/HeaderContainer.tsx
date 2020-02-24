import * as React from 'react';
import styled from 'styled-components';
import ThemeModeButton from '../../Molecules/Buttons/ThemeModeButton';
import SearchBar from '../../Atoms/Inputs/SearchBar';
import LanguageChanger from '../../Molecules/Selection/LanguageChanger';
import { useTranslation } from 'react-i18next';
import Global from '../../Molecules/Menu/Global/Global';

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
    const { t } = useTranslation();
    return (
        <Container>
            <h2>{t('hello')}</h2>
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
