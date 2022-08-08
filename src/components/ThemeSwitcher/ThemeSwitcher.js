import { useState } from "react";
import { useContext } from "react";

import { MyContext } from "../..";
import css from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {

  const style = useContext(MyContext);
  const [newStyle, setNewStyle] = useState(style);

  const themeChange = () => {
    const body = document.getElementById("mainLayout");
    const menu = document.getElementById("menu");
    if (newStyle === "light") {
      body.classList.add("darkTheme");
      menu.classList.add("dark");
      setNewStyle("dark");
    }
    if (newStyle === "dark") {
      body.classList.remove("darkTheme");
      menu.classList.remove("dark");
      setNewStyle("light");
    }
  }
  return (
    <div className={css.switcher}>
      <input onChange={() => themeChange()}
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
    </div>
  );
};

export { ThemeSwitcher }