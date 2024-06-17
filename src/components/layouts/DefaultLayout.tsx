import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { Row,Col } from "antd";
// import Sider from "../Sider";

const DefaultLayout = () => {
  console.log("DefaultLayout");
  return (
    <div className=" bg-customColor">
          <Header/>
    <Row >
      <Col span={3}  style={{ position: 'sticky', top: 0 }}>         
        <Sidebar/>
      </Col>

      <Col span={18}>
    {/* Body content */}
    <main >
        {/* Nội dung các trang sẽ load lên ở đây */}
        <div className="container ">
            <Outlet/>
        </div>
    </main>
      </Col>
    </Row>
    <Footer />
</div>
  )
}

export default DefaultLayout
