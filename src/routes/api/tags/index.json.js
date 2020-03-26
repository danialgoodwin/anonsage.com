import * as _utils from '../../_utils/postUtils'

export function get(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'})
  console.log('=========api/tags/get()')
  const tags = _utils.getAllTags()
  console.log(tags)
  console.log('=========api/tags/get(), tags')
  res.end(JSON.stringify(tags))
  // res.end(JSON.stringify([
  //       "tag 1",
  //       "tag 2",
  //       "tag3"
  //     ]
  // ))
}
