import { getAllPostsAction } from "@/app/action/post-action";
import NoPostFound from "@/components/posts/no-post-found"
import PostCreateButton from "@/components/posts/post-create-button";
import Link from "next/link";
import dayjs from "dayjs";
import PostOperations from "@/components/posts/post-operations";

async function page() {
  const { posts } = await getAllPostsAction()

  if(!posts) return null;

  return (
    <section>
      <div className="mb-6 flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl font-bold md:text-4xl">Posts</h1>
          <p className="text-muted-foreground text-lg">Create and manage posts.</p>
        </div>
        <PostCreateButton />
      </div>
      {
        posts?.length ? (
          <div className="divide-border divide-y rounded-md border">
            {posts?.map((post) => (
              <div className="flex items-center justify-between p-4">
                <div className="grid gap-1">
                  <Link
                    href={`/dashboard/post/${post?.id}`}
                    className="font-semibold hover:underline"
                  >
                    {post.title}
                  </Link>
                  <div>
                    <p className="text-muted-foreground text-sm">
                      {dayjs(post.createdAt).format("MMM DD, YYYY")}
                    </p>
                  </div>
                </div>
                <PostOperations id={post?.id} />
              </div>
            ))}
          </div>
        ) : (
          <NoPostFound />
        )
      }
    </section>
  )
}

export default page