import useAuth from "../../../Hooks/useAuth";
import { FaMoneyBillTrendUp, FaUsers } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: adminStatsData = [] } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["orderStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStats");
      return res.data;
    },
  });

  const pieChartData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

  return (
    <div className="p-16">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold">
          Hi, Welcome {user?.displayName ? user?.displayName : "back"}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <FaMoneyBillTrendUp className="text-4xl text-white" />
            <div>
              <p className="text-3xl font-bold text-white">
                ${adminStatsData.revenue?.toFixed(2)}
              </p>
              <p className="text-2xl font-medium text-white">Revenue</p>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <FaUsers className="text-4xl text-white" />
            <div>
              <p className="text-3xl font-bold text-white">
                {adminStatsData.users}
              </p>
              <p className="text-2xl font-medium text-white">Customers</p>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <AiOutlineProduct className="text-4xl text-white" />
            <div>
              <p className="text-3xl font-bold text-white">
                {adminStatsData.menuItems}
              </p>
              <p className="text-2xl font-medium text-white">Products</p>
            </div>
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] flex justify-center">
          <div className="flex justify-center items-center gap-2 ">
            <LiaShippingFastSolid className="text-4xl text-white" />
            <div>
              <p className="text-3xl font-bold text-white">
                {adminStatsData.paymentCount}
              </p>
              <p className="text-2xl font-medium text-white">Orders</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border mt-12">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
