import React from 'react';

const ErrorMessage = (props) => {
    const message = props.handleError(props.name)
    if (message)
        return (

            <div class="alert alert-danger mx-3">
                {message}
            </div>

        )
    else
        return null

}

export default ErrorMessage;