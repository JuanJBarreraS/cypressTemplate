/**
 * TODO:
 * - Move elements to unique files to reduce the complexity of the code
 *
 * - Implement throw exceptions in usages like call Elements without passing attributes
 * i.e.
 * const myInput = Input() // should throw an error
 *
 * - Try to hide attributes (let only methods) in returned objects (using JSDocs)
*/

function invalidFunction () {
  throw new Error('This function is not defined')
}

function type (text) {
  if (!this.getElement) throw new Error('Function getElement not defined')
  this.getElement().type(text)
}

function getElementByAttributes () {
  const selector = createBaseStringSelector(this)
  return cy.get(selector)
}

function getElementByXpath () {
  if (cy.xpath === undefined) throw new Error('cy.xpath is not defined')
  return cy.xpath(this.xpath)
}
const createBaseStringSelector = (context) => {
  if (!context) throw new Error('This is not defined')
  const { attributes, tag } = context
  if (!tag) throw new Error('No tag defined')
  let selector = tag
  for (const key in attributes) {
    selector += `[${key}='${attributes[key]}']` // input[type='text'][data-testid="sadasas"]
  }
  if (selector === tag) throw new Error('No selectors defined')
  return selector
}
function getElementByAttributesAndText () {
  let selector = createBaseStringSelector(this)
  selector += `:contains('${this.text}')`
  return cy.get(selector)
}

function getElement () {
  const haveAttributes = Object.keys(this?.attributes ?? {}).length
  if (this.text && haveAttributes) return this.getElementByAttributesAndText()
  if (this.text) return this.getElementByText()
  if (haveAttributes) return this.getElementByAttributes()
  if (this.xpath) return this.getElementByXpath()
  throw new Error('Element doesn\'t have selectors')
}

function click () { this.getElement().click() }

function forceClick () {
  this.getElement().click({ force: true })
}

function multipleClick () {
  this.getElement().click({ multiple: true })
}

function verifyElementPresent () {
  this.getElement().should('be.visible')
}

function verifyElementNotFound () {
  this.getElement().should('not.exist')
}

function clear () {
  this.getElement().clear()
}

function getElementByText () {
  return cy.contains(this.tag, this.text)
}

function verifyElementDisabled () {
  this.getElement().should('be.disabled')
}

function verifyElementHover () {
  this.getElement().trigger('mousemove')
}

const genericElement = {
  getElement,
  getElementByAttributesAndText,
  getElementByAttributes,
  getElementByXpath,
  getElementByText,
  verifyElementPresent,
  verifyElementNotFound,
  verifyElementDisabled,
  verifyElementHover,
  click,
  forceClick,
  multipleClick,
  attributes: {},
  tag: '',
  classNames: []
}

/**
 * @param {object} properties - pass and object with the following properties
 * @param {object=} properties.attributes - the attributes of the element
 * @param {string=} properties.text - the text of the element
 */

const Input = (properties) => {
  return {
    ...genericElement,
    tag: 'input',
    type,
    clear,
    ...properties
  }
}

/**
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */

const Button = (properties) => {
  return {
    ...genericElement,
    tag: 'button',
    ...properties
  }
}

/**
 *
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */

const Div = (properties) => {
  return {
    ...genericElement,
    tag: 'div',
    ...properties
  }
}

/**
 *
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element

 */

const P = (properties) => {
  return {
    ...genericElement,
    tag: 'p',
    ...properties
  }
}

/**
 *
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */
const Span = (properties) => {
  return {
    ...genericElement,
    tag: 'span',
    ...properties
  }
}

/**
 *
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */
const TextArea = (properties) => {
  return {
    ...genericElement,
    tag: 'textarea',
    clear,
    type,
    ...properties
  }
}

/**
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */
const A = (properties) => {
  return {
    ...genericElement,
    tag: 'a',
    ...properties
  }
}

/**
 *
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 */
const Svg = (properties) => {
  return {
    ...genericElement,
    tag: 'svg',
    ...properties
  }
}

/**
 * @param {number} hNumber - the number of the header
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */
const H = (hNumber, properties) => {
  if ([1, 2, 3, 4, 5, 6].indexOf(hNumber) === -1) throw new Error('H number must be between 1 and 6')
  return {
    ...genericElement,
    tag: `h${hNumber}`,
    ...properties
  }
}

function selectOption (option = '+57') {
  this.getElement().select(option)
}

/**
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */

const Select = (properties) => {
  return {
    ...genericElement,
    tag: 'select',
    selectOption,
    click: invalidFunction,
    ...properties
  }
}

/**
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */
const Label = (properties) => {
  return {
    ...genericElement,
    tag: 'label',
    ...properties
  }
}

/**
 * @param {object} properties - pass and object with the following properties
 * @param {object} properties.attributes - the attributes of the element
 * @param {string} properties.text - the text of the element
 */

const CheckBox = (properties) => {
  return {
    ...genericElement,
    tag: 'input',
    ...properties,
    attributes: { // override attributes adding type
      type: 'checkbox',
      ...properties.attributes
    }
  }
}

export {
  Input,
  Button,
  Div,
  P,
  Span,
  A,
  Svg,
  H,
  TextArea,
  Select,
  Label,
  CheckBox
}
