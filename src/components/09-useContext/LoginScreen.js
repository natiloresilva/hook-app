import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {

    const { setUser, user } = useContext(UserContext)

    return (
        <>
            <h1>Login Screen</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className='btn btn-primary'
                onClick={() => setUser({
                    id: 123,
                    name: 'Galileo',
                    email: 'gali@gmail.com'
                })}
            >
                Login
            </button>
        </>
    );
};
