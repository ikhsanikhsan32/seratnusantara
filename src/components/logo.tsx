import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
       <Image
          src="https://i.ibb.co/qMkr345W/Desain-tanpa-judul-15.png"
          alt="Serat Nusantara Logo"
          width={150}
          height={38}
          priority
        />
    </div>
  );
}
