import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { PageContainer } from "~/components/layout/PageContainer";
import { SectionContainer } from "~/components/layout/SectionContainer";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import {
  Form
} from "~/components/ui/form";
import RegisterFormInner from "../components/RegisterFormInner";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";

const RegisterPage = () => {

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterSubmit = (data: RegisterFormSchema) => {
    alert("Register Success");
    console.log(data);
  };

  return (
    <PageContainer>
      <SectionContainer
        padded
        className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
      >
        <Card className="w-full max-w-[480px] self-center">
          <CardHeader className="flex flex-col items-center justify-center">
            {/* Logo Here */}
            <h1 className="text-3xl font-bold text-primary">Buat Akun</h1>
            <p className="text-muted-foreground">
              Qepoin kreator favorite kamu
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <RegisterFormInner onRegisterSubmit={handleRegisterSubmit} />
            </Form>

            {/* CONTINUE WITH GOOGLE */}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between gap-x-4">
              <div className="h-[2px] w-full border-t-2" />
              <p className="flex-1 text-nowrap text-sm text-muted-foreground">
                Atau lanjut dengan
              </p>
              <div className="h-[2px] w-full border-t-2" />
            </div>

            <Button variant="secondary" size="lg" className="w-full">
              <FcGoogle/>
              Buat akun dengan Google
            </Button>

            <p>Sudah punta akun? <Link href="/login" className="text-purple-600 font-bold">P, Login</Link></p>
          </CardFooter>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default RegisterPage;
