export interface PreviewFile {
  url: string;
  fileName: string;
}

export interface PreviewImageProps {
  images: PreviewFile[];
  className?: string;
  removeFiles?: (index: number) => void;
  buttonTitle?: string;
}
