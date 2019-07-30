var cleave = new Cleave('.phone-number', {
  numericOnly: true,
  blocks: [0, 3, 3, 4],
  delimiters: ['(', ') ', '-'],
})
