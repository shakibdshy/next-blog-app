'use server'

import { createPost, delatePost, getPosts } from "@/routes/posts"
import { Post } from "@prisma/client"

export async function getAllPostsAction() {
  const posts = await getPosts()
  return posts
}

export async function createPostAction() {
  const post = await createPost()

  return post
}

export async function getPostDeleteAction(id: string) {
  const post = await delatePost(id)

  return post
}