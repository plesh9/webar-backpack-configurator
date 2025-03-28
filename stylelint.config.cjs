/* eslint-disable @typescript-eslint/no-require-imports */
const { propertyGroups } = require('stylelint-config-clean-order')

const propertiesOrder = propertyGroups.map((properties) => ({
    noEmptyLineBetween: true,
    emptyLineBefore: 'never',
    properties
}))

if (propertiesOrder.length >= 8) {
    const temp = propertiesOrder[6]

    propertiesOrder[6] = propertiesOrder[7]
    propertiesOrder[7] = temp
}

module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
    plugins: ['stylelint-order', 'stylelint-prettier'],
    rules: {
        'prettier/prettier': true,
        'block-no-empty': true,
        'scss/at-rule-no-unknown': null,
        'scss/dollar-variable-pattern': null,
        'declaration-block-no-duplicate-properties': true,
        'custom-property-pattern': null,
        'scss/at-mixin-pattern': null,
        'selector-class-pattern': null,
        'declaration-empty-line-before': null,
        'no-descending-specificity': null,
        'media-feature-range-notation': null,
        'scss/at-function-pattern': null,
        'number-max-precision': null,
        'scss/at-rule-no-unknown': null,
        'at-rule-no-unknown': null,
        'order/properties-order': [
            propertiesOrder,
            {
                severity: 'error',
                unspecified: 'bottomAlphabetical'
            }
        ]
    }
}
