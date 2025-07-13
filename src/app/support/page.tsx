import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { faqs } from '@/lib/mock-data';
import { MessageSquare, Phone } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold">Customer Support</h1>
        <p className="mt-2 text-muted-foreground">We're here to help. Find answers to your questions below.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Contact Us</CardTitle>
              <CardDescription>Can't find an answer? Send us a message.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your question or feedback..." />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Live Chat Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Need Immediate Help?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
                <MessageSquare className="h-10 w-10 text-primary mb-2"/>
                <p className="text-muted-foreground">Our live chat is available 24/7.</p>
                <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">Start Live Chat</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
