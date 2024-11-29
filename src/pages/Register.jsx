import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../components/Header";
import { SignUpContextConsumer, SignUpContextProvider } from "../context/SignUpContext";

export default function Register() {

    const signUpFormSchema = z.object({
        email: z.string().email("Format email harus sesuai!"),
        username: z.string().min(4, "Username minimal 4 karakter atau lebih!"),
        password: z.string().min(8, "Password minimal 8 karakter atau lebih!"),
    })

    const form = useForm({
        defaultValues: {
            email: "",
            username: "",
            password: ""
        },
        resolver: zodResolver(signUpFormSchema)
    });

    const registerUser = (data) => {
        // console.log(data);
        alert(`Data submitted!\nEmail: ${data.email}\nUsername: ${data.username}\nPassword: ${data.password}`)
    }

    const title = "Sign Up Page";

    return (
        <>
            <SignUpContextProvider>
                <div className="h-screen bg-gradient-to-r from-blue-500 to-cyan-500">
                    <Header />
                    <SignUpContextConsumer>
                        {
                            (context) => {
                                return <p className="text-center font-semibold">{context.title}</p>;
                            }
                        }
                    </SignUpContextConsumer>
                    <div className="flex flex-col items-center justify-center h-5/6">
                        <div className="w-[300px]">
                            <Card>
                                <CardHeader className="flex justify-center">
                                    <h1 className="font-semibold text-lg">Sign Up!</h1>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <form onSubmit={form.handleSubmit(registerUser)} className="flex flex-col gap-4">
                                        <Controller
                                            name="email"
                                            control={form.control}
                                            render={({ field, fieldState }) => {
                                                return <Input {...field}
                                                    type="email"
                                                    label="Email" size="sm"
                                                    isInvalid={Boolean(fieldState.error)}
                                                    errorMessage={fieldState.error?.message} />;
                                            }}
                                        />
                                        <Controller
                                            name="username"
                                            control={form.control}
                                            render={({ field, fieldState }) => {
                                                return <Input {...field}
                                                    label="Username"
                                                    size="sm"
                                                    isInvalid={Boolean(fieldState.error)}
                                                    errorMessage={fieldState.error?.message} />;
                                            }}
                                        />
                                        <Controller
                                            name="password"
                                            control={form.control}
                                            render={({ field, fieldState }) => {
                                                return <Input {...field}
                                                    type="password"
                                                    label="Password"
                                                    size="sm"
                                                    isInvalid={Boolean(fieldState.error)}
                                                    errorMessage={fieldState.error?.message} />;
                                            }}
                                        />
                                        <Button type="submit" color="primary">Register</Button>
                                    </form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </SignUpContextProvider>
        </>
    )
}
