import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [reletedBlogs, setReletedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
  const blogId = location.pathname.split("/").at(-1);

  async function fetchReleatedBlogs() {
    setLoading(true);
    const url = `${baseUrl}?blogId=${blogId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlog(data.blog);
      setReletedBlogs(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setReletedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchReleatedBlogs();
  }, [location.pathname]);

  return (
    <div className="my-[100px]">
      <Header />
      <div className="w-11/12 mx-auto">
        <div className="mr-auto max-w-max flex flex-col">
          <button className="border-2 border-gray-300 py-1 px-4 rounded-md mb-6" onClick={() => navigate(-1)}>Back</button>

        </div>
        <div>
          {loading ? (
            <Spinner />
          ) : blog ? (
            <div  className="w-10/12 mx-auto">
              <BlogDetails post={blog} />
              <h2 className="text-2xl font-bold my-10">Releated Blogs</h2>
              <div className="flex flex-col gap-y-8">
                {reletedBlogs.map((post) => (
                  <div key={post.id} >
                    <BlogDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No Blog Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;