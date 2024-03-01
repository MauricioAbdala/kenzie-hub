import { useContext, useState } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";
import IconEdit from "../../../assets/IconEdit.svg";
import IconTrash from "../../../assets/IconTrash.svg";
import { EditTechPageModal } from "../../../page/EditTechPageModal";
import { Link } from "react-router-dom";


export const NewTechCard = ({ tech }) => {


    const [isVisible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true);
        console.log("Modal should open now.");

    };

    const closeModal = () => {
        setVisible(false);
    };

    const { deleteTech, setDeletingTech, setEditingTech } = useContext(TechContext);

    

    return (
        <li className={styles.listBox} >
            <div className={styles.flexbox} >
                <div>
                    <p className="title2">{tech.title}</p>
                </div>
                <div className={styles.paddingbox}>
                    <span className="label gray">{tech.status}</span>
                    <button
                        to="/dashboard"
                        title="Editar technologia"
                        aria-label="edit"
                        onClick={openModal}
                    ><img src={IconEdit} />
                    </button>
                    <button onClick={() => deleteTech(tech.id)} title="Remover technologia" aria-label="remove">
                        <img src={IconTrash} />
                    </button>
                </div>
                {isVisible && <EditTechPageModal isVisible={isVisible} closeModal={closeModal} setEditingTech={setEditingTech}  />}
            </div>
        </li>
    );
};