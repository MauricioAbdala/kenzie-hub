import { forwardRef } from "react";
import styles from "./style.module.scss";


export const TextArea = forwardRef(({ error, label, ...rest }, ref) => {
    return (
        <>
            <label className="label white" >{label}</label>
            <div className={styles.textBox}>
                <textarea ref={ref} {...rest} />
            </div>
            {error ? <p className={styles.error} >{error.message}</p> : null}
        </>
    );
});