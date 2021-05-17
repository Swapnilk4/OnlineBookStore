import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import books from '../../../books.json';
import {  Link } from 'react-router-dom';

class BookList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: books
        };
    }

    incrementCount = (index) => {
         let books = [...this.state.books];
         let item = {...books[index]};
         item.selectedCount += 1;
         books[index] = item;
         this.setState({books});
      };

    sendBooks = () => {
        this.props.sendData(this.state.books.filter(book=> book.selectedCount > 0));
    };


    decrementCount = (index) => {
    let books = [...this.state.books];
    let item = {...books[index]};
    item.selectedCount = item.selectedCount ? item.selectedCount - 1 :item.selectedCount;
    books[index] = item;
    this.setState({books});
 };
    render() {
        const caption ={
            padding:'20px  20px 0 20px',
            fontSize:'18px',
            fontWeight:'bold'
        }
        const bookListStyle = {
            padding:'20px 20px',
        }

        const bookStyle = {
            //display:'inline-block',
            //border: '1px solid lightgray',
            borderRadius: '5px',
            //margin: '10px',
            //width: '290px !important',
            //height: '100px',
            padding:'8px'
        }

        const bookTitle= {
            fontWeight: 'bold',
            width: '250px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        } 

        const author = {
            width: '250px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
     

        return (
            <div>
                <div style={caption}> 
                <div style={{ display:'inline-block' }}> Books </div> 
                <div  style={{ float:'right', display:'inline-block' }}> 
                     {/* <Button variant="primary" className="btn-primary" onClick={this.addToCart}>Add to Cart</Button> */}
                     <Link to="/cart" className="btn-primary" onClick={this.sendBooks}>Add to Cart</Link>

                </div>
                </div>
                <div className="row" style={bookListStyle}>
                    {this.state.books.map((book, index) => {
                    
                    return (
                    <div key={book.id} className="col-md-3" style={bookStyle}>
                    <Card style={{padding:'8px'}}>
                    <Card.Title style={bookTitle} title={book.name}> {book.name}</Card.Title>
                    <Card.Body>
                    <Card.Text style={author} title={book.author}>
                    {book.author}
                    </Card.Text>
                        <div>  
                            <img src="images/minus.svg" width="15px" style={{ cursor: 'pointer'}} onClick={()=> {this.decrementCount(index)}}/>
                            <span style={{padding:' 0 10px'}}> {book.selectedCount}</span> 
                            <img src="images/plus.svg"  width="15px" style={{ cursor: 'pointer'}}  onClick={()=> {this.incrementCount(index)}}/>
                        </div>

                    </Card.Body>
                    </Card>
                    </div>
                    )})}
                </div>
             </div>
        );
    }
}

export default BookList;