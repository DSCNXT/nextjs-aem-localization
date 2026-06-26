import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { AdventureClient } from '../../lib/adventures';
import AdventureCard from '../../components/AdventureCard';
import getPages from '../../lib/getPages';

const { NEXT_PUBLIC_AEM_HOST, NEXT_PUBLIC_AEM_ROOT } = process.env;

export default function Adventures({ adventures, pages }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout pages={pages}>
      <Head>
        <title>Adventures</title>
      </Head>
      <section>
        <div className="bg-white">
          <div className="max-w-2xl px-4 py-10 mx-auto sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              {locale === 'es-MX' && 'Tus próximas aventuras pueden ser una de estas...'}
              {locale === 'pt-BR' && 'Suas próximas aventuras podem ser uma destas...'}
              {locale === 'en-US' && 'Your next adventures can be one of these...'}
            </h2>
            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {adventures.map(
                ({ slug, title, price, tripLength, primaryImage }) => {
                  return (
                    <AdventureCard
                      key={slug}
                      slug={slug}
                      title={title}
                      price={price}
                      duration={tripLength}
                      imageSrc={primaryImage._path}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  const client = AdventureClient.fromEnv();
  const res = await client.getAllAdventures();
  const allAdventures = res?.data?.adventureList?.items || [];

  // Filter by locale — this is the locale-as-metadata model:
  // same query, different filter, no folder path encoding.
  const adventures = allAdventures.filter(a => a.locale === locale);

  const pages = await getPages(NEXT_PUBLIC_AEM_ROOT);
  return {
    props: {
      adventures,
      pages,
    },
  };
}