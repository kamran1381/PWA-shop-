import Loginform from "../components/loginform/loginform";

export default function Login() {
  return stringToElement(Loginform());
}

function stringToElement (htmlString) {
  const template = document.createElement('template')
  template.innerHTML = htmlString.trim()
  return template.content.firstElementChild;
}