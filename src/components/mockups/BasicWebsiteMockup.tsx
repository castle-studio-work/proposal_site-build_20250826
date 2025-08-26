interface BasicWebsiteMockupProps {
  companyName?: string;
  mainColor?: string;
}

export const BasicWebsiteMockup = ({
  companyName = "您的公司名稱",
  mainColor = "bg-primary"
}: BasicWebsiteMockupProps) => {
  return (
    <div className="w-full h-48 bg-gradient-subtle p-4 text-xs">
      <div className="bg-card rounded border border-border/30 h-full flex flex-col">
        {/* Header */}
        <div className={`${mainColor}/5 p-2 border-b border-border/30`}>
          <div className="text-foreground/80 text-[8px] font-bold mb-1">{companyName}</div>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-muted-foreground/30 rounded"></div>
            <div className="w-8 h-1 bg-muted-foreground/30 rounded"></div>
            <div className="w-8 h-1 bg-muted-foreground/30 rounded"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-3 space-y-2">
          <div className="w-20 h-2 bg-foreground/60 rounded"></div>
          <div className="space-y-1">
            <div className="w-full h-1 bg-muted-foreground/40 rounded"></div>
            <div className="w-3/4 h-1 bg-muted-foreground/40 rounded"></div>
            <div className="w-5/6 h-1 bg-muted-foreground/40 rounded"></div>
          </div>
          
          <div className="pt-2 space-y-1">
            <div className="w-16 h-1.5 bg-foreground/50 rounded"></div>
            <div className="space-y-0.5">
              <div className="w-full h-0.5 bg-muted-foreground/30 rounded"></div>
              <div className="w-4/5 h-0.5 bg-muted-foreground/30 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-muted/30 p-2 text-center">
          <div className="w-12 h-1 bg-muted-foreground/40 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
};