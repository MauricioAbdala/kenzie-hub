import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "../Input/style.module.scss";
import style from "./style.module.scss";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            <div className={styles.inputBox}>
                <label className="label white">{label}</label>
                <div className={styles.inputGrid}>
                    <input type={isHidden ? "password" : "text"} placeholder="DIgite aqui sua senha" ref={ref} {...rest} />
                    <button type="button" onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? <MdVisibility className={`${style.visibilityOff}`} /> : <MdVisibilityOff className={`${style.visibilityOn}`} />}
                    </button>
                </div>

            </div>
            <button className="btn pink" type="submit">Entrar</button>
            {error ? <p className={styles.error} >{error.message}</p> : null}
        </div>
    );
});
