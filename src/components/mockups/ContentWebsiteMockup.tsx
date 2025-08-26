interface ContentWebsiteMockupProps {
  companyName?: string;
  mainColor?: string;
}

export const ContentWebsiteMockup = ({
  companyName = "您的公司名稱",
  mainColor = "bg-primary"
}: ContentWebsiteMockupProps) => {
  return (
    <div className="w-full h-48 bg-gradient-subtle p-4 text-xs">
      <div className="bg-card rounded border border-border/30 h-full flex flex-col">
        {/* Header with Navigation */}
        <div className={`${mainColor}/5 p-2 border-b border-border/30`}>
          <div className="flex justify-between items-center mb-1">
            <div className="text-foreground/80 text-[8px] font-bold">{companyName}</div>
            <div className="flex gap-1">
              <div className="w-6 h-1 bg-muted-foreground/30 rounded"></div>
              <div className="w-6 h-1 bg-muted-foreground/30 rounded"></div>
              <div className="w-6 h-1 bg-primary/40 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Sidebar - Blog List */}
          <div className="w-1/3 border-r border-border/30 p-2 space-y-2">
            <div className="w-12 h-1.5 bg-foreground/50 rounded mb-1"></div>
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-1 p-1 bg-muted/20 rounded">
                <div className="w-full h-1 bg-foreground/40 rounded"></div>
                <div className="w-3/4 h-0.5 bg-muted-foreground/30 rounded"></div>
                <div className="w-1/2 h-0.5 bg-muted-foreground/20 rounded"></div>
              </div>
            ))}
          </div>
          
          {/* Main Article */}
          <div className="flex-1 p-3 space-y-2">
            <div className="w-24 h-2 bg-foreground/60 rounded"></div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-muted-foreground/40 rounded"></div>
              <div className="w-5/6 h-1 bg-muted-foreground/40 rounded"></div>
              <div className="w-4/5 h-1 bg-muted-foreground/40 rounded"></div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-3 p-2 bg-secondary/30 rounded space-y-1">
              <div className="w-12 h-1 bg-foreground/50 rounded"></div>
              <div className="space-y-0.5">
                <div className="w-full h-1 bg-input/60 rounded"></div>
                <div className="w-full h-1 bg-input/60 rounded"></div>
                <div className="w-16 h-1 bg-primary/60 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};