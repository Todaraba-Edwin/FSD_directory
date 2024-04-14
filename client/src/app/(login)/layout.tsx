import styles from "./loginLayout.module.css";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={styles.LayoutMain}>
            <div className={styles.LoginWrapp}>{children}</div>
        </main>
    );
}
