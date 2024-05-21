"use client";

export function ChangeThemeButton() {

  function changeTheme() {
    const htmlElement = document.querySelector("html");

    htmlElement?.hasAttribute("class") 
      ? htmlElement?.removeAttribute("class")
      : htmlElement?.setAttribute("class", "dark");
  }
  return (
    <button onClick={changeTheme} className="bg-accent text-white font-bold px-4 py-2">
      Change theme
    </button>
  )
}