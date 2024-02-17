import { Children } from "react";

export const SectionList = ({ title, type, children }) => {
  if (Children.count(children) === 0) {
    return null;
  }

  let className = "";

  switch (type) {
    case "column":
      className = "list-column";
      break;
    case "grid":
      className = "list-grid";
      break;
    default:
      className = "list-column";
  }

  return (
    <section className="list">
      {title ? (
        <>
          <h3 className="h3-text list__title">{title}</h3>
          <div className="divider"></div>
        </>
      ) : null}

      <ul className={className}>
        {Children.map(children, (child) => {
          return <li>{child}</li>;
        })}
      </ul>
    </section>
  );
};
