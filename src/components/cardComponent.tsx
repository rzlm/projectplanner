import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"


//props
interface IconCardProps {
    name: string;
    description: string;
    icon: React.ReactNode;
}
export default function IconCard({ name, description, icon }: IconCardProps) {

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                    {icon}
                </div>
                <div>
                    <CardTitle className="text-xl">{name}</CardTitle>
                   
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm sm:text-base text-gray-600">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}
