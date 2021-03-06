import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { NavBarContainer } from './NavBar';
import { HeaderContainer } from './Header';
import { connect } from 'react-redux';
//import { NavBarContainer } from './components/NavBar';
import { HomeContainer } from './Home';
import { SearchBarContainer} from './SearchBar';
const App = React.createClass({
    mixins: [PureRenderMixin],
    render: function () {
        return (
            <div id="wrapper">
                <NavBarContainer />
                {/*<div >
                </div>*/}

                {/*<hr />*/}

                <div id="page-wrapper">
                    <div className="container-fluid">

                        <HeaderContainer />
                        {/* Contenido*/}
                        {this.props.children}


                    </div>
                </div>
            </div>
        );
    }
});

export default App;

/*function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export const AppContainer =  connect(select)(App);*/