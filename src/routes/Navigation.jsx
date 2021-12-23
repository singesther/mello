import { Route, Switch } from 'react-router';
import Home from '../pages/home/Home';
import NewProduct from '../pages/newProduct/NewProduct';
import NewUser from '../pages/newUser/NewUser';
import Product from '../pages/product/Product';
import ItemList from '../pages/itemsList/ItemList';
import PharmacyList from '../pages/pharmacyList/pharmacyList';
import User from '../pages/user/User';
import UserList from '../pages/userList/UserList';
import Pharmacy from '../pages/pharmacy/Pharmacy';
import NewPharmacy from '../pages/newPharmacy/NewPharmacy';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import NewItem from '../pages/newItem/NewItem';
const Navigation = () => {
    return (
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
                <Route exact path="/users/new">
                  <NewUser />
                </Route>
                <Route exact path="/items">
                  <ItemList />
                </Route>
                <Route exact path="/items/new">
                  <NewItem />
                </Route>
                <Route exact path="/pharmacies">
                  <PharmacyList />
                </Route>
                <Route exact path="/pharmacies/new">
                  <NewPharmacy />
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
                <Route exact path="/password/reset">
                  <ResetPassword />
                </Route>
              </Switch>
    )
}

export default Navigation
