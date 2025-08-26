export const EcommerceMockup = () => {
  return (
    <div className="w-full h-48 bg-gradient-subtle p-4 text-xs">
      <div className="bg-card rounded border border-border/30 h-full flex flex-col">
        {/* E-commerce Header */}
        <div className="bg-gradient-to-r from-primary/10 to-success/5 p-2 border-b border-border/30">
          <div className="flex justify-between items-center">
            <div className="w-20 h-2 bg-primary/30 rounded"></div>
            <div className="flex gap-1 items-center">
              <div className="w-6 h-1 bg-muted-foreground/30 rounded"></div>
              <div className="w-6 h-1 bg-muted-foreground/30 rounded"></div>
              <div className="w-2 h-2 bg-warning/50 rounded-full"></div>
              <div className="text-[8px] bg-primary/20 px-1 rounded">會員</div>
            </div>
          </div>
        </div>
        
        {/* Shopping Interface */}
        <div className="flex-1 flex">
          {/* Product Grid */}
          <div className="flex-1 p-2">
            <div className="grid grid-cols-2 gap-2 h-full">
              {/* Product 1 */}
              <div className="bg-secondary/20 rounded p-1.5 space-y-1">
                <div className="w-full h-4 bg-muted/50 rounded"></div>
                <div className="w-full h-0.5 bg-foreground/50 rounded"></div>
                <div className="flex justify-between items-center">
                  <div className="w-8 h-1 bg-success/60 rounded"></div>
                  <div className="text-[8px] bg-primary/30 px-1 rounded">加入購物車</div>
                </div>
              </div>
              
              {/* Product 2 */}
              <div className="bg-secondary/20 rounded p-1.5 space-y-1">
                <div className="w-full h-4 bg-muted/50 rounded"></div>
                <div className="w-full h-0.5 bg-foreground/50 rounded"></div>
                <div className="flex justify-between items-center">
                  <div className="w-8 h-1 bg-success/60 rounded"></div>
                  <div className="text-[8px] bg-primary/30 px-1 rounded">加入購物車</div>
                </div>
              </div>
              
              {/* Product 3 */}
              <div className="bg-secondary/20 rounded p-1.5 space-y-1">
                <div className="w-full h-4 bg-muted/50 rounded"></div>
                <div className="w-full h-0.5 bg-foreground/50 rounded"></div>
                <div className="flex justify-between items-center">
                  <div className="w-8 h-1 bg-success/60 rounded"></div>
                  <div className="text-[8px] bg-primary/30 px-1 rounded">加入購物車</div>
                </div>
              </div>
              
              {/* Product 4 */}
              <div className="bg-secondary/20 rounded p-1.5 space-y-1">
                <div className="w-full h-4 bg-muted/50 rounded"></div>
                <div className="w-full h-0.5 bg-foreground/50 rounded"></div>
                <div className="flex justify-between items-center">
                  <div className="w-8 h-1 bg-success/60 rounded"></div>
                  <div className="text-[8px] bg-primary/30 px-1 rounded">加入購物車</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Shopping Cart Sidebar */}
          <div className="w-1/3 border-l border-border/30 p-2 bg-primary/5">
            <div className="space-y-2">
              <div className="w-12 h-1.5 bg-primary/60 rounded"></div>
              
              {/* Cart Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1 bg-card/60 rounded">
                  <div className="w-8 h-0.5 bg-foreground/40 rounded"></div>
                  <div className="w-4 h-0.5 bg-success/50 rounded"></div>
                </div>
                <div className="flex justify-between items-center p-1 bg-card/60 rounded">
                  <div className="w-8 h-0.5 bg-foreground/40 rounded"></div>
                  <div className="w-4 h-0.5 bg-success/50 rounded"></div>
                </div>
              </div>
              
              {/* Checkout */}
              <div className="pt-1 space-y-1 border-t border-border/30">
                <div className="flex justify-between">
                  <div className="w-6 h-0.5 bg-foreground/50 rounded"></div>
                  <div className="w-8 h-0.5 bg-success/60 rounded"></div>
                </div>
                <div className="w-full h-1.5 bg-success/70 rounded text-center"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="bg-muted/20 p-1.5 border-t border-border/30">
          <div className="flex justify-center gap-1">
            <div className="text-[6px] bg-primary/30 px-1 rounded">信用卡</div>
            <div className="text-[6px] bg-success/30 px-1 rounded">LINE Pay</div>
            <div className="text-[6px] bg-warning/30 px-1 rounded">ATM</div>
          </div>
        </div>
      </div>
    </div>
  );
};