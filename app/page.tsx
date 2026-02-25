export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.glow} />

      <header style={styles.header}>
        <div style={styles.badge}>Production ready</div>
        <h1 style={styles.title}>
          <span style={styles.accent}>Vinext</span> on Clever Cloud
        </h1>
        <p style={styles.subtitle}>
          Next.js reimagined with Vite. Built and served by Bun.
          <br />
          Deployed in seconds.
        </p>
      </header>

      <section style={styles.grid}>
        <Card
          title="Vinext"
          description="Drop-in Next.js replacement built on Vite. Up to 4x faster builds, 57% smaller bundles."
          href="https://github.com/cloudflare/vinext"
          tag="Framework"
        />
        <Card
          title="Bun"
          description="All-in-one runtime, bundler and package manager. Installs deps and runs the server."
          href="https://bun.sh"
          tag="Runtime"
        />
        <Card
          title="Clever Cloud"
          description="European PaaS. Git push to deploy. Auto-scaling, zero config infrastructure."
          href="https://www.clever-cloud.com"
          tag="Platform"
        />
      </section>

      <section style={styles.stack}>
        <h2 style={styles.stackTitle}>Stack</h2>
        <div style={styles.pills}>
          {["Vinext", "Vite", "React", "Bun", "Node.js"].map(
            (item) => (
              <span key={item} style={styles.pill}>
                {item}
              </span>
            )
          )}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>
          <a href="https://blog.cloudflare.com/vinext/" style={styles.link}>
            Blog post
          </a>
          {" / "}
          <a
            href="https://www.clever-cloud.com/developers/doc/applications/nodejs"
            style={styles.link}
          >
            Clever Cloud docs
          </a>
        </p>
      </footer>
    </main>
  );
}

function Card({
  title,
  description,
  href,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  tag: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={styles.card}>
      <span style={styles.cardTag}>{tag}</span>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </a>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 1.5rem",
    position: "relative",
    overflow: "hidden",
    gap: "3rem",
  },
  glow: {
    position: "absolute",
    top: "-40%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0) 70%)",
    pointerEvents: "none",
  },
  header: {
    textAlign: "center",
    maxWidth: "640px",
  },
  badge: {
    display: "inline-block",
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#818cf8",
    border: "1px solid rgba(99,102,241,0.3)",
    borderRadius: "9999px",
    padding: "0.25rem 0.85rem",
    marginBottom: "1.25rem",
  },
  title: {
    fontSize: "2.75rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.15,
    color: "#fafafa",
  },
  accent: {
    color: "#818cf8",
  },
  subtitle: {
    marginTop: "1rem",
    fontSize: "1.1rem",
    color: "#a1a1aa",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1rem",
    maxWidth: "820px",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #1e1e2e",
    background: "rgba(17,17,27,0.6)",
    backdropFilter: "blur(8px)",
    transition: "border-color 0.2s, background 0.2s",
    cursor: "pointer",
  },
  cardTag: {
    fontSize: "0.7rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#6366f1",
  },
  cardTitle: {
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#fafafa",
  },
  cardDescription: {
    fontSize: "0.9rem",
    color: "#71717a",
    lineHeight: 1.55,
  },
  stack: {
    textAlign: "center",
  },
  stackTitle: {
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#52525b",
    marginBottom: "0.75rem",
  },
  pills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    justifyContent: "center",
  },
  pill: {
    fontSize: "0.8rem",
    color: "#a1a1aa",
    background: "#18181b",
    border: "1px solid #27272a",
    borderRadius: "6px",
    padding: "0.3rem 0.7rem",
  },
  footer: {
    fontSize: "0.85rem",
    color: "#52525b",
  },
  link: {
    color: "#818cf8",
    textDecoration: "none",
    borderBottom: "1px solid transparent",
    transition: "border-color 0.2s",
  },
};
