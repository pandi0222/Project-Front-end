import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Section2() {
    const [auth, setAuth] = useContext(AuthContext);
    return (
        <div className="section-02">
            <p>User Name</p>
            <br />
            <p>Your Content Line 1</p>
            <p>Your Content Line 2</p>
            <p>Add Some Emoji</p>
            <p># Your Tag 01 # Your Tag 02</p>
            <button className="sec2btn">Edit</button>
            <button className="sec2btn" onClick={() => setAuth(false)}>Log Out</button>
        </div>

    );
}

export default Section2;