"use client";
import * as Pages from "@/b_pages/user/UserTemplate";

export default function Template({ children }: { children: React.ReactNode }) {
    return <Pages.UserTemplate>{children}</Pages.UserTemplate>;
}
