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
//remove this import
import { SxProps, Theme } from "@mui/material";


//change this line from 
type CSSSuggestionType = CSSProperties | SxProps<Theme>;

//to 
type CSSSuggestionType = CSSProperties;


```

Use `EfStyleSheet.create();` and pass object inside this like bellow. store the result to a variable. For instance, I am storing in `const styles`.

```javascript 
    const styles = EfStyleSheet.create({
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
Now suggestions of material UI and CSSProperties should appear in you typescript object, also when you use `styles.smething` it should show available objects you passed in HbStyleSheet.create() function.


# Tips


/* TODO:
    don't forget to follow me on:

   - github: https://github.com/hbappi
   - github: https://github.com/efortshub

   - facebook: https://facebook.com/h.bappi.hp
   - facebook: https://facebook.com/efortshub

   - linkedIn: https://www.linkedin.com/in/hbappi
   - LinkedIn: https://www.linkedin.com/company/efortshub
    
   - instagram: https://www.instagram.com/efortshub
   - youtube: https://www.youtube.com/channel/@eFortsHub

*/



