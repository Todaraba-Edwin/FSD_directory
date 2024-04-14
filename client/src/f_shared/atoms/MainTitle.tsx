import React from "react";

type Props = {
    title: string;
};

export function MainTitle({ title }: Props) {
    return <h1>{title}</h1>;
}
