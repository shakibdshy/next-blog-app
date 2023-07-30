import { getPostAction } from "@/app/action/post-action"
import Editor from "@/components/posts/editor"
import { Input } from "@/components/ui/input"

interface EditorPageProps {
  params: { postId: string }
}

async function page({ params }: EditorPageProps) {
  const { post } = await getPostAction(params.postId)
  return (
    <div>
      <Editor
        post={{
          id: post?.id ?? '',
          title: post?.title ?? '',
          content: post?.content ?? '',
          published: post?.published ?? false,
        }}
      />

    </div>
  )
}

export default page