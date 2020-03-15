import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

interface Props {

}

const Home: React.FC<Props> = ({}:Props) => {
    return (
        <Container>
            <p>Hello, world</p>
        </Container>
    );
};

export default Home;