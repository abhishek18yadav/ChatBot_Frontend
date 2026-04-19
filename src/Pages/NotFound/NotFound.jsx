import {useNavigate} from "react-router-dom"
import { Button } from "@/components/ui/button";
import {Card,CardDescription,CardContent,CardHeader,
    CardTitle,
} from "@/components/ui/card";
export default function NotFound() {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">404</CardTitle>
          <CardDescription>Oops! The page you're looking for doesn't exist.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <img 
            src="https://comodosslstore.com/resources/wp-content/uploads/2025/05/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg" 
            alt="Page not found" 
            className="rounded-lg object-cover"
          />
          <Button onClick={() => navigate(-1)} className="w-full">
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}