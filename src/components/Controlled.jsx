import { useState } from "react";

function ControlledInput () {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('+380');


        const inputSubmit = (event) => {
        event.preventDefault();
        console.log('Name entered:', name );
        console.log('Password entered:', password);
        console.log('Phone entered:', number);
        if (!name || !password || !number) {
            alert('Fill in your personal information if you want to enroll in an English course.')
        }
            else {
                alert('Welcome to the english course')
            }

    };


    return (
        <form onSubmit={inputSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <label>Number:</label>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <button type="submit">Send</button>
        </form>



    );
}


export default ControlledInput



