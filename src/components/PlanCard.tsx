import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRightLeft } from "lucide-react";

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
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full min-h-[500px] [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      <Card
        className={`absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
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

            {/* Flip Indicator */}
            <div className="absolute bottom-4 right-4 text-muted-foreground/60">
              <ArrowRightLeft className="h-5 w-5" />
            </div>
          </CardContent>
        </div>

        {/* Back of the card (preview) */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-card p-6 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">預覽：{title.split('：')[1]}</h3>
          <div className="border border-border/50 rounded-md overflow-hidden bg-background w-full flex justify-center items-center aspect-video max-h-[200px]">
            {mockupComponent}
          </div>
        </div>
      </Card>
    </div>
  );
};