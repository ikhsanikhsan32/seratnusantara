"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { generateProductDescription, GenerateProductDescriptionInput } from '@/ai/flows/generate-product-description';
import { Wand2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  productName: z.string().min(3, "Product name must be at least 3 characters."),
  productCategory: z.string().min(3, "Product category is required."),
  productFeatures: z.string().min(10, "Please list at least one feature."),
  targetAudience: z.string().min(3, "Target audience is required."),
});

export function DescriptionGeneratorForm() {
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<GenerateProductDescriptionInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<GenerateProductDescriptionInput> = async (data) => {
    setIsLoading(true);
    setGeneratedDescription('');
    try {
      const result = await generateProductDescription(data);
      setGeneratedDescription(result.description);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to generate description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="productName">Product Name</Label>
          <Input id="productName" {...register('productName')} />
          {errors.productName && <p className="text-sm text-destructive">{errors.productName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="productCategory">Product Category</Label>
          <Input id="productCategory" {...register('productCategory')} placeholder="e.g., Apparel, Electronics" />
          {errors.productCategory && <p className="text-sm text-destructive">{errors.productCategory.message}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="productFeatures">Key Features (comma-separated)</Label>
        <Textarea id="productFeatures" {...register('productFeatures')} placeholder="e.g., 100% cotton, waterproof, long battery life" />
        {errors.productFeatures && <p className="text-sm text-destructive">{errors.productFeatures.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetAudience">Target Audience</Label>
        <Input id="targetAudience" {...register('targetAudience')} placeholder="e.g., Young professionals, outdoor enthusiasts" />
        {errors.targetAudience && <p className="text-sm text-destructive">{errors.targetAudience.message}</p>}
      </div>

      <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        Generate Description
      </Button>

      {generatedDescription && (
        <div className="space-y-2 pt-4">
          <Label htmlFor="generatedDescription">Generated Description</Label>
          <Textarea id="generatedDescription" value={generatedDescription} readOnly rows={8} className="bg-secondary" />
        </div>
      )}
    </form>
  );
}
