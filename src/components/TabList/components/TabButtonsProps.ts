export interface TabButtonsProps {
  labels: string[];
  activeTab: string;
  onTabClick: (label: string) => void;
}
