const suma = require('./suma');

test('2 + 5 = 7', () =>{
    expect(suma(5,5)).toBe(11);
});

test('a + 5 = NaN', () =>{
    expect(suma('a',5)).toBe(NaN);
});