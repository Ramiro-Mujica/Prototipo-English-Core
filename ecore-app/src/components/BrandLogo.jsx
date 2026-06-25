import logo from "../img/logo2.png";

export default function BrandLogo({ className = "", alt = "EnglishCore" }) {
  return <img src={logo} alt={alt} className={className} />;
}
