import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface DashboardCardProps {
  title: string;
  value: string;
}

export function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="text-sm text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}
