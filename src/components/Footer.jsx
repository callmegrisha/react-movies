const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__copyright">
          © {new Date().getFullYear()} React Movies. Hryhorii Petrov
        </div>
      </div>
    </footer>
  );
};

export default Footer;
