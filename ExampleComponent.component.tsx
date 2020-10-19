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
  className?: string;
};

const ExampleComponent: React.FC<ExampleComponentProps> = (
  props
): JSX.Element => {
  const { children, className } = props;

  const classNames = `ExampleComponent ${className}`

  return (
    <div className={classNames}>
      <p>Some Content</p>
      {children}
    </div>
  );
};

export default ExampleComponent;
