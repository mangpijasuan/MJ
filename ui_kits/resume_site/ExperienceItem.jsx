function ExperienceItem({ item, compact }) {
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
          {item.role}
        </h3>
        <div style={{
          fontFamily: "var(--font-sans)", fontSize: 14,
          color: "var(--fg-3)", marginTop: 2,
        }}>
          {item.org}{item.location ? ` · ${item.location}` : ""}
        </div>
        {item.bullets && item.bullets.length > 0 && !compact && (
          <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none" }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{
                fontFamily: "var(--font-sans)", fontSize: 14.5,
                lineHeight: 1.6, color: "var(--fg-2)",
                paddingLeft: 18, position: "relative",
                marginBottom: 6, textWrap: "pretty",
              }}>
                <span style={{
                  position: "absolute", left: 0, top: "0.7em",
                  width: 8, height: 1, background: "var(--fg-4)",
                }}></span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

window.ExperienceItem = ExperienceItem;
