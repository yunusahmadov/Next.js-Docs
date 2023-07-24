import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
export default function DashboardLayour({
    children,
}:{children:React.ReactNode}){
    return (
        <section>
          {/* Include shared UI here e.g. a header or sidebar */}
          <nav className="bg-slate-500 flex justify-center p-5">
          {/* <ul className="flex gap-5">
            <li className="bg-slate-100 p-1"><Link href="/dashboard/settings">Settings</Link></li>
            <li className="bg-slate-100 p-1"><Link href="/dashboard/profile">Profile</Link></li>
          </ul> */}
          <Navigation/>
        </nav>
          {children}
        </section>
      )
}