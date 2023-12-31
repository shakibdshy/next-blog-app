import { client } from "@/config/prismadb"
import { currentUser } from "@clerk/nextjs"
import { Post } from "@prisma/client"

export async function getAllPosts() {
  try {
    const posts = await client.post.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    })
    return { posts }
  } catch (error) {
    return { error }
  }
}

export async function getPosts() {
  const user = await currentUser()
  try {
    const posts = await client.post.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
      where: {
        authorId: user?.id
      }
    })
    return { posts }
  } catch (error) {
    return { error }
  }
}

export async function findFirstPost(id: string) {
  const user = await currentUser()

  try {
    const post = await client.post.findUnique({
      where: {
        id,
        authorId: user?.id
      }
    })
    return { post }
  } catch (error) {
    return { error }
  }
}

export async function createPost() {
  const user = await currentUser()

  try {
    const post = await client.post.create({
      data: {
        title: "Untitled Post",
        authorId: user?.id,
      },
    })
    return { post }
  } catch (error) {
    return { error }
  }
}

export async function updatePost({ id, title, content }: { id: string, title: string, content: any }) {
  const user = await currentUser()

  try {
    const post = await client.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        authorId: user?.id
      }
    })
    console.log('post', post)
    return { post }
  } catch (error) {
    return { error }
  }
}

export async function delatePost(id: string) {
  const user = await currentUser()

  try {
    const post = await client.post.delete({
      where: {
        id,
        authorId: user?.id
      },
    })
    return { post }
  } catch (error) {
    return { error }
  }
}