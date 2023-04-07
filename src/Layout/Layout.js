import PageHeader from "../Component/Header/Header"; 
import {
    Outlet,
  } from "react-router-dom";
import Layout from "antd/es/layout/layout";

function PageLayout(props) {
    return (
      <Layout className="page-wrapper">
        <PageHeader themeChange={props.themeChange} themevalue={props.themevalue}/>
        <Layout className="body-wrapper">
            <Outlet />
        </Layout>
      </Layout>
    );
  }

export default PageLayout