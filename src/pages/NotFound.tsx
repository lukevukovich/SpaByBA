import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFound() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "8rem 1.5rem 6rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Page Not Found</p>
        <h1 className="display" style={{ margin: "1rem 0" }}>
          404
        </h1>
        <p
          className="lead muted max-60 mx-auto"
          style={{ marginBottom: "2rem" }}
        >
          The page you're looking for has drifted away. Let's guide you back to
          a place of calm.
        </p>
        <Link to="/" className="btn">
          <span>Return Home</span>
        </Link>
      </motion.div>
    </section>
  );
}
