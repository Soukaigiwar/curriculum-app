import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            localStorage.setItem("@curriculum:user", JSON.stringify(user));
            localStorage.setItem("@curriculum:token", token);

            setData({ user, token });

            api.defaults.headers.common["authorization"] = `Bearer ${token}`;

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            }
            else {
                alert("Login error.");
            };
        };
    };

    function signOut() {
        localStorage.removeItem("@curriculum:user");
        localStorage.removeItem("@curriculum:token");

        setData({});
    };

    async function updateProfile({ user }) {
        try {
            await api.put("/users", user);
            localStorage.setItem("@curriculum:user", JSON.stringify(user));

            setData({ user, token: data.token });
            console.log("updated profile");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            }
            else {
                alert("Login error.");
            };
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@curriculum:token");
        const user = localStorage.getItem("@curriculum:user");

        if (token && user) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        };
     }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
        }}>
            {console.log(AuthContext.data)}
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
};

export { AuthContext, AuthProvider, useAuth };
