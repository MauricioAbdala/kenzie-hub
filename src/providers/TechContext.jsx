import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { user, techs, setTechs, techsId } = useContext(UserContext)

    const [techList, setTechList] = useState([]);
    const [newTechList, setNewTechList] = useState([]);
    const [editingTech, setEditingTech] = useState("");


    const navigate = useNavigate();

    useEffect(() => {
        const storedTechStorage = JSON.parse(localStorage.getItem("techStorage"));
        if (storedTechStorage) {
            setNewTechList(storedTechStorage.newTechList);
        }
    }, []);

    // useEffect(() => {
    //     const getTechs = async () => {
    //         try {
    //             const { data: reactUsers } = await api.get("/users?perPage=1&page=1&tech=ReactJS");
    //             const { data: nextUsers } = await api.get("/users?perPage=1&page=1&tech=Next JS");
    //             const { data: vueUsers } = await api.get("/users?perPage=1&page=1&tech=Vue");
    //             const { data: htmlUsers } = await api.get("/users?perPage=1&page=1&tech=HTML");
    //             const usersWithDifferentTechnologies = [...reactUsers, ...nextUsers, ...vueUsers, ...htmlUsers];


    //             setTechList(usersWithDifferentTechnologies);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getTechs();
    // }, []);


    const createTech = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            // const newTech = {
            //     title: user.title,
            //     status: user.status,
            //     techs: user.id,
            //     ...formData
            // };

            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            const updatedTechList = [...newTechList, data];

            setNewTechList(updatedTechList);

            const updatedTechStorage = {
                token: token,
                newTechList: updatedTechList,
            };

            localStorage.setItem("techStorage", JSON.stringify(updatedTechStorage));

            navigate("/dashboard")

        } catch (error) {
            console.log(error);
        };
    };

    const editTech = async (formData) => {

        console.log(editTech);
        try {
            const token = localStorage.getItem("@TOKEN");
            await api.put(`/users/techs/${techsId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const getTechEdit = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const updat = getTechEdit.data.tech.id;
            setNewTechList(updat);
            // const updatedTechList = newTechList.map(tech => {

            //     if (tech.data.techs.id === newTechList.id) {
            //         return data;
            //     } else {
            //         return tech;
            //     }
            // })

            // setNewTechList(updatedTechList);
            // setEditingTech(null);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
        console.log(editTech);
    };


    const deleteTech = async (deletingId) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            // console.log("Deleting tech with ID:", deletingId);

            await api.delete(`/users/techs/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const updatedTechList = newTechList.filter(tech => tech.id !== deletingId);

            setNewTechList(updatedTechList);

            const updatedTechStorage = {
                token: token,
                newTechList: updatedTechList,
            };

            localStorage.setItem("techStorage", JSON.stringify(updatedTechStorage));

        } catch (error) {
            console.log(error);

        };
    };

   


    return (
        <TechContext.Provider value={{ techList, newTechList, createTech, deleteTech, editTech, editingTech, setEditingTech }}>
            {children}
        </TechContext.Provider>
    );
};