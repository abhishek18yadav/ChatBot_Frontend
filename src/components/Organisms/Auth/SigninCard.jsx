import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
export function SigninCard({ signinForm, setSigninForm, signinFormSubmit, isPending, error, ValidationError }) {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Signin</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={signinFormSubmit}>
          <div className="flex flex-col gap-6">
            {(ValidationError || error) && (
              <p className="text-sm text-red-500">{ValidationError?.message || error?.message}</p>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={signinForm.email}
                onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={signinForm.password}
                onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" onClick={signinFormSubmit} disabled={isPending} className="w-full cursor-pointer">
          {isPending ? 'Logging in...' : 'Login'}
        </Button>
        <p className="text-5 text-muted-foreground mt-4">
          Don&apos;t have an account?{' '}
          <span onClick={() => navigate('/auth/signup')} className="underline cursor-pointer text-sky-600">Signup</span>
        </p>
      </CardFooter>
    </Card>
  )
}
