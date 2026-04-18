function EducationItem({ item }) {
  return (
    <article style={{
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gap: 28,
      padding: "20px 0",
      borderTop: "1px solid var(--border)",
      alignItems: "baseline",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 12,
        color: "var(--fg-3)", lineHeight: 1.5,
      }}>
        {item.date}
      </div>
      <div>
        <h3 style={{
          fontFamily: "var(--font-sans)", fontWeight: 600,
          fontSize: 17, color: "var(--fg-1)", margin: 0, lineHeight: 1.3,
        }}>
          {item.school}
        </h3>
        <div style={{
          fontFamily: "var(--font-sans)", fontSize: 14,
          color: "var(--fg-3)", marginTop: 2,
        }}>
          {item.location}
        </div>
        <div style={{
          fontFamily: "var(--font-serif)", fontStyle: "italic",
          fontSize: 16, color: "var(--fg-2)", marginTop: 8, lineHeight: 1.4,
        }}>
          {item.degree}
        </div>
      </div>
    </article>
  );
}

window.EducationItem = EducationItem;
