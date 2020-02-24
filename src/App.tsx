import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useObserver } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';
import darkTheme from './Theme/DarkTheme';
import brightTheme from './Theme/BrightTheme';
import { modeStore } from './store';
import Header from './Components/Organisms/Header';
import About from './Components/Page/About';
import Development from './Components/Page/Development';

const App: React.FC = () => {
    return useObserver(() => (
        <ThemeProvider theme={modeStore.darkMode ? darkTheme : brightTheme}>
            <GlobalStyles />
            <Router>
                <Header />
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/dev'>
                        <Development />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    ));
};

export default App;
