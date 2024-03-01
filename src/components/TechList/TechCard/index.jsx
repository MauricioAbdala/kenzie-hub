import styles from "./style.module.scss";

export const TechCard = ({ tech }) => {

    return (
        <li className={styles.listBox} >
            <div className={styles.flexbox} >
                <div>
                    <p className="title2">{tech.title}</p>
                </div>
                <div className={styles.paddingbox}>
                    <span className="label gray">{tech.status}</span>
                </div>
            </div>
        </li>
    );
};