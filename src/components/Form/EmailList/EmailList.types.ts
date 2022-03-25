export interface Email {
  email: string;
}

export interface EmailListProps {
  className?: string;
  errors?: any[];
  emails: Email[];
  setNewEmails: (newEmails: Email[]) => void;
}
