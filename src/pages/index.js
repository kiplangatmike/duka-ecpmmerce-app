import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Products from "../../components/products";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const req = await fetch(
    `https://fakestoreapi.com/products/category/jewelery`
  );
  const res = await req.json();
  if (!res) {
    return {
      notfound: true,
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  else {
    return { props: { res } };
  }
};
export default function Home({ res }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="font-bold text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-full text-center justify-center p-8 rounded-md">best deals on offer</h1>
        <Products data={res} />
      </main>
    </>
  );
}
