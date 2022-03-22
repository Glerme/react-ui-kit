export interface TreeItem {
  itemId: string;
  name: string;
  parentId: string;
  checked: boolean;
  open: boolean;
}

export interface TreeProps {
  className?: string;
  items: TreeItem[];
  setItems: (newItems: TreeItem[]) => void;
}
