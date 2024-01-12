/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // handler for back and forward link
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handler);

        // cleaner
        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        // to === '/accordion'
        window.history.pushState({}, '', to);

        setCurrentPath(to);
    }

    return(
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

export {NavigationProvider};
export default NavigationContext;