import React, { useEffect, useState } from 'react';
import MenuBarPresenter from './MenuBarPresenter';


export default () => {
    const [scrollFlag, setScrollFlag] = useState(false); 
    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
          window.removeEventListener("scroll", updateScroll);
        };
    }, []);
    // const handleScroll = throttle(updateScroll, 100);

    const updateScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        
        const isScrolled = scrollY > 99; // todo responsive top px
        setScrollFlag(isScrolled);
    };
	return (
        <MenuBarPresenter active={scrollFlag}/>
    )
}