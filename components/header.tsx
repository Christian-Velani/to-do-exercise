import Image from 'next/image';
import rocketImage from "/images/rocket.svg";
import styles from "./header.module.css";

export function Header() {
    return (
        <header
            className={styles.header}>
            <Image className={styles.image}
                src={rocketImage}
                width={22}
                height={36}
                alt='rocket' />
            <p className={styles.preTitle}>to</p>
            <p className={styles.posTitle}>do</p>
        </header>
    )
}