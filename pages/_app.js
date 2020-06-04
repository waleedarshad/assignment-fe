import '../styles/global.css'
import App from 'next/app'
import withRedux from 'next-redux-wrapper';
import React from 'react'
import { Provider } from 'react-redux';
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store';


class MyApp extends App{
    
    render(){
        const {Component,pageProps}= this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

const makestore = ()=> store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
// export default withRedux(initStore)(MyApp);