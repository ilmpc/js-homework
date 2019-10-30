/**
 * Задача #1
 *
 * Сверстать форму с полем для ввода и тремя кнопками.
 * Каждая кнопка должна отправлять запрос одним из способов:
 * 1) через обертку Promise над XHR (https://codesandbox.io/s/l47zmkw84z);
 * 2) через fetch (https://developer.mozilla.org/ru/docs/Web/API/Fetch_API);
 * 3) через axios (https://github.com/axios/axios).
 * В поле ввода необходимо ввести любой никнейм,
 * после подтверждения формы отправить запрос на api.github (https://api.github.com/users/{nickname})
 * на получение юзера, если юзер с таким никнеймом существует, показать его аватар,
 * иначе вывести ошибку,
 * что такого пользователя не существует.
 *
 * !!!! axios и fetch уже есть в области видимости (необходимо просто использовать) !!!!
 */

import PromiseXHR from '../promise-xhr';

export function getUserByPromiseXHR() {
  /** Ваш код */
}

export function getUserByFetch() {
  /** Ваш код */
}

export function getUserByAxios() {
  /** Ваш код */
}

export function showUserAvatar() {
  /** Ваш код */
}
