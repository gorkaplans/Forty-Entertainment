import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>whitemoose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'fixed',
          width: '100dvw',
          height: '100dvh',
          top: 0,
          left: 0,
        }}
      ></main>
    </div>
  )
}
