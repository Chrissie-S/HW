function toCamelCaseCyr(str) {
    return str.toLowerCase()
              .replace(/(?:\b|^|[^а-яА-Я])([а-яА-Я])/g, (all, chr) => chr.toUpperCase());
  }
  var rulers = [
    ["асПАРуХ", 681, 700],
    ["тЕРвеЛ", 700, 718],
    ["СеВаР", 738, 753],
    ["телЕРИГ", 766, 777],
    ["каРДАм", 777, 803],
    ["крум", 803, 814],
    ["ОмурТАг", 814, 831],
  ];
  for (let i = 0; i < rulers.length; i++) {
    const ruler = rulers[i];
    const reignDuration = ruler[2] - ruler[1] + 1;
    const rulerName = toCamelCaseCyr(ruler[0]);
    if (reignDuration > 15) {
      console.log(`${rulerName} е управлявал ${reignDuration} години.`);
    }
  }