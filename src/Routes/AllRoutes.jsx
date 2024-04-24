import React from 'react'
import { Route, Routes } from 'react-router-dom';
import WishList from './../private/Customer/WishList';
import Cart from './../private/Customer/Cart';
import Explore from './../private/Customer/Explore';
import Register from '../public/Register';
import AddProduct from './../private/Seller/AddProduct';
import Order from '../private/Customer/Order';
import SellerDashBoard from './../private/Seller/SellerDashBoard';
import Home from '../public/Home';
import Login from '../public/Login';
import App from "../App";
import AddAddress from './../private/Common/AddAddress';
import EditProfile from './../private/Common/EditProfile';
import VerifyOTP from '../public/VerifyOtp';
import Headers from '../Util/Headers';
import { useAuth } from '../authContext/AuthProvider';


const AllRoutes = () => {

    const {user} = useAuth();
       

    const { role, authenticated } = user
    let routes = [];
    if (authenticated) {
        (role === "seller") ?
            routes.push(
                <Route key={"seller-dashboard"} path="/seller-dashboard" element={<SellerDashBoard />} />,
                <Route key={"add-product"} path="/add-product" element={<AddProduct />} />,

            ) : (role === "customer") &&
            routes.push(
                <Route key={"cart"} path="/cart" element={<Cart/>}/>,
                <Route key={"orders"} path="/orders" element={<Order/>}/>,
                <Route key={"wishlist"} path="/wishlist" element={<WishList/>}/>,
                <Route key={"explore"} path="/explore" element={<Explore/>}/>,

            )

        routes.push(
            <Route key={"home"} path='/' element={<Home />} />,
            <Route key={"add-address"} path='/address' element={<AddAddress/>} />,
            <Route key={"edit-profile"} path='/edit-profile' element={<EditProfile/>}/>


        )

    }
    else {

            routes.push(
                <Route key={Explore} path="/explore" element={<Explore />} />,
                <Route key={Register} path='/register' element={<Register role={"CUSTOMER"} />} />,
                <Route key={Register} path='/registerSeller' element={<Register role={"SELLERccc"} />} />,
                <Route key={Login} path='/login' element={<Login/>} />,
                <Route key={VerifyOTP} path="/VerifyOTP" element={<VerifyOTP/>} />,
                <Route key={Headers} path="/Header" element={<Headers/>} />,
                <Route key={SellerDashBoard} path="/SellerDashboard" element={<SellerDashBoard/>}/>,
                <Route key={Home} path="/home" element={<Home />} />
                
            )

        // render routes that are assigned to all user 
        // conditionally render routes that specific

    }
    routes.map(route => console.log(routes.props))

    return (
        <Routes>
            <Route path='/' element={<App/>}>{routes}</Route>
        </Routes>
    )
}

export default AllRoutes