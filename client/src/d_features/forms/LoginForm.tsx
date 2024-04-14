"use client";
import React from "react";

export function LoginForm({
    formTitle,
    inputs,
    onSubmit,
    buttonName,
    register,
    children,
}: LoginForm_Props) {
    return (
        <form onSubmit={onSubmit}>
            <h2>{formTitle}</h2>
            {inputs.map(({ type, key, options }) => (
                <input key={key} type={type} {...register(key)} {...options} />
            ))}
            <div>
                <button type="submit">{buttonName}</button>
            </div>
            {children}
        </form>
    );
}
