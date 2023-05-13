import Layout from "component/Layout";
import dynamic from "next/dynamic";

import A from "component/Layout/Screen";
const DynamicScreen = dynamic(() => import("component/Layout/Screen"), {
  ssr: false,
  loading: () => <p>Load the method...</p>,
});

const Dashboard = () => {
  return <p>Fandy</p>;
};

Dashboard.layout = Layout;
export default Dashboard;
