import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';
import theme from './Theme/Theme';

const App:React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
                Hello world
            </div>
        </ThemeProvider>
    );
}

export default App;
