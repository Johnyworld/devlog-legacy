import * as React from 'react';
import styled from 'styled-components';

const Container = styled.main`
    flex-grow: 1;
    padding: 5rem 2rem 2rem;
    margin: 0 auto;
    max-width: var(--main_maxWidth);
`;

const Main = ({ children }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Main;