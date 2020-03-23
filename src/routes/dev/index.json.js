import * as _utils from '../_utils/postUtils'

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  const posts = _utils.getAllPosts('dev')
  res.end(JSON.stringify(posts))
}
