import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Edit, MoreHorizontal, Package, PlusCircle, Trash2 } from "lucide-react";
import { vendors, products } from "@/lib/mock-data";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function VendorDashboardPage() {
  // We'll use the first vendor as a mock for the logged-in vendor
  const vendor = vendors[0];
  const vendorProducts = products.filter(p => p.vendorId === vendor.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold">Vendor Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {vendor.name}!</p>
      </header>

      <Tabs defaultValue="products">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="overview">Sales Overview</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="mt-6">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <div>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Manage your product listings.</CardDescription>
              </div>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendorProducts.map(product => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt={product.name}
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={product.imageUrl}
                          width="64"
                          data-ai-hint={product.aiHint}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant={product.availability === 'In Stock' ? 'default' : 'destructive'} className={product.availability === 'In Stock' ? 'bg-green-600' : ''}>
                          {product.availability}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatPrice(product.price)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem><Edit className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>A summary of your sales performance.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
               <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <span className="text-muted-foreground">Rp</span>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 45.231.890</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                  <Package className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                   <BarChart className="text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 125.300</div>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Profile</CardTitle>
              <CardDescription>Your public-facing vendor information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                  <Image src={vendor.logoUrl} alt={`${vendor.name} logo`} width={100} height={100} className="rounded-full" data-ai-hint="logo" />
                  <Button variant="outline">Change Logo</Button>
              </div>
              <div>
                <strong>Business Name:</strong> {vendor.name}
              </div>
              <div>
                <strong>Description:</strong> {vendor.description}
              </div>
               <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

    