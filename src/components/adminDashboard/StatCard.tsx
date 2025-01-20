import { Card } from "@mui/material"
import { GraduationCap, Users, BookOpen, Building2 } from 'lucide-react';


interface StatCardProps {
    data: {
      total: number
      active: number
      inactive: number
      label: string
      percentageChange: number
    }
    type: "students" | "teachers" | "staff" | "subjects"
  }


export function StatCard({ data, type }: StatCardProps) {
    const icons = {
      students: GraduationCap,
      teachers: Users,
      staff: Building2,
      subjects: BookOpen,
    }
  
    const Icon = icons[type]
    return (
        <Card className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <div className="rounded-lg bg-gray-100 p-2">
              <Icon className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{data.total}</span>
                <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs text-green-700">
                  {data.percentageChange}%
                </span>
              </div>
              <span className="text-sm text-gray-600">Total {data.label}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div>
            Active: <span className="font-medium text-gray-900">{data.active}</span>
          </div>
          <div>
            Inactive:{" "}
            <span className="font-medium text-gray-900">{data.inactive}</span>
          </div>
        </div>
      </Card>
    );
};

export default StatCard;