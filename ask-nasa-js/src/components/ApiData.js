// import React, {useEffect, useState} from 'react';
//
// export default function ApiData(ApiUrl) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     // let urlString = 'https://api.nasa.gov/planetary/apod?api_key=Fuzjtf3URitjt26HFWWQgQqsLVNZTdfBTcVFcMah';
//     // let urlString = 'https://randomuser.me/api/';
//
//     useEffect(() => {
//         fetch(ApiUrl)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 throw response;
//             })
//             .then(data => {
//                 setData(data);
//             })
//             .catch(error => {
//                 console.error("Error fetching data: ", error);
//                 setError(error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//     }, [])
//
//     if (loading) return "Loading...";
//     if (error) return "Error!"
//
//     return data;
// }