import React from 'react';
import { connect } from 'react-redux';

function Dashbaord({ data }) {
    console.log("data", data);
    return (
        <div>
            ** {data.length ? data[0].name : "please click"} **
        </div>
    )
}

export default connect(state => ({
    data: state.login.data
}))(Dashbaord);