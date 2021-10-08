// Interfaces
import { TabItem } from "@/infrastructure/shared/interfaces/home.interfaces";
// Composables
import useIcons from "@/infrastructure/shared/composables/useIcons";

const useTabs = () => {
  const { listOutline, exitOutline } = useIcons();

  const tabItems: TabItem[] = [
    {
      tabName: "tab1",
      link: "GridPage",
      icon: listOutline,
      tabLabel: "Grid",
    },
    {
      tabName: "tab2",
      link: "UtilsPage",
      icon: listOutline,
      tabLabel: "Utils",
    },
    {
      tabName: "tab3",
      link: "HomePage",
      icon: exitOutline,
      tabLabel: "Exit",
    },
  ];

  return {
    tabItems,
  };
};

export default useTabs;
