import * as React from 'react';
import Content from '../../Layout/Content';
import Aside from '../../Layout/Aside';
import Main from '../../Layout/Main';

const Blog: React.FC = () => {
    return (
        <Content>
            <Aside>
                Blog Side
            </Aside>
            <Main>
                Blog Main
            </Main>
        </Content>
    );
};

export default Blog;
