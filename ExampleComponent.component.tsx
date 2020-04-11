import React from "react"
import * as Styled from "./ExampleComponent.styles"

interface ExampleComponentProps {
  children: React.ReactNode
}

function ExampleComponent(props: ExampleComponentProps): JSX.Element {
  const { children } = props

  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default ExampleComponent as React.FC
