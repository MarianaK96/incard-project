import React, { Dispatch, SetStateAction } from "react";
import { Text } from "src/common_components/atoms";
import { UseFormReturn } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Eye from "../../../icons/eye-on.svg";
import EyeOff from "../../../icons/eye-off.svg";

interface FormInputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  errors: any;
  register: any;
  passwordType?: "password" | "text";
  togglePasswordType?: Dispatch<SetStateAction<"password" | "text">>;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  placeholder,
  errors,
  label,
  register,
  passwordType,
  togglePasswordType,
}) => {
  return (
    <>
      <div className="relative w-auto">
        <label className="block sm:mt-px sm:pt-2" htmlFor={id}>
          <Text as="p" textStyle="body" className="text-white">
            {label}
          </Text>
        </label>
        <input
          id={id}
          name={id}
          type={type}
          className="block max-w-lg w-full shadow-sm sm:text-sm border-white rounded-md xs:w-full p-2
          bg-blue-100 border-2 border-solid border-teal text-dark-blue
          "
          autoComplete="true"
          {...register}
        />
        {togglePasswordType && (
          <span className="absolute top-[40px] right-[23px]">
            {passwordType === "password" ? (
              <EyeOff
                onClick={() => togglePasswordType("text")}
                className="text-dark-blue cursor-pointer"
              />
            ) : (
              <Eye
                onClick={() => togglePasswordType("password")}
                className="text-dark-blue cursor-pointer"
              />
            )}
          </span>
        )}
      </div>
      <Text className="!text-red-500 mt-0">
        <ErrorMessage errors={errors} name={id} />
      </Text>
    </>
  );
};

export default FormInput;
