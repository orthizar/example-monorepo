import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Monorepo test</h1>
      <h2 className={styles.subtitle}>Project 2</h2>
    </main>
  )
}
