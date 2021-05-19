import React, {Component} from 'react';
import {HashRouter, Redirect} from "react-router-dom";
import {Route, Switch} from "react-router";
import Body from "./components/Intro/Body";
import Login from "./components/Intro/Login";
import Register from "./components/Intro/Register";
import Home from "./components/HomeSearch";
import Search from './components/search/search';
import Chi from './components/search/cityCHI'
import NY from './components/search/cityNY'
import SD from './components/search/citySD'
import Seattle from './components/search/citySeattle'
import ViewMyTrips from "./components/viewmytrips/ViewMyTrips";

export default class RouterWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: null
        };
    }

    showForm = () => {
        this.setState({
            path: "/"
        });
    }

    render() {
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/flextripper" component={Body} exact onShow={this.showForm}/>
                        <Route path="/register" component={Register}
                               exact render={()=>(
                            this.props.user ? (alert("You can't register if you are logged in!"),
                                (<Redirect to="/home"/>)) : (<Register/>)
                        )}/>
                        <Route path="/login" component={Login}
                               exact render={()=>(
                            this.props.user ? (alert("You can't login if you are logged in!"),
                                (<Redirect to="/home"/>)) : (<Login/>)
                        )}/>
                        <Route path="/home" component={Home} type="private"/>
                        <Route path="/search" component={Search} />
                        <Route path="/viewmytrips" component={ViewMyTrips} />
                        <Route path="/cityChi" component={Chi} />
                        <Route path="/cityNY" component={NY} />
                        <Route path="/citySD" component={SD} />
                        <Route path="/citySeattle" component={Seattle} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}
