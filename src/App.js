import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd"; 
import { useColorConfig } from "./ThemeConfig/UseColorConfig";  
import './global.scss';
import PageLayout from "./Layout/Layout";
import { antDComponents, antDTheme } from "./ThemeConfig/Variables";  
import Home from "./Pages/Home/Home";

function App() {
  const [handleChange, themeColor, themevalue] = useColorConfig();
  return (
    <ConfigProvider
      theme={{
        token: antDTheme(themeColor),
        components: antDComponents(themeColor),
      }}
    >
       
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <PageLayout themeChange={handleChange} themevalue={themevalue} />
              }
            >
              <Route path="/" element={<Home />} /> 
            </Route> 
          </Routes>
        </BrowserRouter> 
    </ConfigProvider>
  );
}

export default App;
