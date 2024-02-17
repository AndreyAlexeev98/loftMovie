import { stall } from "/src/utils/stall.js";

async function getDummyData(dummyData) {
  // по-умолчанию задержка на 3 сек
  await stall();
  return dummyData;
}
