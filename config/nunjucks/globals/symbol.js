/**
 * Add SVG symbol
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 *
 * @example: {{ symbol('iconName') | safe }}
 */

export default (symbol, classes) => {
    return `<svg class="${classes || ''}">
		<use xlink:href="assets/images/symbol.svg#icon-${symbol}"/>
	</svg>`
}
