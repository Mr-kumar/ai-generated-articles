"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateArticleForm() {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, keyword, content });
    alert("Article Created (mock)");
  };

  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Enter Article Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Article Title</Label>
            <Input
              id="title"
              placeholder="e.g. How to Improve Your League of Legends Gameplay"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="keyword">Keyword</Label>
            <Input
              id="keyword"
              placeholder="e.g. league of legends"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write or paste your content here..."
              value={content}
              rows={10}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <Button type="submit">Create Article</Button>
        </form>
      </CardContent>
    </Card>
  );
}
