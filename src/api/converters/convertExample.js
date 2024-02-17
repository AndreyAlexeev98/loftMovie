/* 
  представим, что `apiExample` - это объект, присланный из Rapid API.
  структура apiExample = { n: 'Arif', s: 'Balaev', c: 'Saint-Petersburg' }

  в приложении мы оперируем более понятными названиями
  example = { name: 'Arif', surname: 'Balaev', city: 'Saint-Petersburg' }

  converter-функция нужна, чтобы перевести формат данных, 
  присланный из Rapid API в тот, что нужен UI компонентам приложения 
*/
export function convertExample(apiExample) {
  return {
    name: apiExample.n,
    surname: apiExample.s,
    city: apiExample.c,
  };
}
