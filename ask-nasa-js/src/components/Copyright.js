import React from 'react';

export default function Copyright( {data} ) {
    if (data.copyright){
        return (
            <p><b>Image Credit & Copyright: {data.copyright}</b></p>
        );
    } else {
        return null;
    }
}