import logo from "../img/logo.png";

export default function BrandLogo({ className = "", alt = "EnglishCore" }) {
  return <img src={logo} alt={alt} className={className} />;
}
