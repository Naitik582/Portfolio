import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-content"> 
          <h1 className="name">Naitik Kanojiya</h1>
          <h2 className="role">
            Data Scientist | Machine Learning Engineer | Python, R, SQL
          </h2>
          <p className="tagline">
            I architect data-driven solutions and leverage machine learning to
            uncover strategic insights, transforming complex data into impactful
            business outcomes.
          </p>
          <div className="buttons">
            <a href="#work" className="btn primary">
              Explore My Work
            </a>
            <a href="/resume.pdf" className="btn secondary" download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about">
        <h2 className="section-title">About Me</h2>
        <p className="about-intro">
          As a forward-thinking Data Scientist, I architect innovative solutions
          that transform raw data into strategic assets for global enterprises.
          I thrive on solving complex challenges and driving business growth
          through predictive insights and analytical excellence.
        </p>

        <div className="about-content">
          <h3>⚡ Engineering Insight, Driving Impact</h3>
          <p>
            My work is centered at the intersection of data, technology, and
            business strategy. I specialize in building end-to-end machine
            learning pipelines and leveraging tools like <b>Python, R, and SQL</b>{" "}
            to extract actionable intelligence that informs high-stakes
            decisions.
          </p>
          <p>
            I am passionate about mentoring and collaborating within
            cross-functional teams to foster a data-first culture. My goal is to
            not only answer complex questions but to empower organizations to
            anticipate future trends and seize new opportunities.
          </p>
        </div>
      </section>

      {/* ===== Work Experience Section ===== */}
      <section className="experience" id="work">
        <h2 className="section-title">Work Experience</h2>
        <p className="about-intro">
          A history of my professional roles and key accomplishments.
        </p>

        <div className="experience-grid">
          <div className="experience-card">
            <h3>Data Analytics Intern</h3>
            <h4>Oasis Infobyte (IT Services & IT Consulting), Remote | March 2025 – April 2025</h4>
            <p>
              Completed a virtual internship involving real-world, industry-based
              projects like EDA, Fraud Detection, and Sentiment Analysis.
              Performed data cleaning, preprocessing, visualization, and
              predictive modeling using Python and its scientific computing
              stack.
            </p>
            <div className="tags">
              Python | Pandas | NumPy | Matplotlib | SQL | Scikit-learn | Heatmap | Spyder | Jupyter | Anaconda
            </div>
          </div>

          <div className="experience-card">
            <h3>Python Developer Intern</h3>
            <h4>VirtuNexa (IT Servies & IT Consulting), Remote | Jan 2025 – Feb 2025</h4>
            <p>
              Developed a personal finance tracker application using Python. This
              project involved creating scripts to track income, manage expenses,
              and generate financial summaries, demonstrating skills in data
              handling and application development.
            </p>
            <div className="tags">Python | Debugging | Testing | Django | Frameworks</div>
          </div>

          <div className="experience-card">
            <h3>Java Programming Intern</h3>
            <h4>VaultofCodes | March 2025 – April 2025</h4>
            <p>
              Learned Java fundamentals and OOP concepts. Built a console-based
              To-Do List application with file handling for data persistence and
              uploaded all code to GitHub.
            </p>
            <div className="tags">Java | OOP | File I/O | Functions | Loops | Data Types</div>
          </div>

          <div className="experience-card">
            <h3>Sales Executive</h3>
            <h4>Reliance General Insurance | May 2024 – July 2024</h4>
            <p>
              Developed communication and sales skills in a corporate
              environment. Gained experience in client relations and meeting
              sales targets.
            </p>
            <div className="tags">Big Data | Communication | Client Relations | Excel</div>
          </div>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section className="projects">
        <h2 className="section-title">Projects</h2>
        <p className="about-intro">
          A showcase of my key projects highlighting real-world problem solving.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>🍷 Wine Quality Prediction (Machine Learning)</h3>
            <h4>Duration: 28-04-2025 TO 03-04-2025</h4>
            <p>
              Predicted wine quality using chemical properties dataset (acidity,
              sugar, alcohol, pH).
            </p>
            <ul>
              <li>Cleaned and preprocessed data → improved dataset quality by 20%.</li>
              <li>
                Trained and compared ML models (Random Forest, SGD, SVC) with
                GridSearchCV.
              </li>
              <li>
                Achieved best performance with Random Forest – 87% accuracy & 0.85
                F1-score.
              </li>
              <li>
                Created clear visualizations (feature importance, confusion matrix)
                to explain results.
              </li>
            </ul>
            <div className="tags">
              Support Vector Classifier | Python | Pandas | Seaborn | Algorithms | Matplotlib | 
            </div>
          </div>

          <div className="project-card">
            <h3>🛒 Retail Sales (EDA)</h3>
            <h4>Duration: 11-03-2025 TO 16-03-2025</h4>
            <p>
              Performed Exploratory Data Analysis on sales transactions, customer
              details, purchasing behaviour and products.
            </p>
            <ul>
              <li>Cleaned and standardized dataset → reduced errors by 22%.</li>
              <li>
                Conducted time-series analysis → found sales peaks 30% higher during
                festivals.
              </li>
              <li>
                Customer insights: 30% revenue from repeat buyers, avg. spend 2×
                higher.
              </li>
              <li>
                Identified top 5 categories contributing 55% of sales; suggested
                inventory focus.
              </li>
              <li>
                Visualized data with bar charts, line plots, and heatmaps → reduced
                reporting effort by 40%.
              </li>
            </ul>
            <div className="tags">
              Python | Pandas | NumPy | Matplotlib | SQL | Power BI | Data Visualization | Reports | Data Cleaning | Customer & Product Analysis
            </div>
          </div>
        </div>
      </section>

       {/* ===== Skills & Certifications Section ===== */}
      <section className="skills-section">
        <h2 className="section-title">Skills & Certifications</h2>
        <p className="section-subtitle">
          My technical toolkit and professional credentials.
        </p>

        <div className="skills-certifications-container">
          {/* Skills / Data Science Tools */}
          <div className="skills-box">
            <h3>Skills</h3>

            <div className="skill">
              <span>Python (Pandas, NumPy, Scikit-learn)</span>
              <div className="progress-bar">
                <div style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span>SQL, Power BI, Tableau</span>
              <div className="progress-bar">
                <div style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span>R, Linux, Java, HTML</span>
              <div className="progress-bar">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span>Advanced Excel, HLOOKUP, VLOOKUP, Pivot Tables, Pivot Charts</span>
              <div className="progress-bar">
                <div style={{ width: "88%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span>Machine Learning, Tensor Flow, Scikit-learn</span>
              <div className="progress-bar">
                <div style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="skill">
              <span>Communication, Adaptability, Teamwork, Client Relatio</span>
              <div className="progress-bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-box">
           <h3>Certifications</h3>
           <div className="certifications-list">
           <div className="certification-card">Java Programming</div>
           <div className="certification-card">
            Career Essentials in Data Analysis by Microsoft and LinkedIn
           </div>
           <div className="certification-card">Data Analytics</div>
           </div>
          </div>
        </div>
      </section>

      {/* ===== Education Section ===== */}
      <section className="education-section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>Bachelor of Commerce (B.Com)</h3>
          <h4>Shaheed Bhagat Singh Evening College, (University of Delhi)</h4>
          <p>August 2023 – August 2026</p>
        </div>
      </section>
       {/* ===== Contact Section ===== */}
      <section className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, creative projects, or
          potential collaborations. Feel free to reach out through any of the
          channels below.
        </p>

        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:manitikr980@gmail.com">
                  manitikr980@gmail.com
                </a>
              </p>
            </div>

            <div className="info-card">
              <h3>Phone</h3>
              <p>
                <a href="tel:+919310868233">+91 9310868233</a>
              </p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>New Delhi, India</p>
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <a
                href="https://github.com/Naitik582"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/naitik-kanojiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="your@email.com" required />
              <input type="text" placeholder="Title (ex:- Job, Resume)" required />
              <textarea
                rows="5"
                placeholder="Tell me about yourself & why you wanna connect with me..?" required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;