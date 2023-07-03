interface ScaleImageProps {
  src: string;
  alt: string;
}

export const ScaleImage = ({ src, alt }: ScaleImageProps) => {
  return <img className="w-full mb-4" src={src} alt={alt} />;
};
