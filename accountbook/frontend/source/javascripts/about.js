import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "../stylesheets/style.scss";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;

console.log("css", css);
