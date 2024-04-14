export const handle_EmptyValue = (formdata: any) => {
    const emptyFields = Object.entries(formdata).filter(([_, value]) => !value);
    const isEmpty = Boolean(emptyFields.length > 0);

    if (isEmpty) {
        const [[firstEmpthKey]] = emptyFields;
        alert(`${firstEmpthKey}을(를) 입력해 주세요.`);
    }
    return { isEmpty };
};
