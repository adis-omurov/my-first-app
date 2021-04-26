import { useState } from "react";
import Profile from"./Profile";

const User =() => {
    const [isLoggedIn, setIsLoggedIn] =usestate(false);


    function loginCallback() {
        setIsLoggedIn(!isLoggedIn);
    }


    return (
        <div>
            {isloggedIn ? <profile /> : null}
        </div>
    );
}
export default User;