export interface Telefone {
  numero: string;
  whatsapp: boolean;
}

export interface PhoneListProps {
  className?: string;
  errors?: any[];
  telefones: Telefone[];
  setNewTelefones: (newTelefones: Telefone[]) => void;
}
