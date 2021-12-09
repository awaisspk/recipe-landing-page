import {Ingredients} from '@components/Ingredients';
import {Intructions} from '@components/Intructions';
import {Layout} from '@components/Layout';
import {PostImage} from '@components/PostImage';
import {PostTitle} from '@components/PostTitle/PostTitle';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Layout footer>
      <article>
        <PostTitle />
        <PostImage />
        <Ingredients />
        <Intructions />
      </article>
    </Layout>
  );
};

export default Home;
