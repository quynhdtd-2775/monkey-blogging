import { Outlet } from "react-router-dom";
import DashboardSidebar from "../module/DashboardSidebar";
import Layout from "../components/layout";

const DashboardLayout = () => {
  return (
    <Layout>
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
