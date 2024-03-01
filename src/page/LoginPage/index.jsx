import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./style.module.scss";
import logo from "../../assets/Logo.svg";

export const LoginPage = () => {
    return (
        <main >
            <div>
                <div className={styles.main}>
                    <img src={logo} alt="logo kenzie hub" />
                    <div className="container sm">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </main>
    );
};