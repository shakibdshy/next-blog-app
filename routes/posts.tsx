import { client } from "@/config/prismadb"
import { currentUser } from "@clerk/nextjs"

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