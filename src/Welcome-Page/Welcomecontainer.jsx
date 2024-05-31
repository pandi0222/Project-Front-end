import { useState } from "react";
import Logincontainer from "../Login-Page/Logincontainer";
import Signupcontainer from "../SignUp-Page/Signupcontainer";

function Welcomecontainer({ setTab }) {

    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    function handleClick() {
        setLogin(true);
    }
    if (login) {
        return <Logincontainer />
    }

    function handleClick2() {
        setSignup(true);
    }
    if (signup) {
        return <Signupcontainer />
    }

    return (
        <div className="welcome-container">
            <div className="welcome-section">
                <h1>WELCOME</h1>
                <p>Are you ready enter the music adventure 🎧</p>
                <br />
                <div>
                    <button onClick={handleClick}>Login</button>
                </div>
                <br />
                <p>Dont't Have An Account ?</p>
                <div onClick={handleClick2}>Sign Up</div>
            </div>
        </div>

    );
}

export default Welcomecontainer;