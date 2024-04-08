export const defaultPathLinks: Link_Type[] = [
  { link: "student", path: "./student" },
  { link: "teacher", path: "./teacher" },
];

export const HomePathLinks: Link_Type[] = [
  { link: "login", path: "./login" },
  ...defaultPathLinks,
];
