import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class Cart extends Component {
    customerId ='admin_123';
    constructor(props){
        super(props)

        console.log("ss", this.state);
    }

    render() {
        return (
            <div>
                <div className="form-container">
                  <Form>
                      <div className="fields-container">
                    {this.props.selectedBooks.map((book,index) => (
                       
                    <div key={`form-${book.id}`} >
                        <div style={{textAlign:'center',fontWeight:'bolder'}}> Book {index +1 }</div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{fontWeight:'bolder'}}>Book Id</Form.Label>
                            <Form.Control type="input" placeholder="Enter Book Id" defaultValue={book.id} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{fontWeight:'bolder'}}>Customer Id</Form.Label>
                            <Form.Control type="input" placeholder="Enter Customer Id" defaultValue ={this.customerId} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{fontWeight:'bolder'}}>Quantity</Form.Label>
                            <Form.Control type="input" placeholder="Enter Quantity" defaultValue ={book.selectedCount} />
                        </Form.Group>
                        </div>
                        ))}
                        </div>
                        <Form.Group controlId="formBasicCheckbox">
                           <div style={{fontWeight:'bolder'}}>Payment Mode</div>

                           <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    label="Google Pay"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Debit Card"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Credit Card"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    />
                                </Col> 
                        </Form.Group>
                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                        <Link to="/order-success"className="btn-primary">Place Order</Link>
                </Form> 
            </div>
        <div>      
    </div>
   </div>
        );
    }
}

export default Cart;