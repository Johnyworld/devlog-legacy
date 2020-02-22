import * as React from 'react';
import { useObserver } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';
import darkTheme from './Theme/DarkTheme';
import brightTheme from './Theme/BrightTheme';
import { modeStore } from './store';
import Header from './Components/Organisms/Header';

const App: React.FC = () => {
    return useObserver(() => (
        <ThemeProvider theme={modeStore.brightMode ? brightTheme : darkTheme}>
            <GlobalStyles />
            <Header />
        </ThemeProvider>
    ));
};

export default App;
