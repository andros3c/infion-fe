import { css } from "@emotion/css";

export default function Button({ children, color }) {
  const styled = {
    root: css`
      :hover {
        cursor: pointer;
      }
      background-color: ${color};
      border-radius: 38px;
      border: 0px;
      color: white;
      padding: 8px 25px;
      font-family: "Lato", sans-serif;
      font-weight: var(--bold);
      line-height: 19.2px;
      letter-spacing: 1px;
      font-size: var(--super-small-font);
    `,
  };

  return <button className={styled.root}>{children}</button>;
}
