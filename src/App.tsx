import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useObserver } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';
import darkTheme from './Theme/DarkTheme';
import brightTheme from './Theme/BrightTheme';
import { modeStore } from './store';
import Header from './Components/Organisms/Header';
import About from './Components/Pages/About';
import Development from './Components/Pages/Development';
import Book from './Components/Pages/Book';
import Diary from './Components/Pages/Diary';

const App: React.FC = () => {
    return useObserver(() => (
        <ThemeProvider theme={modeStore.darkMode ? darkTheme : brightTheme}>
            <GlobalStyles />
            <Router>
                <Header />
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/dev' component={Development} />
                    <Route path='/book' component={Book} />
                    <Route path='/diary' component={Diary} />
                </Switch>
            </Router>
        </ThemeProvider>
    ));
};

export default App;
