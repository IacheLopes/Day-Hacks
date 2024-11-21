import styles from './HackList.module.css';

function HackList (){

    return(
        <main className={styles.main}>
            <div className={styles.content}>    
                <div className={styles.topHacks}>
                    <div className={styles.hacksContainer}>
                        <h1>Top 1 hack</h1>

                        <p>Don t spend hours designing and building your landing page. Use a tool like https://www.daisylanding.com. With this app, I can get 95% of my landing page built in minutes. Plus, it is already responsive.</p>
                        <div>
                            <span className="">By lublubxt 3 days ago</span>
                            <button><span><img src="../../assets/like.svg" alt="like" /></span></button>
                        </div>
                    </div>

                    <div className={styles.hacksContainer}>
                        <h1>Top 2 hack</h1>

                        <p>Don t spend hours designing and building your landing page. Use a tool like https://www.daisylanding.com. With this app, I can get 95% of my landing page built in minutes. Plus, it is already responsive.</p>
                        <div>
                            <span className="">By lublubxt 3 days ago</span>
                            <button><span><img src="../../assets/liked.svg" alt="like" /></span></button>
                        </div>
                    </div>

                    <div className={styles.hacksContainer}>
                        <h1>Top 3 hack</h1>

                        <p>Don t spend hours designing and building your landing page. Use a tool like https://www.daisylanding.com. With this app, I can get 95% of my landing page built in minutes. Plus, it is already responsive.</p>
                        <div>
                            <span className="">By lublubxt 3 days ago</span>
                            <button><span><img src="../../assets/like.svg" alt="like" /></span></button>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.backgroundImg}>
                    <img src="../../assets/background-lights.png" alt="backgroundLights" />
                </div>
            </div> 

        </main>
    )
}

export default HackList;
