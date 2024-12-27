import { ReactNode } from "react";
import { DefaultContainerLayout } from "./styles";

interface defaultContainerProps {
  children: ReactNode;
}

export const DefaultContainer = ({ children }: defaultContainerProps) => {
  <DefaultContainerLayout>{children}</DefaultContainerLayout>;
};
