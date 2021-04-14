/**
 * Задача #2
 *
 * Необходимо отправить GET запрос на https://jsonplaceholder.typicode.com/posts/{postId}
 * (1 < postId ≤ 100), затем посмотреть в ответе поле `userId`,
 * отправить GET запрос на https://jsonplaceholder.typicode.com/users/{userId} и вывести данные в консоль.
 * Для отправки запросов сделать текстовое поле для ввода `postId` и три кнопки.
 *
 * Каждая кнопка должна отправлять запрос одним из способов:
 * 1) через обертку Promise над XHR (https://codesandbox.io/s/l47zmkw84z);
 * 2) через fetch (https://developer.mozilla.org/ru/docs/Web/API/Fetch_API);
 * 3) через axios (https://github.com/axios/axios).
 *
 * !!!! axios и fetch уже есть в области видимости (необходимо просто использовать) !!!!
 */

export async function fetchPost (downloader, postId) {
  return downloader(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

export async function fetchUser (downloader, userId) {
  return downloader(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

export async function fetchAuthorOfPost (downloader, postId) {
  const post = await fetchPost(downloader, postId)
  return fetchUser(downloader, post.userId)
}
