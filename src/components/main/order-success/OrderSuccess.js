import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';


class OrderSuccess extends Component {
    render() {
        return (
            <div>
              <Alert variant="success">
                    <Alert.Heading>Thank You !!!!</Alert.Heading>
                    <p>
                     Your order has been placed successfully !!! 
                    </p>
                   
                </Alert>
            </div>
        );
    }
}

export default OrderSuccess;