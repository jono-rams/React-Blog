import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
};

  useEffect(() => {
    fetch('http://localhost:8002/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;