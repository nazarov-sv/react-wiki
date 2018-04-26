import React from 'react'

export default class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="sidebar-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="top-menu">
                    <div className="messages"></div>
                    <div className="user-menu">
                        <div className="avatar"></div>
                        <div className="info">Иванов Иван</div>
                    </div>
                </div>
            </div>
        );
    }
}
