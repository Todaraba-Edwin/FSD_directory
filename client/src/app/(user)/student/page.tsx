import React from "react";
import * as Atoms from "@/f_shared/atoms";

export default function StudentHome() {
    return (
        <div>
            <Atoms.MainTitle title="StudentHome" />
            <Atoms.GoHomeLink />
            <Atoms.BackLink />
        </div>
    );
}
