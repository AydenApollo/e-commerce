# E-commerece Shopping Cart

The user can choose items from a pre-loaded selection of commerece items and move them to their cart for purchase. 

Code example---
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import WelcomePage from './welcome.js';
import Clothes from './clothes.js';
import Shoes from './shoes.js';
import Tech from './tech.js';
import Misc from './misc.js';
import Checkout from './checkout.js';
import ShoppingCount from './cartCount';
import ViewCart from './viewCart'
import store from './store.js';
//import Purchase from './purchase.js'


const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <AppBar position="relative">
        <Toolbar>
          <Box display="flex" width={'100%'} alignItems="center">
            <Box flexGrow={1}>
            <h1><Link to='/'>We Are Servants To Commerce :)</Link></h1>
            </Box>
            <Box>
              <Link to='/ViewCart'>
              <ShoppingCount/>
              </Link>
            </Box>
            <Box>
              <Link to= '/Checkout'>
              <Button>Checkout</Button>
              </Link>
              </Box>
            </Box>
        </Toolbar>
      </AppBar>
    <Switch>
    <Route exact path='/'component={WelcomePage}/>
    <Route path='/clothes' component={Clothes}/>
    <Route path='/shoes' component={Shoes}/>
    <Route path='/tech' component={Tech}/>
    <Route path='/misc' component={Misc}/>
    <Route path='/viewcart' component={ViewCart}/>
    <Route path='/checkout' component={Checkout}/>
    <Route component={NoMatch}/>
  </Switch>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
