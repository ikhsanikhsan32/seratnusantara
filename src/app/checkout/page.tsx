import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CreditCard, Landmark, Wallet } from 'lucide-react';
import Image from 'next/image';
import { products } from '@/lib/mock-data';

export default function CheckoutPage() {
    const cartItems = products.slice(0, 2).map(p => ({ ...p, quantity: 1 }));
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 5.00;
    const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold">Checkout</h1>
      </header>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <div className="space-y-8">
                {/* Shipping Address */}
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="sm:col-span-1">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" placeholder="123 Main St" />
                            </div>
                            <div className="sm:col-span-1">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" placeholder="Anytown" />
                            </div>
                             <div className="sm:col-span-1">
                                <Label htmlFor="state">State</Label>
                                <Input id="state" placeholder="CA" />
                            </div>
                            <div className="sm:col-span-1">
                                <Label htmlFor="zip">ZIP Code</Label>
                                <Input id="zip" placeholder="12345" />
                            </div>
                            <div className="sm:col-span-1">
                                <Label htmlFor="country">Country</Label>
                                <Input id="country" placeholder="USA" />
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible defaultValue="item-1">
                            <AccordionItem value="item-1">
                                <AccordionTrigger><div className="flex items-center gap-2"><CreditCard /> Credit Card</div></AccordionTrigger>
                                <AccordionContent>
                                    <form className="space-y-4">
                                        <div>
                                            <Label htmlFor="card-number">Card Number</Label>
                                            <Input id="card-number" placeholder="**** **** **** 1234" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="expiry-date">Expiry Date</Label>
                                                <Input id="expiry-date" placeholder="MM/YY" />
                                            </div>
                                            <div>
                                                <Label htmlFor="cvc">CVC</Label>
                                                <Input id="cvc" placeholder="123" />
                                            </div>
                                        </div>
                                    </form>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-2">
                                <AccordionTrigger><div className="flex items-center gap-2"><Wallet/> PayPal</div></AccordionTrigger>
                                <AccordionContent>Click "Place Order" to be redirected to PayPal.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger><div className="flex items-center gap-2"><Landmark/> Bank Transfer</div></AccordionTrigger>
                                <AccordionContent>Instructions for bank transfer will be shown after placing the order.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Image src={item.imageUrl} alt={item.name} width={64} height={64} className="rounded-md" data-ai-hint={item.aiHint} />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <Separator className="my-2" />
                         <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </CardContent>
                <CardContent>
                    <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Place Order</Button>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
