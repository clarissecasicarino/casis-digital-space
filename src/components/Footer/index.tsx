"use client";

import React, { ReactElement } from "react";
import { GitHub, LinkedIn } from "../../../public/assets/svgs";
import Link from "next/link";

export default function Footer(): ReactElement {
  return (
    <footer className="w-full bg-russianViolet text-white">
      <div className="flex items-center justify-center">
        <IconLink
          IconComponent={GitHub}
          href="https://github.com/clarissecasicarino"
        />
        <IconLink
          IconComponent={LinkedIn}
          href="https://www.linkedin.com/in/clarisse-casi-carino"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <hr className="w-full" />
        <div className="p-1">
          <p className="text-center text-base font-normal md:text-left">
            Copyright © Casi{"'"}s Digital Space. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function IconLink<E>({
  IconComponent,
  href,
}: {
  IconComponent: React.ComponentType<React.SVGProps<E>>;
  href: string;
}): ReactElement {
  return (
    <Link href={href} className="flex h-12">
      <IconComponent className="m-auto h-12 w-12" />
    </Link>
  );
}
