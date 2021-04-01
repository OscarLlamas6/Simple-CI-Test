const suma = require('./suma');

test('2 + 5 = 7', () =>{
    expect(suma(5,5)).toBe(10);
});

test('2 + 2 = 4', () =>{
    expect(suma(2,2)).toBe(4);
});

test('a + 5 = NaN', () =>{
    expect(suma('a',5)).toBe(NaN);
});