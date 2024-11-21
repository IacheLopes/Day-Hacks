import styles from './CreateHack.module.css';
import backgroundImg from '../../assets/create-hack-bg.png';

function CreateHack () {

    return (
        <main>
            <div className={styles.backgroundImg}>
                <img src={backgroundImg} alt="lights" />
            </div>
            <div className={styles.styleForm}>
                <form className={styles.form}>
                    <label className={styles.username}>
                        Seu username
                        <input type="text" name="username" required />
                    </label>
                    <label className={styles.message}>
                        Message
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default CreateHack;