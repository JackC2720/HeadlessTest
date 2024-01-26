import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchItem } from '../utils/umbracoContentDeliveryApi';

//Setting up a class for the homepage
type Props = {
  header: string,
  bodyText: string,
};

//Defining the homepage function and the properties that need to be passed in.
export default function Index({ header, bodyText }: Props) {

  return (
    //The blank <> tags are shorthand for React.Fragment which wraps the function and defines the block of code as a fragment.
    //They don't get rendered. 
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <h2 className="text-1xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">{header}</h2> 
          
          <div className="tracking-tighter leading-tight md:pr-8" dangerouslySetInnerHTML={{__html: bodyText}}></div>
          
        </Container>
      </Layout>
    </>
  );
}

//Retrives the props from Umbraco
export const getStaticProps = async () => {
  const homepage = await fetchItem('');
  return {
    props: { 
      header: homepage.properties.header,
      bodyText: homepage.properties.bodyText.markup,
     },
  };
};
