import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Users from './components/Users/Users';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Products from './components/Products/Products';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProducts from './components/ManageProducts/ManageProducts';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Payment from './components/Payment/Payment';
import MyOrders from './components/MyOrders/MyOrders';
import Review from './components/Review/Review';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Booking from './components/Booking/Booking/Booking';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/addProducts">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/booking/:productId">
              <Booking />
            </PrivateRoute>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
