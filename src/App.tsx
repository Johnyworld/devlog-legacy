import * as React from 'react';
import { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';
import darkTheme from './Theme/DarkTheme';
import brightTheme from './Theme/BrightTheme';
import ThemeModeButton from './Components/Atoms/Buttons/ThemeModeButton';

const App:React.FC = () => {
    const [ brightMode, setBrightMode ] = useState( true );

    const onChangeMode = useCallback(() => {
        if ( brightMode ) setBrightMode( false );
        else setBrightMode( true );
    }, [ brightMode ])

    return (
        <ThemeProvider theme={ brightMode ? brightTheme : darkTheme }>
            <GlobalStyles />
            <ThemeModeButton isBrightMode={brightMode} onChange={onChangeMode} />
            <div className="App">
                Hello world
            </div>
        </ThemeProvider>
    );
}

export default App;
