function SkillGroup({ group }) {
  return (
    <article style={{
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 28,
      padding: "16px 0",
      borderTop: "1px solid var(--border)",
      alignItems: "baseline",
    }}>
      <div style={{
        fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "var(--fg-3)", lineHeight: 1.4,
      }}>
        {group.label}
      </div>
      <div style={{
        fontFamily: "var(--font-sans)", fontSize: 14.5,
        lineHeight: 1.65, color: "var(--fg-2)", textWrap: "pretty",
      }}>
        {group.items}
      </div>
    </article>
  );
}

window.SkillGroup = SkillGroup;
