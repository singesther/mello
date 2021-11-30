import { Route, Switch } from 'react-router';
import Home from '../pages/home/Home';
import NewProduct from '../pages/newProduct/NewProduct';
import NewUser from '../pages/newUser/NewUser';
import Product from '../pages/product/Product';
import ProductList from '../pages/productList/ProductList';
import User from '../pages/user/User';
import UserList from '../pages/userList/UserList';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';

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
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:tin">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Layout;
