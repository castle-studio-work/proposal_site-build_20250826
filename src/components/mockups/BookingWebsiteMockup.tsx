export const BookingWebsiteMockup = () => {
  return (
    <div className="w-full h-48 bg-gradient-subtle p-4 text-xs">
      <div className="bg-card rounded border border-border/30 h-full flex flex-col">
        {/* Professional Header */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-2 border-b border-border/30">
          <div className="flex justify-between items-center">
            <div className="w-20 h-2 bg-primary/30 rounded"></div>
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-muted-foreground/30 rounded"></div>
              <div className="w-8 h-1 bg-muted-foreground/30 rounded"></div>
              <div className="w-8 h-1 bg-primary/40 rounded"></div>
              <div className="w-8 h-1 bg-success/40 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Service Pages Grid */}
        <div className="flex-1 p-3">
          <div className="grid grid-cols-3 gap-2 h-full">
            {/* Service 1 */}
            <div className="bg-secondary/20 rounded p-2 space-y-1">
              <div className="w-6 h-6 bg-primary/20 rounded mx-auto"></div>
              <div className="w-full h-1 bg-foreground/50 rounded"></div>
              <div className="w-3/4 h-0.5 bg-muted-foreground/30 rounded"></div>
              <div className="w-12 h-1 bg-success/50 rounded mt-1"></div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-secondary/20 rounded p-2 space-y-1">
              <div className="w-6 h-6 bg-primary/20 rounded mx-auto"></div>
              <div className="w-full h-1 bg-foreground/50 rounded"></div>
              <div className="w-3/4 h-0.5 bg-muted-foreground/30 rounded"></div>
              <div className="w-12 h-1 bg-success/50 rounded mt-1"></div>
            </div>
            
            {/* Booking Form */}
            <div className="bg-primary/5 rounded p-2 space-y-1 border border-primary/20">
              <div className="w-14 h-1.5 bg-primary/60 rounded"></div>
              <div className="space-y-0.5">
                <div className="w-full h-0.5 bg-input/60 rounded"></div>
                <div className="w-full h-0.5 bg-input/60 rounded"></div>
                <div className="w-full h-0.5 bg-input/60 rounded"></div>
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="h-0.5 bg-input/60 rounded"></div>
                  <div className="h-0.5 bg-input/60 rounded"></div>
                </div>
                <div className="w-full h-1 bg-success/60 rounded mt-1"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-muted/20 p-2 border-t border-border/30">
          <div className="flex justify-center gap-2">
            <div className="w-8 h-1 bg-success/40 rounded"></div>
            <div className="w-8 h-1 bg-success/40 rounded"></div>
            <div className="w-8 h-1 bg-success/40 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};