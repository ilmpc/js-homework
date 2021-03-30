export async function getAvatartURL (downloader, nick) {
  const resp = await downloader(`https://api.github.com/users/${nick}`)
  const user = JSON.parse(resp)
  return user.avatar_url
}

export function getErrorTextFromRequest (request, nick) {
  return request.status === 404
    ? `User <strong>${nick}</strong> not found`
    : JSON.parse(request.responseText).message
}
