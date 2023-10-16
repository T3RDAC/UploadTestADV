import Link from "next/link" 
import Image from "next/image"
import styles from "../styles/MainNav.module.css"
import { Space_Mono } from "next/font/google"

const MainNav = () =>{
    return(
  
        <div>
            <nav className={styles.navmain}>
                {/* /*el <a><a/> se quita, legacy*/}
                <ul className={styles.ulmain}>
                    Proyectos
                    <li className={styles.limain}>     <Link href="/#">
                    ADV Studio
                    </Link>    <span><Image className = {styles.liIcon}
                    src="/icon/warning.png" rel="preload" alt="icono"  width = "16" height = "16" 
                    />  </span>
                    </li>
                    <li className={styles.limain}>     <Link href="/#">
                    Galeria 
                    </Link>    <span><Image className = {styles.liIcon}
                    src="/icon/warning.png" rel="preload" alt="icono" width = "16" height = "16"
                    />  </span>
                    </li>
                    <li className={styles.limain}>     <Link href="/#">
                    CNC 5
                    </Link>    <span><Image className = {styles.liIcon}
                    src="/icon/warning.png" rel="preload" alt="icono" width = "16" height = "16"
                    />  </span>
                    </li>
                    <li className={styles.limain}>     <Link href="/formulario">
                    Formulario
                    </Link>    <span><Image className = {styles.liIcon}
                    src="/icon/warning.png" rel="preload" alt="icono" width = "16" height = "16"
                    />  </span>
                    </li> 
                    <li className={styles.limain}>     <Link href="/potencias">
                    Calculo de Potencias
                    </Link>    <span><Image className = {styles.liIcon}
                    src="/icon/warning.png" rel="preload" alt="icono" width = "16" height = "16"
                    />  </span>
                    </li>                
                </ul>
            </nav>
        </div>
  
    )

}

export default MainNav