const { useState, useEffect } = React;

function Button({ variant = "primary", children, href, onClick, icon }) {
  const styles = {
    primary: {
      background: "var(--accent)", color: "var(--navy-1)",
      border: "1px solid var(--accent)",
    },
    ghost: {
      background: "transparent", color: "var(--fg-1)",
      border: "1px solid var(--border-strong)",
    },
    text: {
      background: "transparent", color: "var(--accent)",
      border: "1px solid transparent", padding: "12px 0",
    },
  }[variant];

  const base = {
    fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, lineHeight: 1,
    padding: variant === "text" ? "8px 0" : "12px 18px",
    borderRadius: 2, cursor: "pointer", textDecoration: "none",
    display: "inline-flex", alignItems: "center", gap: 8,
    whiteSpace: "nowrap",
    transition: "all var(--dur) var(--ease)",
    ...styles,
  };

  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const hoverStyle = hover ? (variant === "primary"
    ? { background: "var(--accent-hover)", borderColor: "var(--accent-hover)" }
    : variant === "ghost" ? { background: "var(--surface)", borderColor: "var(--border-strong)" }
    : { color: "var(--accent-hover)", textDecoration: "underline", textUnderlineOffset: 3 }) : {};
  const downStyle = down ? { transform: "translateY(1px)" } : {};

  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)}
      style={{ ...base, ...hoverStyle, ...downStyle }}>
      {icon && <i data-lucide={icon} style={{ width: 16, height: 16 }}></i>}
      {children}
    </Tag>
  );
}

window.Button = Button;
