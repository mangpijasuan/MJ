function SectionHeader({ eyebrow, title, id }) {
  return (
    <header id={id} style={{
      maxWidth: 760, margin: "0 auto",
      padding: "0 32px",
      borderTop: "1px solid var(--rule)",
      paddingTop: 14,
      marginTop: 72,
    }}>
      <div style={{
        fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: "var(--fg-3)",
      }}>
        {eyebrow}
      </div>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 500,
        fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em",
        color: "var(--fg-1)", margin: "8px 0 32px",
        fontVariationSettings: "'opsz' 96",
      }}>
        {title}
      </h2>
    </header>
  );
}

window.SectionHeader = SectionHeader;
