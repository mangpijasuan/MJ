function Hero({ data }) {
  return (
    <section id="top" style={{
      maxWidth: 960, margin: "0 auto",
      padding: "96px 32px 64px",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-3)",
        letterSpacing: "0.08em", textTransform: "uppercase",
        marginBottom: 32,
      }}>
        Jenks, Oklahoma · 2026
      </div>

      <h1 style={{
        fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 1.05,
        letterSpacing: "-0.02em", color: "var(--fg-1)",
        margin: 0, fontVariationSettings: "'opsz' 144",
        textWrap: "balance",
      }}>
        {data.name}
      </h1>

      <p style={{
        fontFamily: "var(--font-serif)", fontStyle: "italic",
        fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.3,
        color: "var(--fg-1)", marginTop: 24, marginBottom: 40,
        maxWidth: 620, textWrap: "balance",
      }}>
        {data.lede}
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button variant="primary" icon="download" href="#">Download resume</Button>
        <Button variant="ghost" icon="mail" href={`mailto:${data.contact.email}`}>Email me</Button>
      </div>
    </section>
  );
}

window.Hero = Hero;
