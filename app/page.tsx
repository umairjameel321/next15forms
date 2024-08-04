import UserForm from "@/components/UserForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <UserForm />
    </div>
  );
}
