import React from "react"
import Image from "next/image"
import styles from "@/styles/NavBar.module.css"


export default function NavBar() {
    return (
        <>
            <div className={styles.nav}>
                <Image
                    src="/img/logo top 2.png"
                    alt="logo-jon"
                    width={180}
                    height={39}
                />
            </div>
        </>
    )
}