import Image from "next/image"
import Link from "next/link"
import { cn } from "@/app/lib/utils"
import { Card, CardContent } from "@/app/ui/card"

export interface Category {
    title: string
    products: number
    image: string
    href: string
}

interface CategoryCardProps {
    category: Category
}

interface CategorySectionProps {
    title: string
    categories: Category[]
    className?: string
    onCategoryClick?: (category: Category) => void
}

function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link href={category.href}>
            <Card className="overflow-hidden group transition-transform hover:scale-[1.02]">
                <CardContent className="p-0 relative aspect-[4/3]">
                    <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-lg font-medium">{category.title}</h3>
                            <p className="text-sm text-gray-200">{category.products} Products</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default function CategorySection({
    title,
    categories,
    className,
    onCategoryClick,
}: CategorySectionProps) {
    return (
        <section className={cn("container mx-auto px-4 py-8", className)}>
            <h2 className="text-2xl font-semibold mb-6 text-slate-900">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.title}
                        onClick={() => onCategoryClick?.(category)}
                        role={onCategoryClick ? "button" : undefined}
                        tabIndex={onCategoryClick ? 0 : undefined}
                    >
                        <CategoryCard category={category} />
                    </div>
                ))}
            </div>
        </section>
    )
}
