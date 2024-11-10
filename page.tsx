
import Counter from '../components/Counter';
import ProjectDescription from '../components/ProjectDescription';
import ProductSearch from '../components/ProductSearch';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js Project</h1>
      <Counter increment={1} />
      <Counter increment={2} />
      <ProjectDescription />
      <ProductSearch />
    </div>
  );
}
