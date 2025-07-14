import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
       <Image
          src="https://storage.googleapis.com/project-os-prod/images/4096053f-c387-43f1-b1e0-f1d24f08e09e.png"
          alt="Serat Nusantara Logo"
          width={150}
          height={38}
          className="h-10 w-auto"
          priority
        />
    </div>
  );
}
