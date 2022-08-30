import { createThemeProvider } from "disiz";
import { createButton } from "disiz/Button";
import { createMakeStyles } from "tss-react/compat";
import { Checkbox } from "disiz/Checkbox";
import { TextField } from "disiz/TextField";
import { createText } from 'disiz/Text';

const { ThemeProvider, useTheme } = createThemeProvider({})


export { ThemeProvider };
export const { makeStyles, useStyles } = createMakeStyles({ useTheme })
export const { Button } = createButton();
export { Checkbox };
export { TextField };
export const { Text } = createText({ useTheme });
