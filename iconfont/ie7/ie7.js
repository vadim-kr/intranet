/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'internalTX\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-Phone': '&#xe90e;',
		'icon-Quote': '&#xe90f;',
		'icon-Trend-down': '&#xe910;',
		'icon-Trend-up': '&#xe911;',
		'icon-Arrow-left': '&#xe90a;',
		'icon-Arrow-right': '&#xe90b;',
		'icon-Mail': '&#xe90c;',
		'icon-Skype-icon': '&#xe90d;',
		'icon-Document': '&#xe909;',
		'icon-Pizza': '&#xe905;',
		'icon-Lightning': '&#xe906;',
		'icon-Edit': '&#xe907;',
		'icon-Expand': '&#xe908;',
		'icon-Close': '&#xe904;',
		'icon-Search': '&#xe903;',
		'icon-Checkmark': '&#xe900;',
		'icon-Comment': '&#xe901;',
		'icon-Like': '&#xe902;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
