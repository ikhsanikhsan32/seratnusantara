import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DescriptionGeneratorForm } from "@/components/description-generator-form";

export default function GenerateDescriptionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl">AI Product Description Generator</CardTitle>
                    <CardDescription>Fill in the product details below and let our AI create a compelling description for you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <DescriptionGeneratorForm />
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
