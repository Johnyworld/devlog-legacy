import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: calc(100vh - var(--header_height));
    margin-top: var(--header_height);
`;

const Content = ({ children }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Content;