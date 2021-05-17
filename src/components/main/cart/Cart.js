import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class Cart extends Component {
    customerId ='admin_123';
    constructor(props){
        super(props)
        this.state={
            selectedBooks : this.props.selectedBooks 
        };

        console.log("ss", this.state);
    }
    handleBookIdChange(e) {
        // console.log('event', e);
        // console.log('event2', this.props);
    }

    sendUpdatedBooks = () => {
        this.props.sendDataToSuccessPage(this.state.selectedBooks.filter(book=> book.selectedCount > 0));
    };

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
       // if (nextProps.startTime !== this.state.startTime) {
          this.setState({ selectedBooks: nextProps.selectedBooks });
        //}
        console.log("ss2", this.state);
      }

    render() {
        return (
            <div>
                <div className="form-container col-md-4">
                  <Form>
                      <div className="fields-container">
                    {this.state.selectedBooks.map((book,index) => (
                       
                    <div key={`form-${book.id}`} >
                        <div style={{textAlign:'center',fontWeight:'bolder'}}> Book {index +1 }</div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{fontWeight:'bolder'}}>Book Id</Form.Label>
                            <Form.Control type="input" placeholder="Enter Book Id" defaultValue={book.id} onChange={(e) => this.handleBookIdChange(e)} />
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
                        <Link to="/order-success"className="btn-primary" onClick={this.sendUpdatedBooks}>Place Order</Link>
                </Form> 
            </div>
        <div>      
    </div>
   </div>
        );
    }
}

export default Cart;