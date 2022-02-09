import React from 'react';
import LoadingStatus from "./LoadingStatus";
import ContentFromApi from "./ContentFromApi";

export default function ShowStatusOrContent( {data} ) {
    if (typeof(data) === "string"){
        return (
            <div>
                <LoadingStatus data={data} />
            </div>
        );
    } else {
        return (
            <div>
                <ContentFromApi data={data} />
            </div>
        );
    }
}