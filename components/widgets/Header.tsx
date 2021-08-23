import Image from "next/image";
import { SearchProps, LogoProps } from "../../interfaces/interfaces";

export const SearchBar = ({ className, children }: SearchProps) => {
  return <div className={className}>{children}</div>;
};

export const Logo = ({ logosrc, className }: LogoProps) => {
  return (
    <div className={className}>
      <Image
        src={logosrc}
        layout="fill"
        objectFit="contain"
        objectPosition="left"
      />
    </div>
  );
};
