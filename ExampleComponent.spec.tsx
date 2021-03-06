import React from "react";
import renderer from "react-test-renderer";

import ExampleComponent from "./ExampleComponent.component";

test("ExampleComponent renders correctly", () => {
  const component = renderer.create(
    <ExampleComponent>
      <p>child component</p>
    </ExampleComponent>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
