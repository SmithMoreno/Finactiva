import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Finactiva Learning</h1>
      <p>Learn how to manage your finances and grow your wealth</p>
      <p> cerrar sesion</p>
    </div>
  );
}
