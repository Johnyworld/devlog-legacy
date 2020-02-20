import * as React from 'react';
import { useCallback } from 'react';
import { useObserver } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';
import darkTheme from './Theme/DarkTheme';
import brightTheme from './Theme/BrightTheme';
import ThemeModeButton from './Components/Atoms/Buttons/ThemeModeButton';
import useStateAndName from './Hooks/useStateAndName';
import { modeStore } from './store';

const App:React.FC = () => {
    return useObserver(() => (
        <ThemeProvider theme={ modeStore.brightMode ? brightTheme : darkTheme }>
            <GlobalStyles />
            <ThemeModeButton />
            <div className="App">
                Hello world
            </div>
        </ThemeProvider>
    ));
}

export default App;
