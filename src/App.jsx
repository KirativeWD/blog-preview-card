import blogData from './data/blogData.json';
import ArticlePreview from './components/ArticlePreview';
import './App.css';

function App() {

  return (
    <main>
      <ArticlePreview blogData={blogData} />
    </main>
  )
}

export default App
