import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AddFavorite from "./AddFavorite";
import Footer from "./Footer";
import Header from "./Header";
import TableRow from "./TableRow";
import * as favoriteActions from '../actions/FavoriteActions'


class Main extends React.Component {
    render() {
        const { posts } = this.props.favorite
        const { addFavorite } = this.props.favoriteActions
        return (
            <div className="main">
                <Header/>
                <div className="container">
                    <div className="heading">
                        <h1>Избранное</h1>
                        <div className="search">
                            <input type="text" placeholder="Search for..."/>
                                <button className="btn-search">Go!</button>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="title">
                            Избранные материалы
                        </div>
                        <div className="content">
                            <AddFavorite addFavorite={addFavorite} />
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Тип материала</th>
                                        <th>Название материала</th>
                                        <th>Дата создания</th>
                                        <th>Дата последнего изменения</th>
                                        <th>Статус</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow items={posts} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        favorite: state.favorite
    }
}
function mapDispatchToProps(dispatch) {
    return {
        favoriteActions: bindActionCreators(favoriteActions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)