import "./Home.css";
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes,Router} from 'react-router-dom';
import axios from 'axios';
import WebFont from 'webfontloader';

const baseURL = "https://jsonplaceholder.typicode.com/posts"


function Home() {
    const [post,setPost] = useState(null);
    const [count,setCount] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            //console.log(response.data);
          })
    });

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Chakra Petch']
          }
        });
       }, []);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
      }


    const showMore = () => {
        setCount(count+5)
      }
    if(!post) return <div className="search"></div>;
    return(
        <>
        <div className="search">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={handleChange} />
        </div>
        <div className="container" style={{fontFamily: 'Chakra Petch'}}>
        {(() => {
              if(searchQuery===""){
                return (
                    <div className="container" style={{fontFamily: 'Chakra Petch'}}>
                        <div className="content">
                            {post.slice(0,count).map((item, index) => (
                                  <Link to="/BlogDetails"state={{id: {item}}}>{item.title}<br/><br/></Link>
                            )
                            )}
                            <br></br>
                        <div className="showMore">
                            <button id="myButton" onClick={showMore}>แสดงเพิ่มเติม</button>
                        </div>
                        </div>
                    </div>
                );
            }else{
                for (let i = 0; i < post.length; i++){
                    if(post[i].title.toLowerCase()===searchQuery.toLowerCase()){
                        const item = post[i];
                        return (
                            <div className="container" style={{fontFamily: 'Chakra Petch'}}>
                                <div className="content">
                                <Link to="/BlogDetails"state={{id: {item}}}>{item.title}</Link>
                                    <br></br>
                                </div>
                                <div className="showMore">
                                </div>
                            </div>
                        );
                    }
                }

            }
            })()} 
        </div>


        </>
    );
}

export default Home;
