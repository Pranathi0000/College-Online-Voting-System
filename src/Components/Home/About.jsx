import React from 'react';
import './AboutStyles.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About the College Online Voting System</h1>

      <section>
        <h2>Purpose</h2>
        <p>
          The primary goal of our online voting system is to provide an accessible, transparent, and efficient means for students, faculty, and staff to participate in various elections, polls, and decision-making processes conducted within the college.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li><strong>Secure and Transparent Voting:</strong> Our system ensures the security and integrity of the voting process.</li>
          <li><strong>Accessibility and Convenience:</strong> Accessible from any internet-enabled device.</li>
          <li><strong>Real-time Results:</strong> Instant tabulation of votes provides real-time updates on election progress.</li>
          <li><strong>Multiple Election Types:</strong> Supporting various election types.</li>
        </ul>
      </section>

      <section>
        <h2>How It Works</h2>
        <p>
          Our system operates through a user-friendly interface where eligible users can log in securely, view active elections, cast their votes, and track election results.
        </p>
      </section>

      <section>
        <h2>Benefits</h2>
        <ul>
          <li><strong>Enhanced Participation:</strong> Empowering every eligible member of our college community to participate.</li>
          <li><strong>Efficiency and Transparency:</strong> Digitizing the voting process eliminates manual ballot counting.</li>
          <li><strong>Environmental Impact:</strong> Reducing paper consumption aligns with our commitment to environmental sustainability.</li>
        </ul>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          We encourage all eligible members of the college community to utilize the College Online Voting System actively. Your participation contributes to shaping our college's future.
        </p>
        <p>
          For queries, support, or feedback, please reach out to our support team at <a href="mailto:support@examplecollege.edu">support@examplecollege.edu</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
