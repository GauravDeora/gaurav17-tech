import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Practical Training",
      subtitle: "Defence Asset Tracking & Geofencing System",
      organization: "Defence Laboratory, Jodhpur (DRDO)",
      date: "15 July 2026",
      duration: "2 June 2026 – 16 July 2026",
      certificate: "/certificates/drdo-certificate.jpg",
      tags: [
        "Defence Technology",
        "Asset Tracking",
        "Geofencing",
        "Software Development",
      ],
    },

    {
      id: 2,
      title: "Internship Program",
      subtitle: "Website Developer",
      organization: "Dhurav Star",
      date: "10 July 2025",
      duration: "3 June 2025 – 9 July 2025",
      certificate: "/certificates/dhuravstar-certificate.jpg",
      tags: [
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];

  return (
    <main className="certifications-page">

      {/* Header */}
      <section className="certifications-header">

        <h1>
          Credentials &
          <span> Achievements.</span>
        </h1>

        <p>
          A collection of certifications and professional training
          experiences that demonstrate my practical exposure to software
          development, defence technology and computer science.
        </p>
      </section>


      {/* Certificates */}
      <section className="certificates-section">

        <div className="section-heading">
          <span className="heading-line"></span>
          <h2>My Credentials</h2>
        </div>


        <div className="certificates-grid">

          {certifications.map((cert) => (

            <article className="certificate-card" key={cert.id}>

              {/* Certificate Preview */}
              <div className="certificate-image-wrapper">

                <img
                  src={cert.certificate}
                  alt={`${cert.subtitle} certificate`}
                  className="certificate-image"
                />

                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-view"
                >
                  View Certificate ↗
                </a>

              </div>


              {/* Certificate Information */}
              <div className="certificate-content">

                <span className="certificate-type">
                  {cert.title}
                </span>

                <h3>{cert.subtitle}</h3>

                <p className="certificate-organization">
                  {cert.organization}
                </p>


                <div className="certificate-details">

                  <div>
                    <span>Certificate Date</span>
                    <strong>{cert.date}</strong>
                  </div>

                  <div>
                    <span>Duration</span>
                    <strong>{cert.duration}</strong>
                  </div>

                </div>


                <div className="certificate-tags">

                  {cert.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* Bottom Section */}
      <section className="certification-note">

        <div className="certification-note-content">

          <div className="certification-note-label">
            <span
              className="certification-note-status-dot"
              aria-hidden="true"
            />
            Continuous Learning
          </div>

          <h2>
            Building knowledge through
            <span> practical experience.</span>
          </h2>

          <p>
            Certifications are one part of my learning journey. I focus on
            combining academic knowledge with real-world projects,
            internships and hands-on technical work.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Certifications;