import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showPreview, setShowPreview] = useState(false);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <Card className="w-full bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 border-border/50 flex flex-col">
      <CardHeader className="pb-6">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? "返回詳情" : "查看預覽"}
          </Button>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 break-words">{description}</p>
        <div className="flex gap-2 justify-start">
          <Badge variant="secondary" className="text-xs font-medium">
            {timeline}
          </Badge>
          <Badge variant="outline" className="text-xs font-medium">
            {price}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col space-y-6 p-4">
        <AnimatePresence mode="wait">
          {showPreview ? (
            <motion.div
              key="preview"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-sm font-medium text-foreground mb-3">頁面預覽</h4>
              <div className="border border-border/50 rounded-md overflow-hidden bg-background">
                {mockupComponent}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-6"
            >
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">核心功能</h4>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium text-foreground">{feature.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground ml-3.5 leading-relaxed break-words">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="opacity-50" />

              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">適合對象</h4>
                <p className="text-xs text-muted-foreground leading-relaxed break-words">{targetAudience}</p>
              </div>

              <Separator className="opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};