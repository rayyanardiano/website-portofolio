const Footer = () => {
  return (
    <footer className="footer">
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Muhammad Rayyan Ardiano.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
