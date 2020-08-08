import React from 'react';
import { Button as AntButton } from 'antd';

function Button(props) {
    return (
        <div>
            <AntButton {...props} />
        </div>
    )
}

export default Button;
