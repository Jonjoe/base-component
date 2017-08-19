/*
  | BaseComponent =================================================
  -----------------------------------------------------------------
  Basic Stateless Component.
*/

// Base Imports ====================================================
// -----------------------------------------------------------------
import React from 'react'
import PropTypes from 'prop-types'

// ... Imports =====================================================
// -----------------------------------------------------------------
import './styles.css'
// import 'something'

// Component Definition ============================================
// -----------------------------------------------------------------
const BaseComponent = (props) => (
  // --- Props:
  //        prop1 - STRING (default 'defaultValue')
  //        prop2 - STRING (default 'defaultValue')
  //        prop3 - STRING (default 'defaultValue')

  <p styles={Styles}>This is a base Component</p>
)

// Component Property Validations ==================================
// -----------------------------------------------------------------
BaseComponent.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string
}

// Export ==========================================================
// -----------------------------------------------------------------
export default BaseComponent
