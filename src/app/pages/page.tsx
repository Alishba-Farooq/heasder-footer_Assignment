// pages/index.tsx
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen text-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-lg">This is the homepage content.</p>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
