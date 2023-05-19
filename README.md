# mui-style-helper
Create Style Object with autoComplete and Suggestions for Material UI in Typescript



# Usage

put the `style-helper.tsx` file any where in your project and create object like this:

modify these imports inside `style-helper.tsx` accrding to which mui library you are using 
```javascript
import { SxProps, Theme } from "@mui/material";
```

if you are not using mui and want only suggestion for `CSSProperties` then please change fllowing lines
```javascript


```

```javascript 
    const styles = HbStyleSheet.create({
    logginButton: {
      width: "100%",
      margin: "10px 0px",
    },
    forgotPassword: {
      cursor: "pointer",
      textTransform: "capitalize",
    },
    passwordError: {
      marginTop: "10px",
      color: "red",
      textTransform: "capitalize",
      fontWeight: "bold",
    },
    });
```
    
# MashaAllah
Now you suggestion of material UI and CSSProperties should appear in you typescript object, also when you use `styles.smething` it should show available objects you passed in HbStyleSheet.create() function.

