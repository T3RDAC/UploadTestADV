import Link from "next/link"
import Image from "next/image"
import styles from "../styles/MainMenu.module.css"


const MainMenu = () =>{
    return(
        <div>
        <nav>
            {/* /*el <a><a/> se quita, legacy*/}
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link href="/">
                        Inicio
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/about">
                        Acerca de
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/about/team">
                        Historia
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/content">
                        Contenido
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/content2">
                        Contenido2
                    </Link>
                </li>
            </ul>
      
        </nav>
        
        </div>
    )

}

export default MainMenu