import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RemixiconComponentType } from "@remixicon/react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: RemixiconComponentType;
}

/**
 * Componente de Cartão de Serviço para a demo.
 * Estilizado com as cores da LM UK e usando Remix Icons.
 */
export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
      <CardHeader className="pb-4">
        <div className="w-16 h-16 rounded-2xl bg-lm-fundo flex items-center justify-center mb-4 group-hover:bg-lm-primaria transition-colors duration-300">
          <Icon className="h-8 w-8 text-lm-primaria group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="text-xl font-bold text-lm-secundaria group-hover:text-lm-primaria transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
