import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { PackageCheck, Package, Truck, Home } from 'lucide-react';

export default function TrackOrderPage() {
  const orderFound = true; // Mock state

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">Track Your Order</CardTitle>
          <CardDescription>Enter your order details to see its status.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 space-y-1">
              <Label htmlFor="order-id">Order ID</Label>
              <Input id="order-id" placeholder="e.g., 12345XYZ" />
            </div>
            <div className="flex-1 space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="self-end">
              <Button type="submit" className="w-full sm:w-auto">Track Order</Button>
            </div>
          </form>

          {orderFound && (
            <div className="mt-8">
              <Separator />
              <div className="mt-8">
                <h3 className="font-headline text-xl font-bold">Order #12345XYZ</h3>
                <p className="text-muted-foreground">Estimated delivery: October 30, 2023</p>

                <div className="relative mt-8">
                  {/* Progress bar */}
                  <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-secondary">
                    <div className="h-full w-2/3 bg-primary"></div>
                  </div>

                  {/* Status points */}
                  <div className="relative flex justify-between">
                    <div className="text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <PackageCheck className="h-6 w-6" />
                      </div>
                      <p className="mt-2 text-sm">Order Placed</p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Package className="h-6 w-6" />
                      </div>
                      <p className="mt-2 text-sm">Shipped</p>
                    </div>
                     <div className="text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Truck className="h-6 w-6" />
                      </div>
                      <p className="mt-2 text-sm">Out for Delivery</p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Home className="h-6 w-6" />
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
