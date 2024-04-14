import React from "react";
import * as Feat from "@/d_features/LinksUi";
import * as Const from "@/f_shared/constrant";

export function HomeLinkUls() {
    return <Feat.Link_OlWrap list={Const.PathLinks.HomePage} />;
}
