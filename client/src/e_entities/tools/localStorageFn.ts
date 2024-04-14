export const localStorage_set: Set_Localstorage_Type = ({ name, payload }) => {
    localStorage.setItem(name, payload);
};

export const LocalStorage_get: Get_Localstorage_Type = ({ name }) => {
    return localStorage.getItem(name);
};

export const LocalStorage_remove: Remove_Localstorage_Type = ({ name }) => {
    localStorage.removeItem(name);
};
