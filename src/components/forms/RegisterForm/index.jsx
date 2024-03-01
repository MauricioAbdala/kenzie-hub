import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Select } from "../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../providers/UserContext";


export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    });


    const [loading, setLoading] = useState(false);

    const {userRegister} = useContext(UserContext);
    

    const submit = (formData) => {
        userRegister(formData, setLoading);
    };


    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={styles.boxheader}>
                <h2 className="title">Crie sua conta</h2>
                <p className="label gray">Rapido e grátis, vamos nessa</p>
            </div>
            <Input
                label="Nome"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                {...register("name")}
                error={errors.name}
                disabled={loading} />

            <Input
                label="Email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={errors.email}
                disabled={loading} />

            <Input
                label="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                error={errors.password}
                disabled={loading} />

            <Input
                label="Confirmar sua senha"
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                disabled={loading} />

            <TextArea
                label="Bio"
                id="bio"
                placeholder="Fale sobre você"
                {...register("bio")}
                error={errors.bio}
                disabled={loading} />

            <Input
                label="Contato"
                type="text"
                placeholder="Opção de contato"
                {...register("contact")}
                error={errors.contact}
                disabled={loading} />

            <Select
                label="Selecionar módulo"
                id="course_module"
                {...register("course_module")}
                error={errors.course_module}
                disabled={loading} />
            <div>
                <button
                    className="btn pinkdisable"
                    type="submit"
                    disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </div>
        </form>
    );
};