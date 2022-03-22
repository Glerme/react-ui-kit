export interface TreeItem {
  itemId: string;
  name: string;
  parentId: string;
  checked: boolean;
  open: boolean;
}

export interface TreeItemListProps {
  items: TreeItem[];
  parentItems: TreeItem[];
  onToggleCheck: (acesso_id: string) => void;
  onToggleOpen: (acesso_id: string) => void;
}
