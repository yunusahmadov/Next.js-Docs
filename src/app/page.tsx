import Counter from "./counter";
import './../styles/globals.css'
import Link from "next/link";

export default function Page() {
    return <>
            <nav className="bg-slate-500 flex justify-center">
          <ul>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
    <h1>Hello, Next.js!</h1>
    <Counter/>
    </>
  }