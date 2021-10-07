// Interfaces
import { TabItem } from "@/infrastructure/shared/interfaces/home.interfaces";
// Composables
import useIcons from "@/infrastructure/shared/composables/useIcons";

const useTabs = () => {
  const { listOutline, exitOutline } = useIcons();

  const tabItems: TabItem[] = [
    {
      tabName: "tab1",
      link: "Lists-1",
      icon: listOutline,
      tabLabel: "Lists I",
    },
    {
      tabName: "tab2",
      link: "Lists-2",
      icon: listOutline,
      tabLabel: "Lists II",
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
