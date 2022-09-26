import styles from './Frase.module.css'
// styles vai funcionar da mesma forma que a propriedade props

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase</p>
        </div>
    )
}
export default Frase