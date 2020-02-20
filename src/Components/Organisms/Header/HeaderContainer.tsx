import * as React from 'react';
import styled from 'styled-components';
import ThemeModeButton from '../../Molecules/Buttons/ThemeModeButton';

const Container = styled.header`
    padding: 10px;
    border-bottom: 1px solid ${props=> props.theme.color.normalFont};
`;

const HeaderContainer:React.FC = () => {
    return (
        <Container>
            <ThemeModeButton />
        </Container>
    )
}

export default HeaderContainer;