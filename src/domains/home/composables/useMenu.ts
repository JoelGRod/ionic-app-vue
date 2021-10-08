// Interfaces
import { MenuItem } from "@/infrastructure/shared/interfaces/home.interfaces";
// Icons
import useIcons from "@/infrastructure/shared/composables/useIcons";

const useMenu = () => {

    const { homeOutline, planetOutline, square } = useIcons();

    const menuItems: MenuItem[] = [
        {
          title: "Home",
          icon: homeOutline,
          link: "HomePage"
        },
        {
          title: "Lists",
          icon: planetOutline,
          link: "Lists-1"
        },
        {
          title: "Utility",
          icon: square,
          link: "GridPage"
        },
    ];

    return {
        menuItems
    }
}

export default useMenu;