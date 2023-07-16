import React from 'react';
import preloader from "../assets/images/preloader.gif";

const IsLoading = () => {
    return  <img style={{width: "40px", height: "40px"}} src={preloader} alt={'preloaderImg'}/>
};

export default IsLoading;