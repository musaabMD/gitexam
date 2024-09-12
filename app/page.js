import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChatFeature from "@/components/Features";
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
    <Suspense>

<Header/>
<br />
<br />
<br />
<br />
<br />
<br />
<Hero/>
<ChatFeature/>
</Suspense>

    </>
  );
}
