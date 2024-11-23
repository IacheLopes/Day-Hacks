import styles from "./CreateHack.module.css";

function CreateHack() {
  return (
    <body className={styles.createHack}>
      <main>
        <div className={styles.styleForm}>
          <form className={styles.form}>
            <label className={styles.username}>
              Seu username
              <input
                className={styles.inputStyle}
                type="text"
                name="username"
                placeholder="Exemplo: Jubileu"
                required
              />
            </label>
            <label className={styles.message}>
              Message
              <textarea
                type="text"
                className={styles.inputStyle}
                name="message"
                placeholder="Digite seu truque"
                maxLength={250}
                required
              ></textarea>
            </label>
            <button className={styles.submitBtn} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </main>
    </body>
  );
}

export default CreateHack;
