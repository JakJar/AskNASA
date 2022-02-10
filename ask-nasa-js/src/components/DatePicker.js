import React from 'react';

export default function DatePicker( { inputDate, handleDateChange, handleSubmit } ) {
    return (
        <form
            onSubmit={handleSubmit}>
            <label>
                Search APOD by date:
                <br/>
                <input
                    type="date"
                    value={inputDate}
                    onChange={handleDateChange}
                />
            </label>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}