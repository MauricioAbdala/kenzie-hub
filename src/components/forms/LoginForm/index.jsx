import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPassword";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import styles from "./style.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";


export const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(loginFormSchema)
    });

    const [loading, setLoading] = useState(false);

    const { userLogin } = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData, setLoading, reset);
    };


    return (
        <form onSubmit={handleSubmit(submit)} >
            <div className={styles.boxheader}>
                <h2 className="title">Login</h2>
            </div>
            <Input
                label="Email"
                type="email"
                placeholder="mauricio@kenzie.com.br"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />

            <InputPassword
                label="Senha"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />
            <div>
                <p className="label gray center" >Ainda não possui uma conta?</p>
                <Link className="btn gray" to="/register">Cadastre-se</Link>
            </div>
        </form>
    );
};