import React from "react";
import Moment from 'moment'
import PropTypes from 'prop-types'
import {Status} from '../constants/Status'
import {Type} from '../constants/Type'

export default class TableRow extends React.Component {
    render() {
        const {items} = this.props;
        return (
            items.map((item, index) =>
                <tr key={index}>
                    <td>
                        <select className="form_control" defaultValue={item.type}>
                            {Type.map((elem,index) =>
                                <option
                                    key={index}
                                    value={index}
                                >
                                    {elem}
                                </option>
                            )}
                        </select>
                    </td>
                    <td><a href="#">{item.title}</a></td>
                    <td>{ Moment(item.created_at).format('DD.MM.YYYY HH:mm') }</td>
                    <td>{ Moment(item.updated_at).format('DD.MM.YYYY HH:mm') }</td>
                    <td>
                        <select className="form_control" defaultValue={item.status}>
                            {Status.map((elem,index) =>
                                <option key={index} value={index}>{elem}</option>
                            )}
                        </select>
                    </td>
                </tr>
            )


        )
    }
}


TableRow.propTypes = {
    items: PropTypes.array.isRequired
}