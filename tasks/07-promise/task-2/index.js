/**
 * Задача #2
 *
 * Необходимо последовательно отправить POST запрос с JSON данными на https://api.myjson.com/bins,
 * а затем отправить GET запрос на URI, который вернулся в ответе от предыдущего запроса и
 * вывести данные в консоль.
 * Пример тела POST-запроса: { "foo": "bar" }
 * Пример тела ответа на POST-запрос: { "uri": "https://..." }
 * Для отправки запросов сделать три кнопки.
 * Каждая кнопка должна отправлять запрос одним из способов:
 * 1) через обертку Promise над XHR (https://codesandbox.io/s/l47zmkw84z);
 * 2) через fetch (https://developer.mozilla.org/ru/docs/Web/API/Fetch_API);
 * 3) через axios (https://github.com/axios/axios).
 *
 * !!!! axios и fetch уже есть в области видимости (необходимо просто использовать) !!!!
 */

import PromiseXHR from '../promise-xhr';

export function getResponseByPromiseXHR() {
  /** Ваш код */
}

export function getResponseByFetch() {
  /** Ваш код */
}

export function getResponseByAxios() {
  /** Ваш код */
}
