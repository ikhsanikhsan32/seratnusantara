import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';

export default function NusaSharePage() {
  const donationCategories = [
    { value: 'kerang', label: 'Cangkang Kerang' },
    { value: 'agro-marina', label: 'Limbah Agro Marina' },
    { value: 'kain', label: 'Limbah Kain' },
    { value: 'kelapa-sawit', label: 'Limbah Tandan Kelapa Sawit' },
    { value: 'lainnya', label: 'Lainnya' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">Formulir Donasi Nusa-Share</CardTitle>
          <CardDescription>
            Terima kasih atas niat baik Anda untuk berdonasi. Silakan isi informasi di bawah ini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" placeholder="Nama Anda" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Email atau No. Telepon</Label>
                <Input id="contact" placeholder="Kontak yang bisa dihubungi" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="material-type">Jenis Bahan Donasi</Label>
              <Select>
                <SelectTrigger id="material-type">
                  <SelectValue placeholder="Pilih jenis bahan" />
                </SelectTrigger>
                <SelectContent>
                  {donationCategories.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi Barang</Label>
              <Textarea id="description" placeholder="Jelaskan kondisi dan jumlah barang yang akan didonasikan." required />
            </div>

             <div className="space-y-2">
              <Label htmlFor="address">Alamat Pengambilan</Label>
              <Textarea id="address" placeholder="Masukkan alamat lengkap untuk penjemputan donasi." required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="photo-upload">Foto Barang Donasi</Label>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="photo-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Klik untuk unggah</span> atau seret file</p>
                            <p className="text-xs text-muted-foreground">PNG, JPG, atau JPEG</p>
                        </div>
                        <Input id="photo-upload" type="file" className="hidden" accept="image/png, image/jpeg" />
                    </label>
                </div> 
            </div>

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              Kirim Formulir Donasi
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
