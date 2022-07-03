import Image from "next/image";

interface LoginBackgroundProps {}

const LoginBackground: React.FC<LoginBackgroundProps> = ({}) => {
  return (
    <>
      <div className="absolute z-[-1] flex flex-row h-screen w-full">
        <div className="bg-dark-blue-900 w-full h-full" />
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/images/loginBackground.webp"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default LoginBackground;
