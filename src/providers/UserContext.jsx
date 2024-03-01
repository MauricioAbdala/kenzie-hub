import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [techs, setTechs] = useState([]);
    const [techsId, setTechsId] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");

        const getUser = async () => {
            try {
                setLoading(true);
                const { data } = await api.get("/profile/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                setTechs(data.techs);
                navigate("/dashboard");
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };
        getUser();
    }, []);

    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("/sessions", formData);
            toast.success("Login realizado com sucesso!", { theme: "dark" });
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            if (error.response?.data.message === "Incorrect email / password combination") {
                toast.error("e-mail e senha não correspondem.", { theme: "dark" })
            }
        } finally {
            setLoading(false);
        };
    };

    const userRegister = async (formData, setLoading) => {
        try {
            setLoading(true);
            await api.post("/users", formData);
            toast.success("Cadastro realizado com sucesso!", { theme: "dark" });
            navigate("/");
        } catch (error) {
            console.log(error);
            if (error.response?.data.message === "Email already exists") {
                toast.error("Usuário já cadastrado", { theme: "dark" });
            }
        } finally {
            setLoading(false);
        };
    };

    const userLogout = () => {
        setUser(null);
        navigate("/")
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@TOKEN");
    };

    return (
        <UserContext.Provider value={{ loading, user, userRegister,techs, setTechs,techsId, setTechsId, userLogin, userLogout }} >
            {children}
        </UserContext.Provider>
    );
};