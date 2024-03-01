import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Select = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div>
      <label className="label white">{label}</label>
      <div className={styles.selectBox}>
        <select className="label gray" ref={ref} {...rest}>
          <option value="">Selecione um módulo</option>
          <option value="Primeiro módulo">Primeiro módulo</option>
          <option value="Segundo módulo">Segundo módulo</option>
          <option value="Terceiro módulo">Terceiro módulo</option>
          <option value="Quarto módulo">Quarto módulo</option>
        </select>
      </div>
      {error ? <p className={styles.error}>{error.message}</p> : null}
    </div>
  );
});