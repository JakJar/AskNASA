// import React, {useState} from 'react';
// import TodayDateString from "./TodayDateString";
//
// export default function DatePicker() {
//     const [input, setInput] = useState(TodayDateString());
//
//     return (
//         <form
//             onSubmit={e => {
//                 e.preventDefault();
//                 console.log(input);
//             }}>
//             <label>
//                 Search APOD by date:
//                 <br/>
//                 <input
//                     type="date"
//                     value={input}
//                     onChange={e => {
//                         setInput(e.target.value);
//                     }}
//                 />
//             </label>
//             <button type="submit">
//                 Submit
//             </button>
//         </form>
//     );
// }