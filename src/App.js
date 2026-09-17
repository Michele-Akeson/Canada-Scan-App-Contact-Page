import React from "react";
import logo from "./Canada-App-logo.png";
import cscan from "./cscan.png";
import cscan1 from "./cscan1.png";
import cscan2 from "./cscan2.png";

const App = () => {
  return (
    <div style={styles.container}>
      {/* Header Image */}
      <img src={logo} alt="Canada Flag" style={styles.image} />

      {/* Title & Intro */}
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Canada Product Scanner</h1>
        <p style={styles.description}>
          Hey Canada! We hope we help you find out just how Canadian your food
          products are, eh! We currently have data on <strong>several</strong>{" "}
          products and we're doing our best to get more.
        </p>
      </div>

      <div style={styles.contact}>
        <a style={styles.description} href="https://apps.apple.com/ca/app/canadian-product-scanner/id6742205833">Download The App</a>
      </div>

      {/* How Do We Work Card */}
      <div style={styles.steps}>
        <h2 style={styles.subtitle}>How Do We Work?</h2>

        <div style={styles.step}>
          <h3 style={styles.stepTitle}>Step 1: We scan the barcode</h3>
          <p>
            First we <strong>scan the barcode</strong> to check the internet for
            important info like{" "}
            <strong>name, brand, and country of origin.</strong>
          </p>
        </div>

        <div style={styles.step}>
          <h3 style={styles.stepTitle}>
            Step 2: We Do fancy schmancy AI stuff
          </h3>
          <p>
            If we can't find any info, you can help by{" "}
            <strong>filling out the data manually</strong> or{" "}
            <strong>sending images</strong> for AI processing.
          </p>
        </div>

        <div style={styles.step}>
          <h3 style={styles.stepTitle}>
            Step 3: We try to verify what you send us
          </h3>
          <p>
            Our team double-checks the data to make sure it's accurate for
            everyone!
          </p>
        </div>
      </div>

      {/* Separate Images Card */}
      <div style={styles.imageCard}>
        <h2 style={styles.subtitle}>See It In Action</h2>

        <div style={styles.imageContainer}>
          <img
            src={cscan}
            alt="Scanning a product barcode"
            style={styles.stepImage}
          />

          <img
            src={cscan1}
            alt="AI processing"
            style={styles.stepImage}
          />

          <img
            src={cscan2}
            alt="Product verification"
            style={styles.stepImage}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div style={styles.contact}>
        <p>You can reach out at:</p>
        <a style={styles.description} href="mailto:mgakeson@gmail.com">mgakeson@gmail.com</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    paddingBottom: "50px",
  },

  image: {
    marginTop: "20px",
    width: "120px",
    height: "120px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },

  titleContainer: {
    padding: "20px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#1D3D47",
  },

  description: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
  },

  steps: {
    backgroundColor: "#fff",
    padding: "20px",
    maxWidth: "600px",
    margin: "20px auto",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },

  subtitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },

  step: {
    textAlign: "left",
    marginBottom: "20px",
  },

  stepTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0077b6",
  },

  imageCard: {
    backgroundColor: "#fff",
    padding: "25px",
    maxWidth: "900px",
    margin: "20px auto",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  stepImage: {
    width: "250px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
  },

  contact: {
    marginTop: "20px",
    fontSize: "16px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default App;