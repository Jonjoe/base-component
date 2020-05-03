import React from "react"
import * as Styled from "./ExampleComponent.styles"

/**
 * @name ExampleComponent
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */


export type ExampleComponentProps {
  children: React.ReactNode
}

const ExampleComponent: React.FC<ExampleComponentProps> = (props: ExampleComponentProps): JSX.Element => {
  const { children } = props

  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default ExampleComponent
