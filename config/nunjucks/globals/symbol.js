/**
 * Add SVG symbol.
 *
 * @author bingumd <bingumd@gmail.com>
 * @since 0.1.0
 *
 * @example: {{ symbol('iconName') | safe }}
 *
 * ! @note Using ES modules syntax is not yet possible.
 */

module.exports = symbol => {
    return `<svg class="c-symbol c-symbol--${symbol}">
		<use xlink:href="assets/images/symbol.svg#icon-${symbol}"/>
	</svg>`
}
