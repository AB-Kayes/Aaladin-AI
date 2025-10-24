// Decorative section crosses removed to disable editor/guide overlays

const Section = ({ className, id, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`
      relative 
  ${customPaddings || `py-10 lg:py-16 xl:py-20`} 
      ${className || ""}`}
    >
      {children}

  {/* decorative vertical borders and plus-cross overlays removed */}
    </div>
  );
};

export default Section;
