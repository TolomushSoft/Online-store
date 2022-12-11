import React from 'react';
import './Catalog.scss'
import Gatget from '../../../Gatgets/Gatget'
import Drone from '../../../Gatgets/Drone'
import MacBook from '../../../Gatgets/MacBook'
import Watch from '../../../Gatgets/Watch'
import Tablet from '../../../Gatgets/Tablet'

const Catalog = () => {
    return (
        <>
            <h1 className='title1'>Каталог товаров</h1>
<div className="d-flex">
    <Gatget/>
    <Tablet/>
    <Drone/>
    <MacBook/>
    <Watch/>
    <Gatget/>
    <MacBook/>
    <Tablet/>
    <Gatget/>
    <Drone/>
    <MacBook/>
    <Watch/>
</div>
        </>
    );
};

export default Catalog;