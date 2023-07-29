import { getAllPostsAction } from "@/app/action/post-action";
import NoPostFound from "@/components/posts/no-post-found"
import PostCreateButton from "@/components/posts/post-create-button";

async function page() {
  const { posts } = await getAllPostsAction()

  console.log('posts', posts)

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
              <p>{post.title}</p>
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