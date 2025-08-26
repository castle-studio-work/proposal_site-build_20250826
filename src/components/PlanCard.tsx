import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PlanFeature {
  title: string;
  description: string;
}

interface PlanCardProps {
  title: string;
  description: string;
  features: PlanFeature[];
  targetAudience: string;
  price: string;
  timeline: string;
  mockupComponent: React.ReactNode;
}

export const PlanCard = ({
  title,
  description,
  features,
  targetAudience,
  price,
  timeline,
  mockupComponent
}: PlanCardProps) => {
  return (
    <Card className="w-full bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {timeline}
            </Badge>
            <Badge variant="outline" className="text-xs font-medium">
              {price}
            </Badge>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Features */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">核心功能</h4>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </div>
                <p className="text-xs text-muted-foreground ml-3.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Target Audience */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">適合對象</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{targetAudience}</p>
        </div>

        <Separator className="opacity-50" />

        {/* Mockup Preview */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">頁面預覽</h4>
          <div className="border border-border/50 rounded-md overflow-hidden bg-background">
            {mockupComponent}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};