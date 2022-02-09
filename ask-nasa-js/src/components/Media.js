import React from 'react';

export default function Media({data}) {
    if (data.media_type === "image") {
        return (
            <img alt='media' src={data.url} style={{maxWidth: "100%"}}/>
        );
    } else {
        return (
            <iframe src={data.url} style={{width: "960px", height: "540px"}} />
        )
    }
}