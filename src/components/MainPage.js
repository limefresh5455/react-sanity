import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import RecentBlog from './RecentBlog';
// import SideBlog from './SideBlog';
import blogService from './../services/blogService';
import '../assets/css/style.css';
import Pagination from "./Pagination";
import Posts from "./Posts";
// import Image from 'react-bootstrap/Image';


function MainPage() {

  const [allPostsData, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
      new blogService().getAllPostData().then(data => {
        setAllPosts(data)
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = allPostsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <main>
        {/* <header className="Hero Hero--philosophy"> */}
          {/* <figure className="Hero__background"><Image fluid src={process.env.PUBLIC_URL+'/images/banner.jpg'} alt=""/></figure> */}
          {/* </header> */}
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col text-center">
              <h1 className="mt-4 teamhead">Perspectives</h1>
              <p className="mt-4">Insights from Arcadea</p>
              </div>
            </div>
          </div>
    </main>
    <section className="blogsection">
        {/* <div className="container">
          <div className="row d-flex justify-content-center mb-5 pt-5">
          <div className="col-12">
              <p className="welcometext"></p>
          </div>
        </div>
        </div> */}
          <div className="container mb-5">
            {/* <div className="row justify-content-center">
              <div className="topMenu">
                  <ul>
                    <li><Link to="#">News & Strategy</Link></li>
                    <li><Link to="#">Tactics & Selling</Link></li>
                    <li><Link to="#">Transacting</Link></li>
                    <li><Link to="#">Perspectives</Link></li>
                    <li><Link to="#">Operators Circle</Link></li>
                  </ul>
              </div>
            </div> */}
            <div className="row">
              <div className="col-12 col-md-12">
                <Posts posts={currentPosts} loading={loading} />
                  <div className="col-12">
                    <div className="blog-pager container pagination-wrapper" id="blog-pager">
                      <Pagination
                          paginate={paginate}
                          postsPerPage={postsPerPage}
                          totalPosts={allPostsData.length}
                      />
                    </div>
                  </div>
              </div>            
            </div>
          </div>
          {/* <RecentBlog/> */}
        </section>  
    </>
  );
}

export default MainPage;
