import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Content from '../../Layout/Content';
import Aside from '../../Layout/Aside';
import Main from '../../Layout/Main';
import Menu from '../Atoms/Menu/Menu';
import Title from '../Atoms/Typography/Title';
import { getExternalLinkList } from '../../Data/list';

const Home: React.FC = () => {
    const { t } = useTranslation();
    const list = getExternalLinkList(t);

    return (
        <Content>
            <Aside>
                <Title text={t('external')} color='light' size='regular' line />
                <Menu list={list} />
            </Aside>
            <Main>
                <Title text='Welcome to my development blog' color='strongest' size='title' />
            </Main>
        </Content>
    );
};

export default Home;