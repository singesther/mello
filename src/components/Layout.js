import { Route, Switch } from 'react-router';
import Home from '../pages/home/Home';
import NewProduct from '../pages/newProduct/NewProduct';
import NewUser from '../pages/newUser/NewUser';
import Product from '../pages/product/Product';
import ProductList from '../pages/productList/ProductList';
import PharmacyList from '../pages/pharmacyList/pharmacyList';
import User from '../pages/user/User';
import UserList from '../pages/userList/UserList';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import Pharmacy from '../pages/pharmacyList/Pharmacy';

const Layout = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:tin">
            <User />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/pharmacies">
            <PharmacyList />
          </Route>
          <Route exact path="/pharmacies/:id">
            <Pharmacy />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route exact path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Layout;
