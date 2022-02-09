import React from 'react';
import Media from "./Media";
import Copyright from "./Copyright";

export default function ContentFromApi( {data} ) {
    return (
        <div>
            <p>{data.date}</p>
            <Media data = {data} />
            <p><b>{data.title}</b></p>
            <Copyright data={data} />
            <p><b>Explanation:</b> {data.explanation}</p>
            <br/>
        </div>
    );
}