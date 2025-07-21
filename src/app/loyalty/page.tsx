
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { loyaltyTiers } from '@/lib/mock-data';
import { CheckCircle, Gem, Star, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
    Trophy: <Trophy className="h-8 w-8" />,
    Star: <Star className="h-8 w-8" />,
    Gem: <Gem className="h-8 w-8" />,
};

// Mock user data
const currentUser = {
    name: 'Pengguna Setia',
    points: 7500,
    currentTier: 'Serat Perak',
};

const currentTierData = loyaltyTiers.find(tier => tier.name === currentUser.currentTier);
const nextTierData = loyaltyTiers.find(tier => tier.points > (currentTierData?.points ?? 0));
const progressPercentage = nextTierData ? (currentUser.points / nextTierData.points) * 100 : 100;

export default function LoyaltyPage() {
    return (
        <div className="bg-secondary/30">
            <div className="container mx-auto px-4 py-8">
                <header className="mb-12 text-center">
                    <h1 className="font-headline text-4xl font-bold text-primary">Program NusaLoyalty</h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Keuntungan eksklusif untuk pelanggan setia Serat Nusantara.
                    </p>
                </header>

                {/* User Status Card */}
                <Card className="mb-12 overflow-hidden shadow-lg">
                    <CardHeader className="bg-primary/10 p-6">
                        <CardTitle className="font-headline text-2xl">Status Keanggotaan Anda</CardTitle>
                        <CardDescription>Halo, {currentUser.name}!</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center gap-6 md:flex-row">
                            <div className="flex flex-col items-center text-center">
                                {currentTierData && (
                                    <div className={cn("mb-2 flex h-20 w-20 items-center justify-center rounded-full", currentTierData.bgColor, currentTierData.textColor)}>
                                        {iconMap[currentTierData.icon]}
                                    </div>
                                )}
                                <span className="font-bold text-xl">{currentUser.currentTier}</span>
                                <span className="text-muted-foreground">{currentUser.points.toLocaleString()} Poin</span>
                            </div>
                            <div className="w-full flex-1">
                                {nextTierData ? (
                                    <>
                                        <p className="text-sm text-muted-foreground">
                                            Kumpulkan { (nextTierData.points - currentUser.points).toLocaleString() } poin lagi untuk mencapai <strong>{nextTierData.name}</strong>.
                                        </p>
                                        <Progress value={progressPercentage} className="mt-2 h-4" />
                                        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                                            <span>{currentTierData?.points.toLocaleString()} poin</span>
                                            <span>{nextTierData.points.toLocaleString()} poin</span>
                                        </div>
                                    </>
                                ) : (
                                    <p className="font-semibold text-center text-primary">Anda telah mencapai tingkatan tertinggi! Terima kasih atas loyalitas Anda.</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tiers Section */}
                <div>
                    <h2 className="mb-8 text-center font-headline text-3xl font-bold">Tingkatan Keanggotaan</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {loyaltyTiers.map((tier) => (
                            <Card key={tier.name} className={cn("flex flex-col", { 'border-2 border-primary ring-4 ring-primary/20': currentUser.currentTier === tier.name })}>
                                <CardHeader className={cn("text-center rounded-t-lg", tier.bgColor, tier.textColor)}>
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/50">
                                        {iconMap[tier.icon]}
                                    </div>
                                    <CardTitle className="font-headline text-2xl mt-4">{tier.name}</CardTitle>
                                    <CardDescription className={cn("font-semibold", tier.textColor, "opacity-80")}>
                                        Mulai dari {tier.points.toLocaleString()} Poin
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-1 flex-col p-6">
                                    <ul className="flex-1 space-y-3">
                                        {tier.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {currentUser.currentTier === tier.name && (
                                       <Button disabled variant="outline" className="mt-6 w-full cursor-default">
                                            Tingkatan Anda Saat Ini
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                 {/* How to Earn Points */}
                 <Card className="mt-12">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Cara Mendapatkan Poin</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>Setiap Rp 1.000 yang Anda belanjakan akan mendapatkan 1 poin.</p>
                        <p>Ikuti aktivitas dan event spesial di platform untuk mendapatkan poin tambahan.</p>
                        <p>Donasi melalui platform kami juga akan dikonversi menjadi poin loyalitas.</p>
                        <p>Poin akan otomatis ditambahkan ke akun Anda setelah transaksi atau aktivitas selesai.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
