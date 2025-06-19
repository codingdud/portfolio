import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Docs from './pages/Docs';
import DocPost from './pages/DocPost';


function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/docs/" element={<Docs />} />
          <Route path="/docs/:slug" element={<DocPost />} />
        </Route>
      </Routes>
  );
}

export default App;