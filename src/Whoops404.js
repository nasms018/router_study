import React from 'react';
import { useLocation } from 'react-router-dom';

function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1>http://localhost:3000{location.pathname} : 경로의 리소스를 찾을 수 없습니다. </h1>
        </div>
    );
}

export default Whoops404;
//(Resource not fount)