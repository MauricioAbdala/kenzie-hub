import { RegisterForm } from "../../components/forms/RegisterForm";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/Logo.svg";

export const RegisterPage = () => {
    return (
        <main>
            <div>
                <div className={styles.main} >
                    <div className={styles.headerbox}>
                        <img src={logo} alt="logo kenzie hub" />
                        <Link className="link lg" to="/">Voltar</Link>
                    </div>
                    <div className="container sm" >
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </main>
    );
};