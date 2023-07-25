import NextImage, { ImageProps } from 'next/image';

const Image = ({ src, alt, ...props }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88OnbRAAJHQNreBLWHwAAAABJRU5ErkJggg==`}
      {...props}
    />
  );
};

export default Image;
