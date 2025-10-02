import { useRef } from "react";

const UnControlledForm = () => {
    const inputRef = useRef(null)

    const inputSubmit = (event) => {
        event.preventDefault();
        alert('Age entered: ' + inputRef.current.value);
    };

        return (
        <form onSubmit={inputSubmit}>
            <label>Age:
                <input type="number" ref={inputRef}></input>
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default UnControlledForm;