import Link from "next/link"
import Image from "next/image"
import styles from "../styles/header.module.css"

const MainHeader = ()=>{
    return(
    <div>
    <header className={styles.headertop}>
        <div className={styles.headerlineup}></div>
        <div>
            
            <nav>
                <span className={styles.headerlogo}>ADV Studio Logo</span>
                <span className={styles.headermenu}>Sobre mi / About</span>
            </nav>
            
        </div>
        <div className={styles.headerlinedown}></div>
    </header>
    </div>
    )
}

export default MainHeader