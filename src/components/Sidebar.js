import React from "react";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="container">
                    <div className="shead">
                        <div className="logo"></div>
                        <div className="name">InrecoLAN</div>
                    </div>
                    <div className="suser">
                        <div className="avatar"></div>
                        <div className="info">
                            <div className="greating">Здравствуйте,</div>
                            <div className="name">Иванов Иван</div>
                        </div>
                    </div>
                    <div className="smenu">
                        <div className="heading">General</div>
                        <ul className="left-nav">
                            <li className="nav-item has-submenu active">
                                <a href="#" className="nav-item-link"><i className="icon-left"></i> Личный кабинет</a>
                                <ul className="sub-menu">
                                    <li className="sub-item">
                                        <a href="#" className="sub-item-link">Избранное</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="bottom-panel">
                    <div className="panel-item">1</div>
                    <div className="panel-item">2</div>
                    <div className="panel-item">3</div>
                    <div className="panel-item">4</div>
                </div>
            </div>
        );
    }
}