import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Posts from './Posts'
import PostsDetails from './PostsDetails'
import Logo from './Logo'

const App = () => {


  
        return(
            <Router>
                <>
                <Navbar />
                <Logo />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/posts" component={Posts} />
                        <Route exact path="/posts/:id" component={PostsDetails} />
                    </Switch>
                </>
            </Router>
        )
    
}

export default App;