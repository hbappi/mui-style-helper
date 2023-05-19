import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

type CSSSuggestionType = CSSProperties | SxProps<Theme>;

type _st =
  | (
      | CSSSuggestionType
      | {
          [key: string]: CSSSuggestionType;
        }
    )
  | {
      [key: string]: _st;
    };
const createStyles = <T extends Record<string, _st>>(s: T): T => s;

const EfStyleSheet = {
  create: createStyles,
};

export default EfStyleSheet;
