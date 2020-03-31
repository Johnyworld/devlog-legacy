import * as React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
    width: 20%;
    max-width: 300px;
`;

const Side = styled.div`
    padding: 2rem;
    position: -webkit-sticky;
    position: sticky;
    top: var(--header_height);
`;

const Aside = ({ children }: any) => {
    return (
        <Container>
            <Side>
                {children}
            </Side>
        </Container>
    )
}

export default Aside;