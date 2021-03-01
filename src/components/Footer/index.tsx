import React, { useContext } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

const Footer: React.FC<Props> = ({ toggleTheme }) => {
    //const [isDarkMode, setIsDarkMode] = useState( () => false);
    const { title } = useContext(ThemeContext);

    return (
        <Container>
            <DarkModeToggle
                /* onChange={setIsDarkMode}
                checked={isDarkMode} */
                onChange={toggleTheme}
                checked={title === 'dark'}
                size={80}
            />
        </Container>
    );
}

export default Footer;