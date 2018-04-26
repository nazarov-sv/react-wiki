import React from 'react';
import {connect} from "react-redux";
import Sidebar from './Sidebar'
import Main from "./Main";


class App extends React.Component {
  render() {
    return (
        <div className="app">
            <Sidebar />
            <Main />
        </div>
    );
  }
}

function mapStateToProps (state) {
    return {
        favorite: state.favoritePosts,
    }
}

export default connect(mapStateToProps)(App)
