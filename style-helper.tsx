import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

type StyleDeclaration =
  | CSSProperties
  | (SxProps<Theme> & {
      [key: string]: CSSProperties | SxProps<Theme>;
    });
type SX =
  | StyleDeclaration
  | {
      [key: string]: StyleDeclaration;
    };
const createStyles = <T extends Record<string, SX>>(s: T): T => s;

const EfStyleSheet = {
  create: createStyles,
};

export default EfStyleSheet;
