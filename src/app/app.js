import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import Allcontent from "../components/content/Allcontent";
import {Provider} from 'react-redux';
import store from "../store/store";


const App = () =>{
    return(
        <Provider store={store}>
            <Router>
                <Header />
                    <Allcontent />
                <Footer />
            </Router>
        </Provider>
    )
}
export default App;