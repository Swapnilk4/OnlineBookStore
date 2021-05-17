import React from 'react';
import Alert from 'react-bootstrap/Alert';


function OrderSuccess(props) {
  
    let state = props.selectedBooksForOrder;
    console.log('state', state);
    return (
        <div>
            <Alert variant="success"  className="col-md-4">
                <Alert.Heading>Thank You !!!!</Alert.Heading>
                <p>
                    Your order has been placed successfully !!! 
                </p>
            </Alert>
        </div>
    );
}

export default OrderSuccess;