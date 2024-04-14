import React from "react";
import * as Widget from "@/c_widgets/loginParts";
import * as Atoms from "@/f_shared/atoms";

export function LoginPage() {
    return (
        <div>
            <Atoms.BackLink />
            <Widget.LoginFormIndex />
        </div>
    );
}
