import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import { CreateTechPageModal } from "../../page/CreateTechPageModal";
import styles from "./style.module.scss";

export const TechList = ({ children }) => {
    const { techList } = useContext(TechContext);

    const [isVisible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true);
    };

    const closeModal = () => {
        setVisible(false);
    };

    return (
        <>
            <div className={styles.flexbox}>
                <h2 className="title">Tecnologias</h2>
                <Link className="btn graySm"
                    to="/dashboard"
                    title="adicionar technologia"
                    aria-label="add"
                    onClick={openModal}
                ><span
                    className={styles.span}
                >+</span></Link>
            </div>
            <div className={styles.container}>
                <ul >
                    {techList.map(tech => (
                        <TechCard key={tech.id} tech={tech.techs} />
                    ))}
                </ul>
                {isVisible && <CreateTechPageModal isVisible={isVisible} closeModal={closeModal} />}
                {children}
            </div>
        </>
    );
};