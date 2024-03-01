import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

import { NewTechCard } from "../NewTechCard";

export const NewTechList = () => {
    const { newTechList } = useContext(TechContext);

    return (

        <ul>
            {newTechList.map((tech) => (
                <NewTechCard key={tech.id} tech={tech} />
            ))}
        </ul>
    );
};

