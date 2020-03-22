import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Aside from '../../Layout/Aside';
import Main from '../../Layout/Main';
import Menu from '../Atoms/Menu/Menu';
import Title from '../Atoms/Typography/Title';
import { getExternalLinkList } from '../../Data/list';

const Container = styled.div`
    display: flex;
    height: calc(100vh - var(--header_height));
`;

const Home: React.FC = () => {
    const { t } = useTranslation();
    const list = getExternalLinkList(t);

    return (
        <Container>
            <Aside>
                <Title text={t('external')} color='light' size='regular' line />
                <Menu list={list} />
            </Aside>
            <Main>
                <Title text='Welcome to my development blog' color='strongest' size='title' />
            </Main>
        </Container>
    );
};

export default Home;