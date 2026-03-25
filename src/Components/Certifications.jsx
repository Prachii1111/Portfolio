import { useState } from "react";
import "./certifications.css";

export default function Certifications() {
    const [showAll, setShowAll] = useState(false);

    const certificates = [
        "/cert1.png",
        "/cert2.png",
        "/cert3.png",
        "/cert4.png",
        "/cert5.png",
        "/cert6.png",
    ];

    const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

    return (
        <section className="certifications-section">
            <div className="certificate-heading">
                <h3>Certifications</h3>
                <p>Theoretical foundations that power my practical solutions</p>
                <div className="bar"></div>
            </div>

            <button
                className="view-all-btn"
                onClick={() => setShowAll((prev) => !prev)}
            >
                {showAll ? "Show Less" : "View All"}
            </button>

            <div className={`certificates-container ${showAll ? "scroll" : ""}`}>
                {visibleCertificates.map((cert, index) => (
                <div className="certificate-card" key={index}>
                    <img src={cert} alt="certificate" />
                </div>
                ))}
            </div>
        </section>
    );
}
