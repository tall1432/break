import React from 'react';

const SimpleHero = ({children}) => {
    return (
        <footer className = "defaultHero">
            {children}
        </footer>
    );
}

export default SimpleHero;
