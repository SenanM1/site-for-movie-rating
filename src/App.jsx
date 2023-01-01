import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import DetailedMovie from "./components/DetailedMovie";

import './App.css';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

    return (
        <main>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/movies'><Movies /></Route>
                <Route path='/contactme'><ContactMe /></Route>
                <Route path='/detailedMovie'><DetailedMovie /></Route>
            </Switch>
        </Router>
        </main>
    )
};

export default App;