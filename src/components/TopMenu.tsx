import Image from "next/image";
import { ReactElement } from "react";
import TopMenuItem from "./TopMenuItem";

// interface Props {
//   children?: ReactElement<typeof TopMenuItem>;
// }

export default function TopMenu() {
  return (
    <div className="relative flex gap-5 flex-row-reverse h-16 w-full bg-stone-900">
      <Image
        src="/image/logo.png"
        alt="logo image"
        height={64}
        width={64}
        className="object-contain"
      />

      <TopMenuItem title="booking" href="/booking" />
    </div>
  );
}
