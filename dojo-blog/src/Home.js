import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
};

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8002/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;