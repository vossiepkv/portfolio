import { useEffect, useRef, useState } from "react";
import "./FadeIn.css"; // Make sure this file exists

export default function FadeIn({ children, duration = 0, className }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, duration);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [duration]);

    return (
        <div
            ref={elementRef}
            className={`fade-in ${isVisible ? "visible" : "hidden"} ${className}`}
        >
            {children}
        </div>
    );
}
