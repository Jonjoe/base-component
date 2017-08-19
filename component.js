/*
  | BaseComponent =================================================
  -----------------------------------------------------------------
  Basic Stateless Component.
*/

// Base Imports ====================================================
import React from 'react'
import PropTypes from 'prop-types'
import * as Styles from './styles'

// ... Imports =====================================================
// import 'something'

// Base stateless component ========================================
// --- Props:
//        prop1 - STRING (default 'defaultValue')
//        prop2 - STRING (default 'defaultValue')
//        prop3 - STRING (default 'defaultValue')
const BaseComponent = (props) => (
  <p styles={Styles}>This is a base Component</p>
)

// Component Property Validations ==================================
BaseComponent.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string
}

export default BaseComponent
