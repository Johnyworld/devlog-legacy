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
import Blog from './Components/Pages/Blog';
import Book from './Components/Pages/Book';
import Work from './Components/Pages/Work';
import Home from './Components/Pages/Home';

const App: React.FC = () => {
    return useObserver(() => (
        <ThemeProvider theme={modeStore.darkMode ? darkTheme : brightTheme}>
            <GlobalStyles />
            <Router>
                <Header />
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/work' component={Work} />
                    <Route path='/book' component={Book} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        </ThemeProvider>
    ));
};

export default App;
