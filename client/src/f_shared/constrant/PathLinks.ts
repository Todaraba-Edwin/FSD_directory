export const defaultPathLinks: Link_Type[] = [
    { type: "student", link: "student", path: "/student" },
    { type: "teacher", link: "teacher", path: "/teacher" },
];

export const PathLinks: PathLinks_Type = {
    default: defaultPathLinks,
    HomePage: [
        { type: "student", link: "login", path: "/login" },
        ...defaultPathLinks,
    ],
    Student: [
        { type: "student", link: "studentHome", path: "/student" },
        { type: "student", link: "student01", path: "/student/student01" },
        { type: "student", link: "student02", path: "/student/student02" },
        { type: "student", link: "student03", path: "/student/student03" },
    ],
    Teacher: [
        { type: "student", link: "TeacherHome", path: "/teacher" },
        { type: "teacher", link: "teacher01", path: "/teacher/teacher01" },
        { type: "teacher", link: "teacher02", path: "/teacher/teacher02" },
        { type: "teacher", link: "teacher03", path: "/teacher/teacher03" },
    ],
};
