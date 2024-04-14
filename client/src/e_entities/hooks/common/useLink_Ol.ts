import * as NextNav from "next/navigation";
import * as Tools from "@/e_entities/tools";
import * as Const from "@/f_shared/constrant";

export const useLink_Ol = ({ styles }: ModuleCSS_Props) => {
    const router = NextNav.useRouter();
    const onRouter = (href: string, type: string) => () => {
        Tools.localStorage_set({
            name: Const.LocalStorageKeys.USERTYPE,
            payload: type.toLocaleUpperCase(),
        });
        router.push(href);
    };
    const [_, secentSegment] = NextNav.useSelectedLayoutSegments();
    const onSetLiColor = (link: string) => {
        if (!secentSegment) {
            if (link.includes("Home")) return styles.currentPath;
            return styles.otherPath;
        }
        if (secentSegment === link) return styles.currentPath;
        return styles.otherPath;
    };
    return { onRouter, onSetLiColor };
};
