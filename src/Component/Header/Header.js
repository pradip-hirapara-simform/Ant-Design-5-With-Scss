 
import { Link } from "react-router-dom"; 
import { Logo } from "../Icon/index";
import {Container} from "./../Container/Container"
import "./Header.scss"
import { Menu, Select } from "antd";
import { Header } from "antd/es/layout/layout";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "mail",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "app",
  },
];

const PageHeader = (props) => { 
  return (
    <Header className="header">
      <Container>
        <div className="header-inner">
        <Link className="logoBlock" to="/">
          <Logo />
        </Link>
        <Menu className="header-menu" mode="horizontal" items={items} />
        <div className="header-right">
          <Select
            defaultValue={props.themevalue}
            value={props.themevalue}
            style={{ width: 120 }}
            onChange={props.themeChange}
            options={[
              {
                value: "lightmode",
                label: "Light Theme",
              },
              {
                value: "darkmode",
                label: "Dark Theme",
              },
            ]}
          />
        </div>
        </div>  
      </Container>
    </Header>
  );
};

export default PageHeader;
