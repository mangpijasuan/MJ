function Nav({ scrolled }) {
  const items = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#volunteer", label: "Volunteer" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 10,
      background: scrolled ? "rgba(11, 26, 51, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 200ms var(--ease)",
    }}>
      <div style={{
        maxWidth: 960, margin: "0 auto",
        padding: "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 32,
      }}>
        <a href="#top" style={{
          fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18,
          color: "var(--fg-1)", textDecoration: "none", letterSpacing: "-0.02em",
        }}>
          MJ
        </a>
        <div style={{ display: "flex", gap: 24 }}>
          {items.map(it => (
            <a key={it.href} href={it.href} style={{
              fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
              color: "var(--fg-2)", textDecoration: "none",
              letterSpacing: "0.02em",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--fg-1)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-2)"}>
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
