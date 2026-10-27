import "./Research.css";

function Research() {
  return (
    <main className="research-page">

      {/* Header */}
      <section className="research-header">

        <h1>
          Research, Internships &
          <span> Practical Experience.</span>
        </h1>

        <p>
          My academic journey combines computer science fundamentals with
          practical experience in software development, defence technology,
          networking, and research-oriented problem solving.
        </p>
      </section>


      {/* Experience Timeline */}
      <section className="experience-section">

        <div className="section-heading">
          <span className="heading-line"></span>
          <h2>Internships & Practical Training</h2>
        </div>


        {/* DRDO */}
        <article className="experience-card">

          <div className="experience-marker">
            <div className="marker-dot"></div>
          </div>

          <div className="experience-content">

            <div className="experience-top">
              <div>
                <span className="experience-type">
                  PRACTICAL TRAINING
                </span>

                <h3>Defence Laboratory, Jodhpur — DRDO</h3>

                <p className="experience-role">
                  Software Development & Research Intern
                </p>
              </div>

              <span className="experience-date">
                June – July 2026
              </span>
            </div>


            <div className="experience-body">

              <h4>Defence Asset Tracking & Geofencing System</h4>

              <p>
                Developed a Defence Asset Tracking & Geofencing System
                designed to streamline the management and monitoring of
                defence assets.
              </p>

              <p>
                The system combines asset registration, location monitoring,
                geofencing and backend database functionality to provide a
                structured approach to tracking assets and identifying
                location-based events.
              </p>

              <div className="experience-highlights">
                <span>Asset Tracking</span>
                <span>Geofencing</span>
                <span>Location Monitoring</span>
                <span>Backend Development</span>
                <span>Database Management</span>
              </div>

            </div>

          </div>

        </article>


        {/* Dhurav Star */}
        <article className="experience-card">

          <div className="experience-marker">
            <div className="marker-dot"></div>
          </div>

          <div className="experience-content">

            <div className="experience-top">
              <div>
                <span className="experience-type">
                  INTERNSHIP
                </span>

                <h3>Dhurav Star Pvt. Ltd.</h3>

                <p className="experience-role">
                  Web Development Intern
                </p>
              </div>

              <span className="experience-date">
                June – July 2025
              </span>
            </div>


            <div className="experience-body">

              <h4>Movie Booking System</h4>

              <p>
                Developed a web-based movie booking system that allows users
                to browse movies, select seats, view schedules and manage
                ticket bookings through a user-friendly interface.
              </p>

              <p>
                The project involved implementing authentication,
                booking records, CRUD operations, input validation and
                database-driven functionality.
              </p>

              <div className="experience-highlights">
                <span>Web Development</span>
                <span>JavaScript</span>
                <span>CRUD</span>
                <span>Database</span>
                <span>Authentication</span>
              </div>

            </div>

          </div>

        </article>

      </section>


      {/* Research Interests */}
      <section className="research-interests">

        <div className="section-heading">
          <span className="heading-line"></span>
          <h2>Research Interests</h2>
        </div>

        <p className="interests-intro">
          Areas of computer science that I am currently exploring and
          developing deeper technical understanding in.
        </p>


        <div className="interest-grid">

          <div className="interest-card">
            <span className="interest-number">01</span>
            <h3>Artificial Intelligence & Machine Learning</h3>
            <p>
              Exploring intelligent systems, machine learning concepts
              and pattern-based approaches to solving computational problems.
            </p>
          </div>


          <div className="interest-card">
            <span className="interest-number">02</span>
            <h3>Data Structures & Algorithms</h3>
            <p>
              Strengthening algorithmic thinking, problem solving and
              computational efficiency through continuous practice.
            </p>
          </div>


          <div className="interest-card">
            <span className="interest-number">03</span>
            <h3>Full-Stack Web Development</h3>
            <p>
              Building practical applications while exploring modern
              frontend, backend, database and API architectures.
            </p>
          </div>


          <div className="interest-card">
            <span className="interest-number">04</span>
            <h3>Cybersecurity & Networking</h3>
            <p>
              Developing an understanding of secure systems, computer
              networks and reliable communication technologies.
            </p>
          </div>


          <div className="interest-card">
            <span className="interest-number">05</span>
            <h3>Emerging Technologies</h3>
            <p>
              Continuously exploring new technologies and modern approaches
              that can improve the way software and computing systems are built.
            </p>
          </div>

        </div>

      </section>


      {/* Research Direction */}
      <section className="research-direction">

        <div className="direction-content">

          <div className="direction-label">
            <span
              className="direction-status-dot"
              aria-hidden="true"
            />
            Current Direction
          </div>

          <h2>
            Learning through
            <span> theory + implementation.</span>
          </h2>

          <p>
            My approach to computer science is to combine theoretical
            foundations with practical implementation. I am particularly
            interested in projects where software engineering, algorithms,
            networking and emerging technologies come together to solve
            real-world problems.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Research;