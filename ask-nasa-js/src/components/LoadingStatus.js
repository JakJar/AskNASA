import React from 'react';

export default function LoadingStatus({data}) {
    if (typeof (data) === "string") {
        return (
            <div>{data}</div>
        );
    } else {
        return null;
    }
}