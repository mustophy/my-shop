import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


export const CustomPieChart = ({ width = 100, inner, outer }) => {
    const data = [
        { name: "Group B", value: 300 },
        { name: "Group A", value: 400 },
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <ResponsiveContainer height="100%">
            <PieChart>
                <Pie
                    data={data}
                    innerRadius={inner}
                    outerRadius={outer}
                    fill="none"
                    paddingAngle={undefined}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}


export const SemiPieChart = () => {
    return (
        <PieChart width={800} height={400}>
            <Pie
                data={data}
                cx={420}
                cy={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}
