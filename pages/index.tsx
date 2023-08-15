import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 data-testid="headingTestID">Hello World Next App</h2>
      <span>Testing route, go to: </span> <Link href={"/about"}>About</Link>
    </div>
  );
}
