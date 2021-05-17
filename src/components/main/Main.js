import BookList from "./book-list/BookList";
import Cart from "./cart/Cart";
import OrderSuccess from "./order-success/OrderSuccess";
import { Route, Switch, HashRouter as Router} from 'react-router-dom';
import React, { Component } from 'react';
import books from '../../books.json';


class Main extends Component{
    
    constructor(props){
      super(props);
      this.getData = this.getData.bind(this);
      this.getDataFromCart = this.getDataFromCart.bind(this);
      this.state = {
        selectedBooks:[],
        selectedBooksForOrder:[]
      }
    }

    getData(val){
      // do not forget to bind getData in constructor
      this.setState({selectedBooks: val});
    }

    
    getDataFromCart(val){
      this.setState({selectedBooksForOrder: val});
    }
    
    render(){
      return (

            <div> 
                <Router>
                    <React.StrictMode>
                    <Switch>
                        {/* <Route exact path="/" component={BookList} /> */}
                        <Route exact path="/" render={props=><BookList { ...props } sendData={this.getData}  books={books}/>}/>
                        <Route path="/cart"   render={props=><Cart { ...props} selectedBooks={this.state.selectedBooks} sendDataToSuccessPage={this.getDataFromCart}/>}/>
                        <Route path="/order-success"  render={props=><OrderSuccess { ...props} selectedBooksForOrder={this.state.selectedBooksForOrder} />}/>
                    </Switch>
                    </React.StrictMode>
                </Router>
      </div>
     
    );
  }
}
  export default Main;