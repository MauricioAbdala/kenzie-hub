import IconLoad from "../../assets/IconLoading.svg";
import styles from "./style.module.scss";

export const Loading = () => {
    return (
        <div className={styles.loadingBox}>
            <img src={IconLoad} alt="Carregando..." />
        </div>
    );
};