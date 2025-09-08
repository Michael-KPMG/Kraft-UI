
import { useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import styles from './ContentCard.module.scss';

import save from '../../assets/save-icon.svg';
import repeat from '../../assets/repeat-icon.svg';

export default function ContentCard({
  title = "Generation for Instagram",
  placeholder = "Fueling up for what's next, but never forgetting the small comforts. This routine pit stop at Shell keeps the connection going.",
  onRegenerate,
  onSave
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        {/* Text area panel */}
        <div
          className={styles.textPanel}
          onClick={() => setEditing(true)}
        >
          {editing ? (
            <textarea
              className={styles.textBox}
              value={value}
              autoFocus
              placeholder={placeholder}
              onBlur={() => !value && setEditing(false)}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <p className={styles.placeholder}>{value || placeholder}</p>
          )}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.regenBtn}
            onClick={onRegenerate}
          >
           <img
              src={repeat}
               alt="repeat"
               width={16}
               height={16}
                />
            Regenerate
          </button>
          <button
            className={styles.saveBtn}
            onClick={onSave}
          >Save the Copy
           <img
              src={save}
               alt="save"
               width={18}
               height={18}
                />
            
          </button>
        </div>
      </div>
    </div>
  );
}
