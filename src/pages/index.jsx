import { Games } from "~components/pages";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <Games />
    </>
  );
}
