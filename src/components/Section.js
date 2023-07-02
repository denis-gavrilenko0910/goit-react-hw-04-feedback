export const Section = ({ children, title }) => {
  return (
    <section>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
};
