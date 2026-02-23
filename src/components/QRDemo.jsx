import { portfolioData } from "../data/portfolioData";

const QRDemo = () => {
  return (
    <section>
      <h2 className="section-title">QR Verification Live Demo</h2>
      <div className="qr-box">
        <img src={portfolioData.qrDemoImage} alt="QR Demo" />
        <p>
          Real-time QR verification system where scanning QR redirects to a
          secure verified student profile with project details.
        </p>
      </div>
    </section>
  );
};

export default QRDemo;