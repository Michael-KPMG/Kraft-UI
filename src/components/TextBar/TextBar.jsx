import { useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import styles from './TextBar.module.scss';

import mic from '../../assets/mic_icon.svg';
import regen from '../../assets/regen.svg';
import arr from '../../assets/upload_arr.svg';

export default function TextBar({ label = "Write your prompt here...", showRegenerate = true, onRegenerate }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.textBarContainer}>
      <div className={styles.textBar} role="region" aria-label="Prompt block">
        {/* Top panel */}
        <div
          className={styles.textAreaPanel}
          onClick={() => setEditing(true)}
        >
          {editing ? (
            <textarea
              className={styles.textBox}
              value={value}
              autoFocus
              placeholder={label}
              onBlur={() => !value && setEditing(false)} // go back to placeholder if empty
              onChange={(e) => setValue(e.target.value)}
              rows={3}
            />
          ) : (
            <p className={styles.placeholder}>{value || label}</p>
          )}
        </div>

        {/* Bottom panel */}
        <div className={styles.actionsPanel}>
          {showRegenerate && (
            <button
              type="button"
              className={styles.regenBtn}
              onClick={onRegenerate}
            >
              <span className={styles.iconBox} aria-hidden="true">
                <img
                src={regen}
                alt="regen"
                width={20}
                height={20}
              />
              </span>
              Regenerate the prompt
            </button>
          )}

          <div className={styles.rightIcons}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Voice input"
            >
              <img
                src={mic}
                alt="Mic icon"
                width={16}
                height={16}
              />
            </button>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Upload"
            >
              <img
                src={arr}
                alt="Upload icon"
                width={20}
                height={20}
                style={{ marginLeft: '-5px', marginTop: '-2px' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
// import MicIcon from '@mui/icons-material/Mic';
// import UploadIcon from '@mui/icons-material/Upload';
// import styles from './TextBar.module.scss';

// export default function TextBar({ label, showRegenerate = true, onRegenerate }) {
//   return (
//     <div className={styles.textBar} role="region" aria-label="Prompt block">
//       <div className={styles.surface}>
//         <p className={styles.label}>{label}</p>

//         <div className={styles.actions}>
//           {showRegenerate && (
//             <button
//               type="button"
//               className={styles.regenBtn}
//               onClick={onRegenerate}
//             >
//               <span className={styles.iconBox} aria-hidden="true">
//                 <CreateOutlinedIcon />
//               </span>
//               Regenerate the prompt
//             </button>
//           )}

//           <div className={styles.rightIcons}>
//             <button
//               type="button"
//               className={styles.iconBtn}
//               aria-label="Voice input"
//             >
//               <MicIcon fontSize="small" />
//             </button>
//             <button
//               type="button"
//               className={styles.iconBtn}
//               aria-label="Upload"
//             >
//               <UploadIcon fontSize="small" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }