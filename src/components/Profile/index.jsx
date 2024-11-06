import styles from './styles.module.css'

export default function Profile(props){
    return(
        <div className={styles.bloco}>
            <img src={props.img} />
            <h1 className={styles.name}>{props.name}</h1>
            <hr className={styles.primeiro}/>
            <p className={styles.bio} >{props.bio}</p>
            <hr className={styles.segundo}/>
            <p className={styles.contact}>{props.contact}</p>
            <hr className={styles.terceiro} />
            <p className={styles.email}>{props.email}</p>
            <hr className={styles.quarto}/>
            <button><a href={props.githubUrl}>Github</a></button>
            <button><a href={props.instagramUrl}>Instagram</a></button>
            <button><a href={props.letterboxdUrl}>Letterboxd</a></button>
        </div>
    )
}
