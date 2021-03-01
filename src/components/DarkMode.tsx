import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

import styles from '../styles/components/DarkMode.module.css'

export function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState( () => false);
    
    return (
        <div className={styles.darkModeButtom}>
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            />
        </div>
    );
}