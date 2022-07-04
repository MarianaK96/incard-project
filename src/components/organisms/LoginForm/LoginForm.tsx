import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FormInput, Text } from "src/common_components/atoms";
import { text } from "src/utils/text";
import Logo from "../../../icons/logo.svg";
import { SignUpLink } from "src/components/atoms";
import { postLogin } from "src/utils/api";
import { AuthContext } from "src/context/auth-context";
interface FormValues {
  email: string;
  password: string;
}

const LoginForm = ({}) => {
  const router = useRouter();
  const [passwordType, useSetPasswordType] = useState<"password" | "text">(
    "password"
  );
  const authContext = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormValues>();

  const onSubmit = async (data: { email: string; password: string }) => {
    // made it intentionally ambiguous about which property is incorrect
    // to prevent brute force hacks

    const response: { status: number; jwtToken?: string } = await postLogin({
      email: data.email,
      password: data.password,
    });
    if (response.status === 400) {
      return setError("email", {
        type: "custom",
        message: text.login.incorrectLoginDetails,
      });
    }

    if (response.status === 200) {
      authContext?.setAuthState(response.jwtToken);
      return router.push("/dashboard");
    }
  };

  return (
    <div className="flex space-y-4 flex-col h-screen px-10 md:px-32 lg:w-1/2 lg:px-20 py-20 ">
      <Link href="/">
        <a>
          <Logo className="cursor-pointer" />
        </a>
      </Link>
      <Text as="h1" textStyle="heading" className="text-white pt-20">
        {text.login.title}
      </Text>
      <Text as="h2" textStyle="body" className="text-white">
        {text.login.subtitle}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          testId="emailInput"
          id="email"
          type="email"
          placeholder=""
          label={text.login.emailLabel}
          errors={errors}
          register={register("email", { required: true })}
        />
        <FormInput
          testId="passwordInput"
          id="password"
          type={passwordType}
          placeholder=""
          label={text.login.passwordLabel}
          errors={errors}
          register={register("password", { required: true })}
          togglePasswordType={useSetPasswordType}
          passwordType={passwordType}
        />
        <Link href="/">
          <Text
            as="a"
            textStyle="body"
            className="text-teal mt-2 cursor-pointer select-none"
          >
            {text.login.forgotPassword}
          </Text>
        </Link>
        <div className="mt-4">
          <button className="bg-teal text-dark-blue-900 py-2 px-4 rounded-lg">
            <input
              type="submit"
              className="cursor-pointer"
              data-testid="submitBtn"
            />
          </button>
        </div>
      </form>
      <SignUpLink />
    </div>
  );
};

export default LoginForm;
