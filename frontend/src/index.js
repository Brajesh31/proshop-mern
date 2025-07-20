import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './bootstrap.min.css';
import './index.css';

import App from './App';

import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import reportWebVitals from './reportWebVitals';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScree';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/search/:keyword/page/:pageNumber',
        element: <HomeScreen />,
      },
      {
        path: '/page/:pageNumber',
        element: <HomeScreen />,
      },
      {
        path: '/search/:keyword',
        element: <HomeScreen />,
      },
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/shipping',
        element: <ShippingScreen />,
      },
      {
        path: '/order/:orderId',
        element: <OrderScreen />,
      },
      {
        path: '/payment',
        element: <PaymentScreen />,
      },
      {
        path: '/placeorder',
        element: <PlaceOrderScreen />,
      },
      {
        path: '/profile',
        element: <ProfileScreen />,
      },
      {
        path: '/register',
        element: <RegisterScreen />,
      },
      {
        path: '/product/:id',
        element: <ProductScreen />,
      },
      {
        path: '/cart/:id?',
        element: <CartScreen />,
      },
      {
        path: '/admin/userlist',
        element: <UserListScreen />,
      },
      {
        path: '/admin/user/:id/edit',
        element: <UserEditScreen />,
      },
      {
        path: '/admin/productlist',
        element: <ProductListScreen />,
      },
      {
        path: '/admin/productlist/:pageNumber',
        element: <ProductListScreen />,
      },
      {
        path: '/admin/product/:id/edit',
        element: <ProductEditScreen />,
      },
      {
        path: '/admin/orderlist',
        element: <OrderListScreen />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
