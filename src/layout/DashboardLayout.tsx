import { Outlet } from "react-router-dom";
import DashboardSidebar from "../module/DashboardSidebar";
import Layout from "../components/layout";

const DashboardLayout = () => {
  return (
    <Layout>
      <div className="p-3">
        {/* <button
          style={{
            padding: "10px",
            height: "40px",
            fontSize: "14px",
            color: "#FFFFFF",
            background:
              "linear-gradient(107.61deg, #00A7B4 15.59%, #A4D96C 87.25%)",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Write a new post
        </button> */}
      </div>
      <div className="min-h-screen p-10 bg-lite">
        <div className="flex items-start gap-x-10">
          <DashboardSidebar></DashboardSidebar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
