import PageTitle from "../PageTitle";
import StatCard from "./StatCard";

interface StatItem {
  total: number
  active: number
  inactive: number
  label: string
  percentageChange: number
}

interface StatsData {
  students: StatItem
  teachers: StatItem
  staff: StatItem
  subjects: StatItem
}


const AdminDashboard = () => {
  const stats: StatsData = {
    students: {
      total: 3654,
      active: 3643,
      inactive: 11,
      label: "Students",
      percentageChange: 1.2,
    },
    teachers: {
      total: 284,
      active: 254,
      inactive: 30,
      label: "Teachers",
      percentageChange: 1.3,
    },
    staff: {
      total: 162,
      active: 161,
      inactive: 2,
      label: "Staff",
      percentageChange: 1.2,
    },
    subjects: {
      total: 82,
      active: 81,
      inactive: 1,
      label: "Subjects",
      percentageChange: 1.2,
    },
  }
  return (
    <div>
      <PageTitle heading={"Dashboard"} />


      <div className="min-h-screen bg-gray-50">
        <div className="navbar-bg-color p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome Back, Mr. Sabid Farhan</h1>
              <p className="mt-1 text-gray-300">Have a Good day at work</p>
            </div>
            <div className="text-sm text-gray-300">
              Updated Recently on 15 Jun 2024
            </div>
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard data={stats.students} type="students" />
            <StatCard data={stats.teachers} type="teachers" />
            <StatCard data={stats.staff} type="staff" />
            <StatCard data={stats.subjects} type="subjects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;