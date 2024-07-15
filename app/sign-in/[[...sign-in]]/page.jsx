import { SignIn } from "@clerk/nextjs";

const SingInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SingInPage;
