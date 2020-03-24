import * as _utils from '../../_utils/postUtils'

export function get(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'})
  const tags = _utils.getAllTags()
  res.end(JSON.stringify(tags))
}
