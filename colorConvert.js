var colorConvert = {
  //颜色名称和16进制对应表
  dict_name2Hex: {
    "maroon": "#800000",
    "darkred": "#8B0000",
    "brown": "#A52A2A",
    "firebrick": "#B22222",
    "crimson": "#DC143C",
    "red": "#FF0000",
    "mediumvioletred": "#C71585",
    "palevioletred": "#D87093",
    "deeppink": "#FF1493",
    "fuchsia": "#FF00FF",
    "magenta": "#FF00FF",
    "hotpink": "#FF69B4",
    "pink": "#FFC0CB",
    "lightpink": "#FFB6C1",
    "mistyrose": "#FFE4E1",
    "lavenderblush": "#FFF0F5",
    "indigo": "#4B0082",
    "purple": "#800080",
    "darkmagenta": "#8B008B",
    "darkorchid": "#9932CC",
    "blueviolet": "#8A2BE2",
    "darkviolet": "#9400D3",
    "slateblue": "#6A5ACD",
    "mediumpurple": "#9370DB",
    "mediumslateblue": "#7B68EE",
    "mediumorchid": "#BA55D3",
    "violet": "#EE82EE",
    "plum": "#DDA0DD",
    "thistle": "#D8BFD8",
    "lavender": "#E6E6FA",
    "saddlebrown": "#8B4513",
    "sienna": "#A0522D",
    "chocolate": "#D2691E",
    "indianred": "#CD5C5C",
    "rosybrown": "#BC8F8F",
    "lightcorol": "#F08080",
    "salmon": "#FA8072",
    "lightsalmon": "#FFA07A",
    "orangered": "#FF4500",
    "tomato": "#FF6347",
    "coral": "#FF7F50",
    "darkorange": "#FF8C00",
    "sandybrown": "#F4A460",
    "peru": "#CD853F",
    "tan": "#D2B48C",
    "burlywood": "#DEB887",
    "wheat": "#F5DEB3",
    "moccasin": "#FFE4B5",
    "navajowhite": "#FFDEAD",
    "peachpuff": "#FFDAB9",
    "bisque": "#FFE4C4",
    "antuquewhite": "#FAEBD7",
    "papayawhip": "#FFEFD5",
    "cornsilk": "#FFF8DC",
    "oldlace": "#FDF5E6",
    "linen": "#FAF0E6",
    "seashell": "#FFF5EE",
    "snow": "#FFFAFA",
    "floralwhite": "#FFFAF0",
    "ivory": "#FFFFF0",
    "mintcream": "#F5FFFA",
    "darkgoldenrod": "#B8860B",
    "goldenrod": "#DAA520",
    "gold": "#FFD700",
    "yellow": "#FFFF00",
    "darkkhaki": "#BDB76B",
    "khaki": "#F0E68C",
    "palegoldenrod": "#EEE8AA",
    "beige": "#F5F5DC",
    "lemonchiffon": "#FFFACD",
    "lightgoldenrodyellow": "#FAFAD2",
    "lightyellow": "#FFFFE0",
    "darkslategray": "#2F4F4F",
    "darkolivegreen": "#556B2F",
    "olive": "#808000",
    "darkgreen": "#006400",
    "forestgreen": "#228B22",
    "seagreen": "#2E8B57",
    "green": "#008080",
    "teal": "#008080",
    "lightseagreen": "#20B2AA",
    "madiumaquamarine": "#66CDAA",
    "mediumseagreen": "#3CB371",
    "darkseagreen": "#8FBC8F",
    "yellowgreen": "#9ACD32",
    "limegreen": "#32CD32",
    "lime": "#00FF00",
    "chartreuse": "#7FFF00",
    "lawngreen": "#7CFC00",
    "greenyellow": "#ADFF2F",
    "mediumspringgreen": "#00FA9A",
    "springgreen": "#00FF7F",
    "lightgreen": "#90EE90",
    "palegreen": "#98F898",
    "aquamarine": "#7FFFD4",
    "honeydew": "#F0FFF0",
    "midnightblue": "#191970",
    "navy": "#000080",
    "darkblue": "#00008B",
    "darkslateblue": "#483D8B",
    "mediumblue": "#0000CD",
    "royalblue": "#4169E1",
    "dodgerblue": "#1E90FF",
    "cornflowerblue": "#6495ED",
    "deepskyblue": "#00BFFF",
    "lightskyblue": "#87CEFA",
    "lightsteelblue": "#B0C4DE",
    "lightblue": "#ADD8E6",
    "steelblue": "#4682B4",
    "darkcyan": "#008B8B",
    "cadetblue": "#5F9EA0",
    "darkturquoise": "#00CED1",
    "mediumturquoise": "#48D1CC",
    "turquoise": "#40E0D0",
    "skyblue": "#87CECB",
    "powderblue": "#B0E0E6",
    "paleturquoise": "#AFEEEE",
    "lightcyan": "#E0FFFF",
    "azure": "#F0FFFF",
    "aliceblue": "#F0F8FF",
    "aqua": "#00FFFF",
    "cyan": "#00FFFF",
    "black": "#000000",
    "dimgray": "#696969",
    "gray": "#808080",
    "slategray": "#708090",
    "lightslategray": "#778899",
    "dakgray": "#A9A9A9",
    "silver": "#C0C0C0",
    "lightgray": "#D3D3D3",
    "gainsboro": "#DCDCDC",
    "whitesmoke": "#F5F5F5",
    "ghostwhite": "#F8F8FF",
    "white": "#FFFFFF"
  },
  //16进制和颜色名称对应表
  dict_hex2Name: {
    "#800000": "maroon",
    "#8B0000": "darkred",
    "#A52A2A": "brown",
    "#B22222": "firebrick",
    "#DC143C": "crimson",
    "#FF0000": "red",
    "#C71585": "mediumvioletred",
    "#D87093": "palevioletred",
    "#FF1493": "deeppink",
    //"#FF00FF": "magenta",
    "#FF00FF": "fuchsia",
    "#FF69B4": "hotpink",
    "#FFC0CB": "pink",
    "#FFB6C1": "lightpink",
    "#FFE4E1": "mistyrose",
    "#FFF0F5": "lavenderblush",
    "#4B0082": "indigo",
    "#800080": "purple",
    "#8B008B": "darkmagenta",
    "#9932CC": "darkorchid",
    "#8A2BE2": "blueviolet",
    "#9400D3": "darkviolet",
    "#6A5ACD": "slateblue",
    "#9370DB": "mediumpurple",
    "#7B68EE": "mediumslateblue",
    "#BA55D3": "mediumorchid",
    "#EE82EE": "violet",
    "#DDA0DD": "plum",
    "#D8BFD8": "thistle",
    "#E6E6FA": "lavender",
    "#8B4513": "saddlebrown",
    "#A0522D": "sienna",
    "#D2691E": "chocolate",
    "#CD5C5C": "indianred",
    "#BC8F8F": "rosybrown",
    "#F08080": "lightcorol",
    "#FA8072": "salmon",
    "#FFA07A": "lightsalmon",
    "#FF4500": "orangered",
    "#FF6347": "tomato",
    "#FF7F50": "coral",
    "#FF8C00": "darkorange",
    "#F4A460": "sandybrown",
    "#CD853F": "peru",
    "#D2B48C": "tan",
    "#DEB887": "burlywood",
    "#F5DEB3": "wheat",
    "#FFE4B5": "moccasin",
    "#FFDEAD": "navajowhite",
    "#FFDAB9": "peachpuff",
    "#FFE4C4": "bisque",
    "#FAEBD7": "antuquewhite",
    "#FFEFD5": "papayawhip",
    "#FFF8DC": "cornsilk",
    "#FDF5E6": "oldlace",
    "#FAF0E6": "linen",
    "#FFF5EE": "seashell",
    "#FFFAFA": "snow",
    "#FFFAF0": "floralwhite",
    "#FFFFF0": "ivory",
    "#F5FFFA": "mintcream",
    "#B8860B": "darkgoldenrod",
    "#DAA520": "goldenrod",
    "#FFD700": "gold",
    "#FFFF00": "yellow",
    "#BDB76B": "darkkhaki",
    "#F0E68C": "khaki",
    "#EEE8AA": "palegoldenrod",
    "#F5F5DC": "beige",
    "#FFFACD": "lemonchiffon",
    "#FAFAD2": "lightgoldenrodyellow",
    "#FFFFE0": "lightyellow",
    "#2F4F4F": "darkslategray",
    "#556B2F": "darkolivegreen",
    "#808000": "olive",
    "#006400": "darkgreen",
    "#228B22": "forestgreen",
    "#2E8B57": "seagreen",
    //"#008080": "teal",
    "#008080": "green",
    "#20B2AA": "lightseagreen",
    "#66CDAA": "madiumaquamarine",
    "#3CB371": "mediumseagreen",
    "#8FBC8F": "darkseagreen",
    "#9ACD32": "yellowgreen",
    "#32CD32": "limegreen",
    "#00FF00": "lime",
    "#7FFF00": "chartreuse",
    "#7CFC00": "lawngreen",
    "#ADFF2F": "greenyellow",
    "#00FA9A": "mediumspringgreen",
    "#00FF7F": "springgreen",
    "#90EE90": "lightgreen",
    "#98F898": "palegreen",
    "#7FFFD4": "aquamarine",
    "#F0FFF0": "honeydew",
    "#191970": "midnightblue",
    "#000080": "navy",
    "#00008B": "darkblue",
    "#483D8B": "darkslateblue",
    "#0000CD": "mediumblue",
    "#4169E1": "royalblue",
    "#1E90FF": "dodgerblue",
    "#6495ED": "cornflowerblue",
    "#00BFFF": "deepskyblue",
    "#87CEFA": "lightskyblue",
    "#B0C4DE": "lightsteelblue",
    "#ADD8E6": "lightblue",
    "#4682B4": "steelblue",
    "#008B8B": "darkcyan",
    "#5F9EA0": "cadetblue",
    "#00CED1": "darkturquoise",
    "#48D1CC": "mediumturquoise",
    "#40E0D0": "turquoise",
    "#87CECB": "skyblue",
    "#B0E0E6": "powderblue",
    "#AFEEEE": "paleturquoise",
    "#E0FFFF": "lightcyan",
    "#F0FFFF": "azure",
    "#F0F8FF": "aliceblue",
    //"#00FFFF": "cyan",
    "#00FFFF": "aqua",
    "#000000": "black",
    "#696969": "dimgray",
    "#808080": "gray",
    "#708090": "slategray",
    "#778899": "lightslategray",
    "#A9A9A9": "dakgray",
    "#C0C0C0": "silver",
    "#D3D3D3": "lightgray",
    "#DCDCDC": "gainsboro",
    "#F5F5F5": "whitesmoke",
    "#F8F8FF": "ghostwhite",
    "#FFFFFF": "white"
  },
  //颜色名称转16进制 red -> #FF0000 没有找到返回undefined
  name2Hex: function(aName) {
    return this.dict_name2Hex[aName];
  },
  //颜色名称转RGB red -> [255,0,0] 没有找到返回undefined
  name2RGB: function(aName) {
    var hex = this.name2Hex(aName);
    if(!hex)
      return undefined;    
    return this.hex2RGB(hex);
  },
  //16进制转颜色名称 #FF0000 -> red 没有找到返回undefined
  hex2Name: function(hex) {
    return this.dict_hex2Name[hex];
  },
  //RGB转16进制 可以传数字 和 rgb(255,0,0) 这样的字符串
  RGB2Hex: function(r, g, b) {
    if (arguments.length > 1) {
      return this.toHexColor.apply(this, arguments)
    }
    var arr = r.split(",");
    var _r = parseInt(arr[0].split("(")[1]);
    var _g = parseInt(arr[1]);
    var _b = parseInt(arr[2]);
    return this.toHexColor(_r, _g, _b);
  },
  //RGB转16进制 只能传数字
  toHexColor: function(r, g, b) {
    var hex = '#';
    var hexStr = '0123456789ABCDEF';
    // R
    low = r % 16;
    high = (r - low) / 16;
    hex += hexStr.charAt(high) + hexStr.charAt(low);
    // G
    low = g % 16;
    high = (g - low) / 16;
    hex += hexStr.charAt(high) + hexStr.charAt(low);
    // B
    low = b % 16;
    high = (b - low) / 16;
    hex += hexStr.charAt(high) + hexStr.charAt(low);
    return hex;
  },
  //16进制转RGB
  hex2RGB: function(hex) {
    hex = hex.replace("#", "");
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
  },
  //RGB转颜色名称 rgb(255,0,0) -> red 没有找到返回undefined
  RGB2Name: function(r, g, b) {
    var hex;
    if (arguments.length > 1) {
      hex = this.RGB2Hex.apply(this, arguments);
    } else {
      hex = this.RGB2Hex.call(this, r);
    }
    return this.hex2Name(hex);
  }
};
(function (root, factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function () {
  'use strict';
  return colorConvert;
}));
