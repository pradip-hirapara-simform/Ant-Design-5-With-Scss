import { CustomeCard } from "../Card/Card"; 
import "./BlogCard.scss";
 

function BlogCard(props) {
  const { cover, title, description } = props;
  return (
    <CustomeCard hoverable cover={<img alt="example" src={cover} />}>
      <div className="blog-card-title">{title}</div>
      <div className="blog-card-info">{description}</div>
    </CustomeCard>
  );
}
export default BlogCard;