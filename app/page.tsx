import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import prisma from '../lib/prisma';
import Link from 'next/link'
import LoginBtn from "../components/login-btn";

const inter    = Inter({ subsets: ['latin'] })
const products = await prisma.product.findMany();

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          <li>Hello World</li>
          {
            products.map((product) => (
              <li>{product.title}</li>
            ))
          }
          <li>Goodbye World</li>
        </ul>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Link href="https://github.com/fabioaraujo121" target="_blank">
              <code className={styles.code}>
                fabioaraujo121
              </code>
            </Link>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <Link
          href="/about"
          className={styles.card}
        >
          <h2 className={inter.className}>
            O que é? <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Qual o objetivo e como funciona?
          </p>
        </Link>
        <LoginBtn />

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            <LoginBtn />
          </h2>
          <p className={inter.className}>
            Economize mais de 15% do gasto com alimentação. (TODO: Melhorar CTA)
          </p>
        </Link>
      </div>
    </main>
  )
}
