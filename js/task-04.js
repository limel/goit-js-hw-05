class StringBuilder {
  constructor(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = value;
  }

  get value() {
    // eslint-disable-next-line no-underscore-dangle
    return this._value;
  }

  append(string) {
    // eslint-disable-next-line no-underscore-dangle
    this._value += string;
  }

  prepend(string) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = string + this._value;
  }

  pad(string) {
    // eslint-disable-next-line no-underscore-dangle
    this._value = string + this._value + string;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
