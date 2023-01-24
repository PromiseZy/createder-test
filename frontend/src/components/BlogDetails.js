import { useLocation } from "react-router-dom";
import { Link} from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const data = location.state.id.item;
  console.log(location);
  return (
    <>
    <div className="container" style={{fontFamily: 'Chakra Petch'}}>
      <div className="content">
        <h1>{data.title}</h1>
        <h4>{data.body}</h4>
        <br></br>
        <Link to="/">
          <button>กลับหน้าหลัก</button>
        </Link>
      </div>
    </div>
      
    </>
  );
};
export default BlogDetails;
