import React from "react";
import * as Widgets from "@/c_widgets/homeParts";
import * as Atoms from "@/f_shared/atoms";

export function HomePage() {
  return (
    <div>
      <Atoms.MainTitle title="HomePage" />
      <Widgets.ApiHealthChecked />
      <Widgets.HomeLinkUls />
    </div>
  );
}
