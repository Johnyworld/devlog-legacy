import * as React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
    width: 20%;
    max-width: 300px;
    padding: 5rem 2rem 2rem;
`;

const Aside = ({ children }: any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Aside;