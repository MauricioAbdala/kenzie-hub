import { MdClose } from "react-icons/md";
import { Input } from "../../components/forms/Input";
import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { Link } from "react-router-dom";


export const CreateTechPageModal = ({ isVisible, closeModal }) => {

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit } = useForm();

    const { createTech } = useContext(TechContext);

    const submit = (formData) => {
        setLoading(true);
        createTech(formData, setLoading)
        .finally(() => setLoading(false));
    };



    console.log(createTech);
    return (
        <>
            {isVisible && (
                <form onSubmit={handleSubmit(submit)} className={styles['modal-overlay']}>
                    <div className={styles.containerBox}>
                        <div className={styles.flexbox} >
                            <h2 className="title2">Cadastrar Tecnologia</h2>
                            <Link to="/dashboard" onClick={() => closeModal()} ><MdClose className={styles.iconX} size={21} /></Link>
                        </div>
                        <div className="container modal">
                            <Input className="label white"
                                label="Nome"
                                placeholder="Digite sua technologia"
                                {...register("title")}
                            />
                            <label className="label white" htmlFor="status">Selecionar status</label>
                            <div className={styles.selectBox}>
                                <select className="label white" id="status" {...register("status")}>
                                    <option value="">Selecione seu nível</option>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                            </div>

                            <div >
                                <button
                                    className="btn pink"
                                    type="submit"
                                    disabled={loading}>
                                    {loading ? "Cadastrando..." : "Cadastrar"}
                                </button>

                            </div>

                        </div>
                    </div>
                </form>
            )}
        </>
    );
};
