const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-display text-2xl font-bold gradient-text">
            Chhavi
          </a>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chhavi Sunil Pancholi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
