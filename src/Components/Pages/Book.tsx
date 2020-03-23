import * as React from 'react';
import Content from '../../Layout/Content';
import Aside from '../../Layout/Aside';
import Main from '../../Layout/Main';

const Book: React.FC = () => {
    return (
        <Content>
            <Aside>
                Book Side
            </Aside>
            <Main>
                Book Main
            </Main>
        </Content>
    );
};

export default Book;
