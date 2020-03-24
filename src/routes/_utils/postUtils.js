import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

export const getAllTags = () => {
  const categories = ['dev', 'random']
  const tags = new Set()
  for (const category of categories) {
    const posts = getAllPosts(category)
    for (const post of posts) {
      if (post.tags) {
        for (const tag of post.tags) {
          tags.add(tag)
        }
      }
    }
  }
  return Array.from(tags)
}

export const getAllPosts = (category) =>
    fs.readdirSync(path.resolve('content', category)).map(fileName => {
      const post = fs.readFileSync(path.resolve('content', category, fileName), 'utf-8')
      grayMatter(post).data['file'] = fileName
      if (/^\d\d\d\d-\d\d-\d\d-/.test(fileName)) {
        grayMatter(post).data['date'] = fileName.slice(0, 10)
      }
      if (grayMatter(post).data['slug'] === undefined) {
        grayMatter(post).data['slug'] = fileName.toLowerCase()
            .replace('.md', '')
      }
      return grayMatter(post).data
    }).reverse()
