import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FormInput, Text } from "src/common_components/atoms";
import { text } from "src/utils/text";
import Logo from "../../../icons/logo.svg";
import { SignUpLink } from "src/components/atoms";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const [passwordType, useSetPasswordType] = useState<"password" | "text">(
    "password"
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();

  const requiredUser = {
    username: "user@domain.com",
    password: "fooBar123",
  };

  const onSubmit = (data: { email: string; password: string }) => {
    // We are intentionally ambiguous about which property is incorrect
    // to prevent brute force hacks
    if (
      data.email !== requiredUser.username ||
      data.password !== requiredUser.username
    ) {
      setError("email", {
        type: "custom",
        message: text.login.incorrectLoginDetails,
      });
    }
  };

  return (
    <div className="flex space-y-4 flex-col h-screen px-10 md:px-32 lg:w-1/2 lg:px-20 py-20 ">
      <Link href="/">
        <Logo className="cursor-pointer" />
      </Link>
      <Text as="h1" textStyle="heading" className="text-white pt-20">
        {text.login.title}
      </Text>
      <Text as="h2" textStyle="body" className="text-white">
        {text.login.subtitle}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          id="email"
          type="email"
          placeholder=""
          label={text.login.emailLabel}
          errors={errors}
          register={register("email", { required: true })}
        />
        <FormInput
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
          <button className="bg-teal text-dark-blue-900 py-2 px-4 rounded-lg ">
            <input type="submit" className="cursor-pointer" />
          </button>
        </div>
      </form>
      <SignUpLink />
    </div>
  );
};

export default LoginForm;
