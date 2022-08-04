import { useState } from "react";
import { useContext } from "react";

import { MyContext } from "../..";
import css from "./ThemeSwitcher.module.css";

const ThemeSwitcher = ()=>{
    
    const dark = {style: {
        width: "200px",
        minHeight: "100vh",
        background:  "white",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        boxSizing: "border-box",
        padding: "20px"
}
}
    const style = useContext(MyContext);
    const [newStyle, setNewStyle] = useState(style);

    const themeChange =()=>{
        const body = document.getElementById("mainLayout");
        const menu = document.getElementById("menu");
        if(newStyle==="light"){
            body.classList.add("darkTheme");
            menu.classList.add("dark");
            setNewStyle("dark")   
            // menu.classList.remove("Header_header__nNCpY")
        }
        if(newStyle === "dark"){
            body.classList.remove("darkTheme");
            menu.classList.remove("dark");
            setNewStyle("light");
            // menu.classList.add("Header_header__nNCpY")
        }
    }
        return (
          <>
            <input onChange={()=> themeChange()}
              className={css.reactSwitchCheckbox}
              id={`reactSwitchNew`}
              type="checkbox"
            />
            <label
              className={css.reactSwitchLabel}
              htmlFor={`reactSwitchNew`}
            >
              <span className={css.reactSwitchButton} />
            </label>
          </>
        );
      };

export {ThemeSwitcher}