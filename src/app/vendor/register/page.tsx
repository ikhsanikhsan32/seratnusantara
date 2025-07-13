import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { categories } from '@/lib/mock-data';
import { Upload } from 'lucide-react';

export default function VendorRegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl">Become a Vendor</CardTitle>
          <CardDescription>Register your business to start selling on CommerceHub.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" placeholder="e.g. Acme Co." required />
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-email">Business Email</Label>
                <Input id="contact-email" type="email" placeholder="contact@acme.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Business Phone</Label>
                <Input id="contact-phone" type="tel" placeholder="(123) 456-7890" required />
              </div>
            </div>
            
             <div className="space-y-2">
              <Label htmlFor="product-category">Primary Product Category</Label>
              <Select>
                <SelectTrigger id="product-category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business-description">Business Description</Label>
              <Textarea id="business-description" placeholder="Briefly describe your business and the products you sell." />
            </div>

            <div className="space-y-2">
                <Label htmlFor="logo-upload">Business Logo</Label>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="logo-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <Input id="logo-upload" type="file" className="hidden" />
                    </label>
                </div> 
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="vendor-terms" className="mt-1"/>
              <Label htmlFor="vendor-terms" className="text-sm">
                I have read and agree to the <Link href="/vendor-terms" className="underline">Vendor Terms of Service</Link>.
              </Label>
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
