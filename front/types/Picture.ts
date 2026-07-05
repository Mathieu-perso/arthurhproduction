export type Picture = {
  src: string;
  alt: string;
  page: string;
  isHighlighted: boolean;
}

export type HomePicture = {
  title: string
} & Picture;