/**
 * Задача #3 (Опциональная)
 *
 * Написать обертку Promise над XHR (как в примерах на лекции), имеющую метод cancel
 * для отмены запроса. Имеется поле ввода имени для получения информации о пользователе,
 * поле очень похоже на google поиск, а именно на каждый ввод пользователя оно отправляет запрос
 * на https://api.github.com/users/{nickname}, где nickname - значение инпута,
 * инпут имеет debounce в 300 миллисекунд и на каждый ввод отправляет запросы на получение
 * информации о введенном имени (то есть, если в течение 300мс юзер изменил значение поля,
 * то запрос с предыдущим значением не отправляется, а создается новый,
 * и будет он отправлен по истечении 300мс). Если предыдущий запрос не успел завершиться,
 * а юзер изменил значение поля, и необходимо отправить новый запрос,
 * то активный запрос нужно отменить через метод cancel и создавать новый.
 * Не должно получиться такого, что одновременно обрабатываются два запроса на
 * получение информации о пользователе.
 * Примечание: нельзя использовать сторонние библиотеки.
 */
export class PromiseXHR {
  /** Ваш код */
}

export function getUserByPromiseXHR () {
  /** Ваш код */
}