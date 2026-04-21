const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AmitMonarch",
      icon: "/assets/github.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akba13",
      icon: "/assets/linkedin.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/___.amitesh.___/",
      icon: "/assets/instagram.svg",
    },
  ];

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-slate-400 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.name}
            href={socialLink.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${socialLink.name} profile`}
            className="social-icon"
          >
            <img
              src={socialLink.icon}
              alt={socialLink.name}
              className="w-1/2 h-1/2"
            />
          </a>
        ))}
      </div>

      <p className="text-slate-400">
        © 2026 Amitesh Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
