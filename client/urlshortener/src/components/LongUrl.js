import React from 'react';
import { useParams } from 'react-router';

const LongUrl = () => {

    let {code} = useParams();

    return ( 
        <h2>Long Url {code}</h2>
    );
}
export default LongUrl;
