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

export function SignupCard({signupForm, setSignupForm,signupFormSubmit,isPending,error,ValidationError}) {
    const navigate = useNavigate();
  return (
    <Card className="w-full max-w-sm">
          <CardHeader>
        <CardTitle className="text-2xl font-bold">Signup</CardTitle>
        {error || ValidationError ? <p className="text-red-500">{error || ValidationError}</p> : null}
      </CardHeader>
      <CardContent>
        <form inSubmit={signupFormSubmit}>
          <div className="flex flex-col gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required onChange={(e)=>setSignupForm(...signupForm,name=e.target.value )} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => setSignupForm(...signupForm, email = e.target.value)}
                value={signupForm.email}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required onChange={(e) => setSignupForm(...signupForm, password = e.target.value)} value={signupForm.password} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button disabled={isPending} type="submit" className="w-full cursor-pointer">
          Login
              </Button>
              <p className="text-5 text-muted-foreground mt-4">
                  Already have an account?{' '} <span onClick={() => navigate('/auth/signin')} className="underline cursor-pointer text-sky-600">Signin</span></p>
      </CardFooter>
    </Card>
  )
}
