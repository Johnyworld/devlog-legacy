import * as React from 'react';
import Content from '../../Layout/Content';
import Aside from '../../Layout/Aside';
import Main from '../../Layout/Main';

const Work: React.FC = () => {
    return (
        <Content>
            <Aside>
                Work Side
            </Aside>
            <Main>
                Work Main
            </Main>
        </Content>
    );
};

export default Work;
