import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="p-6">
        <CardContent>
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            Finance Dashboard
          </h1>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
