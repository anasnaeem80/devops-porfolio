import React, { useEffect, useRef, useState } from "react";

const SectionWrapper = ({ id, children, className = "" }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    // Check if this section was already viewed in this session
    const viewedSections = sessionStorage.getItem("viewedSections");
    if (viewedSections) {
      const sections = JSON.parse(viewedSections);
      return sections.includes(id);
    }
    return false;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Store in sessionStorage that this section was viewed
            const viewedSections = sessionStorage.getItem("viewedSections");
            const sections = viewedSections ? JSON.parse(viewedSections) : [];
            if (!sections.includes(id)) {
              sections.push(id);
              sessionStorage.setItem(
                "viewedSections",
                JSON.stringify(sections),
              );
            }
            // Stop observing once visible
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current && !isVisible) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, isVisible]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
