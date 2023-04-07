import { Col, Row } from "antd";
import BlogCard from "../../Component/BlogCard/BlogCard"; 
import { Images } from "../../ThemeConfig/Images"; 
import './Home.scss'

const BlogList = [
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  },
  {
    blogThumb: Images.blogThumb,
    title: 'Card Title One',
    description: 'It is a long established fact that a reader will be distracted by the readable content'
  }
]
function Home() {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="blog-list-head">
          <h1>Blog</h1>
        </div>
        <Row gutter={[16, 16]}>
          {BlogList.map((item, i) => {
            return (
              <Col key={i} span={6}>
                <BlogCard
                  cover={item.blogThumb}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            )
          })}
        </Row>
      </div >
    </div>
  );
}

export default Home;
