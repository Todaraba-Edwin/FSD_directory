export const isNode_Dev: boolean = process.env.NODE_ENV === "development";
export enum UserType {
  STUDENT = "STUDENT",
  TEATURE = "TEATURE",
}

export enum LocalStorageKeys {
  USERTYPE = "userType",
}
