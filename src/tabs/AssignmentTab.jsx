import { useEffect, useState } from "react";
import { ClipboardList, Clock, CheckCircle } from "lucide-react";

const StatisticsSection = () => {
  const [stats, setStats] = useState({
    totalAssignments: 0,
    pendingAssignments: 0,
    completedAssignments: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch all assignments
        const allResponse = await fetch("https://group-study-zeta.vercel.app/allassignments", {
          credentials: "include", // Ensures cookies are sent for authentication
        });
        const allAssignments = await allResponse.json();

        // Fetch pending assignments
        const pendingResponse = await fetch("https://group-study-zeta.vercel.app/pendingassignment", {
          credentials: "include",
        });
        const pendingAssignments = await pendingResponse.json();

        // Calculate statistics
        const totalAssignments = allAssignments.length;
        const pendingCount = pendingAssignments.filter(a => a.status === "pending").length;
        const completedCount = pendingAssignments.filter(a => a.status === "completed").length;

        // Update state
        setStats({
          totalAssignments,
          pendingAssignments: pendingCount,
          completedAssignments: completedCount,
        });
      } catch (error) {
        console.error("Error fetching assignment stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="mx-4 bg-gray-900 rounded-lg md:mx-6 py-8 mt-4 text-white">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Assignment Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<ClipboardList className="w-12 h-12 text-blue-400" />}
            title="Total Assignments"
            value={stats.totalAssignments}
          />
          <StatCard
            icon={<Clock className="w-12 h-12 text-yellow-400" />}
            title="Pending Assignments"
            value={stats.pendingAssignments}
          />
          <StatCard
            icon={<CheckCircle className="w-12 h-12 text-green-400" />}
            title="Completed Assignments"
            value={stats.completedAssignments}
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="flex flex-col items-center p-6 bg-[#0f172a] shadow-lg rounded-2xl border border-gray-700 hover:scale-105 transition-transform duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-300 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-gray-200">{value}</p>
  </div>
);

export default StatisticsSection;
