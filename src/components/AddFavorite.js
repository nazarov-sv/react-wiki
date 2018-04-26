import React from 'react'
import PropTypes from 'prop-types'
import {Status} from '../constants/Status'
import {Type} from '../constants/Type'

export default class AddFavorite extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            type: 0,
            status: 0,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e){
        e.preventDefault();
        this.props.addFavorite({
            title: this.state.title,
            type: this.state.type,
            created_at: Date.now(),
            updated_at: Date.now(),
            status: this.state.status,
        });

        this.setState({title: ''});
    }

    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <form className="add_favorite">
                <h3>Добавление нового материала</h3>
                <div className="form_element">
                    <label htmlFor="post_type">Тип материала</label>
                    <select id="post_type" name='type' onChange={this.handleInputChange} className="form_control" defaultValue='0'>
                        {Type.map((elem,index) =>
                            <option key={index} value={index}>
                                {elem}
                            </option>
                        )}
                    </select>
                </div>
                <div className="form_element">
                    <label htmlFor="post_name">Название материала</label>
                    <input type="text" name='title' id="post_name" value={this.state.title} onChange={this.handleInputChange}  className="form_control"/>
                </div>
                <div className="form_element">
                    <label htmlFor="post_status">Статус</label>
                    <select id="post_status" name='status' onChange={this.handleInputChange} className="form_control" defaultValue='0'>
                        {Status.map((elem,index) =>
                            <option key={index} value={index}>{elem}</option>
                        )}
                    </select>
                </div>
                <button
                    onClick={this.submitForm}
                    disabled={ this.state.title.length < 5 }
                    ref='submit_button'
                    className="form_btn">
                    Добавить
                </button>
            </form>
        );
    }
}

AddFavorite.propTypes = {
    addFavorite: PropTypes.func.isRequired
}
