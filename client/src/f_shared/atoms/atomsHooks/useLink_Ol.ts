import * as NextNav from "next/navigation";
import * as Const from "@/f_shared/constrant";
import * as Tools from "@/f_shared/tools";
import styles from "@/f_shared/atoms/link_OlWrap.module.css";

export const useLink_Ol = () => {
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
