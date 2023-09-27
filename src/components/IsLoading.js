import React from 'react';
import preloader from "../assets/images/preloader.gif";
import s from "./IsLoading.module.css";

const IsLoading = () => {
    return  <div className={s.loadingWrapper}>
        <img className={s.Loading} src={preloader} alt={'preloaderImg'}/>
    </div>
};

export default IsLoading;