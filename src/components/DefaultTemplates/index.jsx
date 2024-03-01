import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "../../page/DashBoardPage/style.module.scss";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <main className={styles.containerlg}>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
};