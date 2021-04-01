import {noPlan, calcPlan} from '../pages/Tariff/calcPlan'

test('function noPlan (dddOrigem, dddDestino, minutos)', () => {
  expect(noPlan(11, 16, 20)).toBe(38);
});

test('function calcPlan (origin, destiny, plan, minutes)', () => {
  expect(calcPlan(11, 16, 30 ,20)).toBe(0);
});

test('function noPlan (dddOrigem, dddDestino, minutos)', () => {
  expect(noPlan(11, 17, 80)).toBe(136);
});


test('function calcPlan (origin, destiny, plan, minutes)', () => {
  expect(calcPlan(11, 17, 60 ,80)).toBe(37.40);
});

test('function noPlan (dddOrigem, dddDestino, minutos)', () => {
  expect(noPlan(18, 11, 200)).toBe(380);
});


test('function calcPlan (origin, destiny, plan, minutes)', () => {
  expect(calcPlan(18, 11, 120 ,200)).toBe(167.20);
});

test('function noPlan (dddOrigem, dddDestino, minutos)', () => {
  expect(noPlan(11, 18, 31)).toBe(27.900000000000002);
});

test('function calcPlan (origin, destiny, plan, minutes)', () => {
  expect(calcPlan(11, 18, 30 , 31)).toBe(0.99);
});

test('function noPlan (dddOrigem, dddDestino, minutos)', () => {
  expect(noPlan(16, 11, 150)).toBe(435);
});

test('function calcPlan (origin, destiny, plan, minutes)', () => {
  expect(calcPlan(16, 11, 120 , 150)).toBe(95.7);
});