import * as _utils from '../_utils/postUtils'

export function get(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'})
  console.log('=========api/get()')
  const tags = _utils.getAllTags()
  console.log(tags)
  console.log('=========api/get(), tags')
  res.end(JSON.stringify(tags))
}
