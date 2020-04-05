import * as React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
    width: 20%;
    max-width: 300px;
    border-right: 1px solid ${props=> props.theme.color.deepest};
`;

const Sticky = styled.div`
    padding: 2rem;
    position: -webkit-sticky;
    position: sticky;
    top: var(--header_height);
`;

const Aside = ({ children }: any) => {
    return (
        <Container>
            <Sticky>
                {children}
            </Sticky>
        </Container>
    )
}

export default Aside;