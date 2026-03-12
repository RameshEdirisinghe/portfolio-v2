const AboutSection = () => {
  return (
    <section id="about-section" className="section-wrap">
      <div className="section-inner">
        <div className="paper-card about-panel">
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">Practical engineer who ships with clarity and care.</h2>
          <p className="section-copy">
            I design and deliver full-stack products across web, backend, cloud, and mobile. My work balances
            fast iteration with stable architecture, keeping teams unblocked while the product feels polished
            and reliable.
          </p>
          <div className="about-grid">
            <div>
              <p className="about-label">Focus Areas</p>
              <ul className="about-list">
                <li>Product-focused frontend with React, TypeScript, Tailwind</li>
                <li>Robust APIs with Node.js, Spring Boot, and microservices patterns</li>
                <li>Cloud-native delivery on AWS with CI/CD and observability first</li>
              </ul>
            </div>
            <div>
              <p className="about-label">How I work</p>
              <ul className="about-list">
                <li>Translate ambiguous ideas into clear, testable milestones</li>
                <li>Pair with design and PM to keep UX crisp and scoped</li>
                <li>Ship in small batches; measure, learn, and refine</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
