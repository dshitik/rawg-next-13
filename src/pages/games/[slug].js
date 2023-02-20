import { fetchGameDetails } from "~api";
import { Game } from "~components/pages";
import Head from "next/head";

const GamePage = ({ gameDetails }) => {
  return (
    <>
      <Head>
        <title>{gameDetails.name}</title>
      </Head>
      <Game details={gameDetails} />;
    </>
  );
};

export async function getServerSideProps({ params }) {
  const gameDetails = await fetchGameDetails({ slug: params.slug });

  return {
    props: {
      gameDetails,
    },
  };
}

export default GamePage;
