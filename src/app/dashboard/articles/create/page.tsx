// Server component
import CreateArticleForm from "@/components/article/CreateArticleForm";

export default function CreateArticlePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Create Article</h1>
      <CreateArticleForm />
    </div>
  );
}
