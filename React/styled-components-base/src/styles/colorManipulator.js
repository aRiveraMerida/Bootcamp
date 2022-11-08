/**
* Returns a number whose value is limited to the given range.
* @param {number} value The value to be clamped
* @param {number} min The lower boundary of the output range
* @param {number} max The upper boundary of the output range
* @returns {number} A number in the range [min, max]
*/
function clamp(value, min = 0, max = 1) {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(
        `MUI: The value provided ${value} is out of range [${min}, ${max}].`
      );
    }
  }

  return Math.min(Math.max(min, value), max);
}

/**
* Converts a color from CSS hex format to CSS rgb format.
* @param {string} color - Hex color, i.e. #nnn or #nnnnnn
* @returns {string} A CSS rgb color string
*/
export function hexToRgb(color) {
  const colorPart = color.substr(1);

  const re = new RegExp(`.{1,${colorPart.length >= 6 ? 2 : 1}}`, 'g');
  let colors = colorPart.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
      .map((n, index) => {
        return index < 3
          ? parseInt(n, 16)
          : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
      })
      .join(', ')})`
    : '';
}

/**
* Returns an object with the type and values of a color.
*
* Note: Does not support rgb % values.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
* @returns {object} - A MUI color object: {type: string, values: number[]}
*/
export function decomposeColor(color) {
  // Idempotent
  if (typeof color !== 'string') {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error(
      'MUI: Unsupported `%s` color.\n' +
      'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().'
    );
  }

  const values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  let arrValues;

  if (type === 'color') {
    arrValues = values.split(' ');
    colorSpace = arrValues.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      arrValues[3] = arrValues[3].substr(1);
    }
    if (
      [
        'srgb',
        'display-p3',
        'a98-rgb',
        'prophoto-rgb',
        'rec-2020',
      ].indexOf(colorSpace || '') === -1
    ) {
      throw new Error(
        'MUI: unsupported `%s` color space.\n' +
        'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.'
      );
    }
  } else {
    arrValues = values.split(',');
  }
  const newValues = arrValues.map((value) => parseFloat(value));

  return { type, values: newValues, colorSpace: colorSpace || '' };
}

/**
* Converts a color object with type and values to a string.
* @param {object} color - Decomposed color
* @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
* @param {array} color.values - [n,n,n] or [n,n,n,n]
* @returns {string} A CSS color string
*/
export function recomposeColor(color) {
  if (typeof color !== 'string') {
    const { type, colorSpace } = color;
    let { values } = color;
    let newValues;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = `${values[1]}%`;
      values[2] = `${values[2]}%`;
    }
    if (type.indexOf('color') !== -1) {
      newValues = `${colorSpace} ${values.join(' ')}`;
    } else {
      newValues = `${values.join(', ')}`;
    }

    return `${type}(${newValues})`;
  }
  return '';
}

/**
* Converts a color from hsl format to rgb format.
* @param {string} color - HSL color values
* @returns {string} rgb color values
*/
export function hslToRgb(color) {
  const decomposedColor = decomposeColor(color);
  const { values } = decomposedColor;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];

  if (decomposedColor.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({ type, values: rgb, colorSpace: 'color' });
}

/**
* Sets the absolute transparency of a color.
* Any existing alpha values are overwritten.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @param {number} value - value to set the alpha channel to in the range 0 - 1
* @returns {string} A CSS color string. Hex input values are returned as rgb
*/
export function alpha(color, value) {
  const colorObj = decomposeColor(color);
  const clampedValue = clamp(value);

  if (colorObj.type === 'rgb' || colorObj.type === 'hsl') {
    colorObj.type += 'a';
  }
  if (colorObj.type === 'color') {
    colorObj.values[3] = `/${clampedValue}`;
  } else {
    colorObj.values[3] = clampedValue;
  }

  return recomposeColor(colorObj);
}

/**
* Darkens a color.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @param {number} coefficient - multiplier in the range 0 - 1
* @returns {string} A CSS color string. Hex input values are returned as rgb
*/
export function darken(color, coefficient) {
  const colorObj = decomposeColor(color);
  const clampedCoefficient = clamp(coefficient);

  if (colorObj.type.indexOf('hsl') !== -1) {
    colorObj.values[2] *= 1 - clampedCoefficient;
  } else if (
    colorObj.type.indexOf('rgb') !== -1 ||
    colorObj.type.indexOf('color') !== -1
  ) {
    for (let i = 0; i < 3; i += 1) {
      colorObj.values[i] *= 1 - clampedCoefficient;
    }
  }
  return recomposeColor(colorObj);
}

/**
* Lightens a color.
* @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
* @param {number} coefficient - multiplier in the range 0 - 1
* @returns {string} A CSS color string. Hex input values are returned as rgb
*/
export function lighten(color, coefficient) {
  const colorObj = decomposeColor(color);
  const clampedCoefficient = clamp(coefficient);

  if (colorObj.type.indexOf('hsl') !== -1) {
    colorObj.values[2] += (100 - colorObj.values[2]) * clampedCoefficient;
  } else if (colorObj.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      colorObj.values[i] +=
        (255 - colorObj.values[i]) * clampedCoefficient;
    }
  } else if (colorObj.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      colorObj.values[i] += (1 - colorObj.values[i]) * clampedCoefficient;
    }
  }

  return recomposeColor(colorObj);
}
