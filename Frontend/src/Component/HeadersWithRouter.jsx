import {useLocation} from 'react-router-dom';
import React from 'react';
import Headers from './Headers';

function HeadersWithRouter(){
    const location = useLocation();
    return <Headers location ={location} />
}
export default HeadersWithRouter;