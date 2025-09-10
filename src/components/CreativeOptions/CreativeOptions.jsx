import React, { useState } from "react";
import { Check } from "@mui/icons-material"; // Import the MUI Check icon
import styles from "./CreativeOptions.module.scss";

import option1Img from "../../assets/Promt-gen 1.svg";
import option2Img from "../../assets/Promt gen 2.svg";
import option3Img from "../../assets/Promt gen 3.svg";
import option4Img from "../../assets/Promt gen 4.svg";
import userAvatar from "../../assets/react.svg";

export default function CreativeOptions() {
  const [selectedOption, setSelectedOption] = useState(1);

  const renderOption = (id, title, image, badge) => (
    <div
      key={id}
      className={`${styles.optionCard} ${
        selectedOption === id ? styles.selected : ""
      }`}
      onClick={() => setSelectedOption(id)}
    >
      <div className={styles.optionHeader}>
        <h3>{title}</h3>
        <button className={styles.menuBtn} aria-label="menu">
          ⋮
        </button>
      </div>
      <div className={styles.socialCard}>
        <div className={styles.brandRow}>
          <img src={userAvatar} alt="Shell" className={styles.brandAvatar} />
          <span className={styles.brandName}>Shell</span>
        </div>

        <div className={styles.imageWrap}>
          <img src={image} alt={title} className={styles.image} />
          <span className={styles.imageBadge}>{badge}</span>
        </div>

        <div className={styles.actionsRow}>
          <span className={styles.icon}>♡</span>
          <span className={styles.icon}>💬</span>
          <span className={styles.icon}>✈️</span>
          <span className={`${styles.icon} ${styles.bookmark}`}>🔖</span>
        </div>
      </div>
      <p className={styles.description}>
        Embracing the rhythm of the daily journey. A coffee, a quick connection,
        a moment of comfort – it’s all part of the routine. Shell makes these
        everyday stops feel effortless. 🚗☕
      </p>
      {selectedOption === id && <Check className={styles.footerTick} />}{" "}
      {/* Replaced with MUI Check icon */}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {renderOption(1, "Option 1", option1Img, "Final 1")}
      {renderOption(2, "Option 2", option2Img, "Final 2")}

      <aside className={styles.rightPanel}>
        <div className={styles.alternatives}>
          <h4>Alternatives</h4>
          <div className={styles.altImages}>
            <div className={styles.altThumb}>
              <img src={option3Img} alt="Option 3" />
              <span className={styles.altLabel}>Option 3</span>
            </div>
            <div className={styles.altThumb}>
              <img src={option4Img} alt="Option 4" />
              <span className={styles.altLabel}>Option 4</span>
            </div>
          </div>
        </div>

        <div className={styles.feedbackSection}>
          <h4>Feedback</h4>
          <div className={styles.feedbackCard}>
            <div className={styles.commentTop}>
              <img src={userAvatar} alt="Arun" className={styles.avatar} />
              <span className={styles.commentName}>Arun</span>
            </div>
            <div className={styles.commentBody}>
              <span className={styles.badge}>Final 1</span>
              <p>Looks great! Let’s get this published.</p>
            </div>
          </div>
        </div>

        <div className={styles.actionsBottom}>
          <button className={styles.requestBtn}>✏️ Request Changes</button>
          <button className={styles.approveBtn}>Approve & Publish ✔</button>
        </div>
      </aside>
    </div>
  );
}
