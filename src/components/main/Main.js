import BookList from "./book-list/BookList";
import Cart from "./cart/Cart";
import OrderSuccess from "./order-success/OrderSuccess";
import { Route, Switch, HashRouter as Router} from 'react-router-dom';
import React, { Component } from 'react';

class Main extends Component{
    
    constructor(props){
      super(props);
      this.getData = this.getData.bind(this);
      this.state = {
        selectedBooks:[]
      }
    }

    getData(val){
        // do not forget to bind getData in constructor
      console.log("eeeff", val);
      this.setState({selectedBooks: val});
    }
  
    render(){
      return (

            <div> 
                <Router>
                    <React.StrictMode>
                    <Switch>
                        {/* <Route exact path="/" component={BookList} /> */}
                        <Route exact path="/" render={props=><BookList { ...props} sendData={this.getData} />}/>
                        <Route path="/cart"   render={props=><Cart { ...props} selectedBooks={this.state.selectedBooks} />}/>
                        <Route path="/order-success" component={OrderSuccess} />
                    </Switch>
                    </React.StrictMode>
                </Router>
      </div>
     
    );
  }
}
  export default Main;