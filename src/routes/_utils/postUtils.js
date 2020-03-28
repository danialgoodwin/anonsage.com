import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

export const getAllTags = () => {
  const categories = ['anonlang', 'dev', 'random']
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

const getAllPosts = (category) =>
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

export const getSiblingPosts = (slug) => {
  const posts = allDevPosts
  const siblingPosts = {}
  for (let i = 0; i < posts.length; i++) {
    if (slug === posts[i]['slug']) {
      if (i !== 0) {
        siblingPosts['next'] = {
          slug: posts[i - 1].slug,
          name: posts[i - 1].title
        }
      }
      if (i !== posts.length - 1) {
        siblingPosts['previous'] = {
          slug: posts[i + 1].slug,
          name: posts[i + 1].title
        }
      }
    }
  }
  return siblingPosts
}

export const allAnonlangPosts = getAllPosts('anonlang')
export const allDevPosts = getAllPosts('dev')
export const allRandomPosts = getAllPosts('random')
