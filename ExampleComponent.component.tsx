import React from "react";

import "./ExampleComponent.scss"

/**
 * @name ExampleComponent
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type ExampleComponentProps = {
  children: React.ReactNode;
};

const ExampleComponent: React.FC<ExampleComponentProps> = (
  props
): JSX.Element => {
  const { children } = props;

  return (
    <div className="ExampleComponent">
      <p>Some Content</p>
      {children}
    </div>
  );
};

export default ExampleComponent;
