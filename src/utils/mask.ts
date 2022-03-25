export const cepMask = (value: string | null = "") =>
  (value || "").replace(/\D/g, "").replace(/(\d{5})(\d{3})/g, "$1-$2");

export const phoneMask = (value: string | null = "") =>
  (value || "")
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");

export const cnpjMask = (value: string | null = "") =>
  (value || "")
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");

export const cpfMask = (value: string | null = "") =>
  (value || "")
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
