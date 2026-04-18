function Footer({ data }) {
  const linkStyle = {
    color: "var(--fg-1)", textDecoration: "none",
    display: "inline-flex", alignItems: "center", gap: 8,
    fontFamily: "var(--font-sans)", fontSize: 14,
  };
  return (
    <footer id="contact" style={{
      maxWidth: 760, margin: "96px auto 0",
      padding: "48px 32px 64px",
      borderTop: "1px solid var(--rule)",
    }}>
      <div style={{
        fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: "var(--fg-3)", marginBottom: 14,
      }}>
        Contact
      </div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 500,
        fontSize: 32, lineHeight: 1.15, color: "var(--fg-1)",
        marginBottom: 28, fontVariationSettings: "'opsz' 96",
        letterSpacing: "-0.02em", textWrap: "balance", maxWidth: 540,
      }}>
        Let's talk — I'm open to internships and entry-level roles in finance, operations, or software.
      </div>

      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 16 }}>
        <a style={linkStyle} href={`mailto:${data.contact.email}`}>
          <i data-lucide="mail" style={{ width: 16, height: 16 }}></i>
          {data.contact.email}
        </a>
        <a style={linkStyle} href={`tel:${data.contact.phone.replace(/\s/g, "")}`}>
          <i data-lucide="phone" style={{ width: 16, height: 16 }}></i>
          {data.contact.phone}
        </a>
        <span style={{ ...linkStyle, color: "var(--fg-3)" }}>
          <i data-lucide="map-pin" style={{ width: 16, height: 16 }}></i>
          {data.contact.location}
        </span>
      </div>

      <div style={{
        marginTop: 56, fontFamily: "var(--font-mono)", fontSize: 11,
        color: "var(--fg-4)", letterSpacing: "0.04em",
      }}>
        © {new Date().getFullYear()} {data.name}. Set in Fraunces, Inter Tight, and JetBrains Mono.
      </div>
    </footer>
  );
}

window.Footer = Footer;
