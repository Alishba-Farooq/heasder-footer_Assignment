// pages/index.tsx
import Layout from './components/Layout';

function HomePage() {
  return (
    <div className='text-center'>
    <Layout>
      <h2 className='text-2xl font-bold mt-7'>Welcome to My Website</h2>
      <p>This is the homepage content.</p>
    </Layout>
    </div>
  );
}

export default HomePage;
