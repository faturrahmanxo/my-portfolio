import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  href,
  ...props
}) {
  const variants = {
    primary: "...",
    secondary:
      "bg-foreground hover:bg-[#f3f4f680] dark:bg-dark dark:hover:bg-[#192335] backdrop-blur-sm border border-gray-300 dark:border-gray-800 hover:border-primary",
    gradient:
      "rounded-full bg-linear-to-r from-blue-400 via-primary to-blue-400",
  };

  const classes = `
   rounded-full 
   transition-all 
   duration-300
    ${variants[variant]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
