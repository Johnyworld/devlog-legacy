import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Menu from '../Atoms/Menu/Menu';
import Title from '../Atoms/Typography/Title';
import { getExternalLinkList } from '../../Data/list';

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Aside = styled.aside`
    width: 20%;
    padding: 5rem 2rem 2rem;
`;

const Main = styled.main`
    padding: 5rem 2rem 2rem;
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