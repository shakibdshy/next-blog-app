'use server'

import { createPost, delatePost, findFirstPost, getPosts, updatePost } from "@/routes/posts"
import { Post } from "@prisma/client"

export async function getAllPostsAction() {
  const posts = await getPosts()
  return posts
}

export async function createPostAction() {
  const post = await createPost()

  return post
}

export async function getPostAction(id: string) {
  const post = await findFirstPost(id)
  return post
}

export async function getPostUpdateAction({ id, title, content }: Post) {
  const post = await updatePost({ id, title, content })

  return post
}

export async function getPostDeleteAction(id: string) {
  const post = await delatePost(id)

  return post
}