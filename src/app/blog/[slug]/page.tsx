import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">{post.title}</h1>
          <div className="mt-4 flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.authorImageUrl ?? `https://i.pravatar.cc/40?u=${post.author}`} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </header>
        
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={675}
          className="mb-8 w-full rounded-lg object-cover"
          data-ai-hint={post.aiHint}
        />

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <Separator className="my-12" />

      {/* Comments Section */}
      <section>
        <h2 className="font-headline text-2xl font-bold">Comments</h2>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Leave a Comment</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="comment">Your Comment</Label>
                <Textarea id="comment" rows={4} placeholder="Join the discussion..." />
              </div>
              <Button type="submit">Post Comment</Button>
            </form>
          </CardContent>
        </Card>
        {/* Mock Comments */}
        <div className="mt-8 space-y-6">
          <div className="flex space-x-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/40?u=commenter1" />
              <AvatarFallback>C1</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-semibold">Commenter One</p>
              <p className="text-sm text-muted-foreground">Great article, very insightful!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
