import styles from './HackList.module.css';
import likedIcon from '../../assets/liked.svg';
import likeIcon from '../../assets/like.svg';



function HackList (){

    return(
        <main className={styles.main}>
            <div className={styles.content}>    
                <div className={styles.topHacks}>
                    <div className={styles.hacksContainer}>
                        <h1>Top 1 hack</h1>

                        <p>Criar algo significativo não precisa ser complicado ou demorado. Com as ferramentas certas e um pouco de dedicação, é possível alcançar resultados incríveis em menos tempo. O segredo está em manter o foco e usar recursos 86123546312461234123578621458</p>
                        <div>
                            <span className="">By lublubxt 3 days ago</span>
                            <button><span><likeIcon /></span></button>
                        </div>
                    </div>

                    <div className={styles.hacksContainer}>
                        <h1>Top 2 hack</h1>

                        <p>Don t spend hours designing and building your landing page. Use a tool like https://www.daisylanding.com. With this app, I can get 95% of my landing page built in minutes. Plus, it is already responsive.</p>
                        <div>
                            <span className="">By lublubxt 3 days ago</span>
                            <button><span><img src={likedIcon} alt="like" /></span></button>
                        </div>
                    </div>

                    <div className={styles.hacksContainer}>
                        <h1>Top 3 hack</h1>

                        <p>Don t spend hours designing and building your landing page. Use a tool like https://www.daisylanding.com. With this app, I can get 95% of my landing page built in minutes. Plus, it is already responsive.</p>
                        <div>
                            <span className="">By lublubxt 3 days ago</span>
                            <button><span><img src={likeIcon} alt="like" /></span></button>
                        </div>
                    </div>
                    
                </div>
            </div> 

        </main>
    )
}

export default HackList;
