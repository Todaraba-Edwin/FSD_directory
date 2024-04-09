import React from "react";
import * as Atoms from "@/f_shared/atoms";
import * as Widget from "@/c_widgets/loginParts";

export default function Login() {
  return (
    <div>
      <Atoms.BackLink />
      <Widget.LoginForm />
    </div>
  );
}
