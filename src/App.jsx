import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/movies'><Movies /></Route>
                <Route path='/contactme'><ContactMe /></Route>
            </Switch>
        </Router>
    )
};

export default App;