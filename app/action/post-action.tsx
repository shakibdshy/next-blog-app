'use server'

import { createPost, getPosts } from "@/routes/posts"

export async function getAllPostsAction() {
  const posts = await getPosts()
  return posts
}

export async function createPostAction() {
  const post = await createPost()

  return post
}