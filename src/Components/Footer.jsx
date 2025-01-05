import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="footer footer-center text-primary-content p-10">
      <aside>
        <img className="mb-4" src={logo} alt="" />
        <p className="font-bold">
          Md. Shafiqul Islam
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
