import { PlanCard } from "@/components/PlanCard";
import { BasicWebsiteMockup } from "@/components/mockups/BasicWebsiteMockup";
import { ContentWebsiteMockup } from "@/components/mockups/ContentWebsiteMockup";
import { BookingWebsiteMockup } from "@/components/mockups/BookingWebsiteMockup";
import { EcommerceMockup } from "@/components/mockups/EcommerceMockup";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const plans = [
    {
      title: "方案一：入門網站門面",
      description: "為極簡需求和最低預算所設計，主要功能是提供一個線上門面，能快速上線讓客戶在網路世界找到您。",
      features: [
        {
          title: "靜態網頁",
          description: "網站內容固定，類似電子傳單，適合資訊不常變動的客戶。"
        },
        {
          title: "無後台",
          description: "所有內容變動都需要由我們手動修改。"
        },
        {
          title: "單頁設計",
          description: "所有資訊都集中在一個頁面。"
        }
      ],
      targetAudience: "預算極度有限，僅需一個基本的網路門面，且未來沒有自行更新內容需求的客戶。",
      price: "NT$ 4,000 - 20,000",
      timeline: "約 1週內",
      mockupComponent: <BasicWebsiteMockup companyName="VAST.living" mainColor="bg-indigo-500" />
    },
    {
      title: "方案二：內容行銷網站",
      description: "在入門版的基礎上，新增了後台內容管理系統，讓您可以更靈活地自行更新網站內容。這是讓網站更有效率地被 Google 搜尋到的關鍵。",
      features: [
        {
          title: "後台系統",
          description: "提供後台內容管理系統，讓您可以自行新增與編輯網站內容。"
        },
        {
          title: "文章系統",
          description: "可新增部落格或新聞文章，持續產生新內容，有效提升 Google 搜尋排名。"
        },
        {
          title: "聯絡表單",
          description: "一個簡易聯絡表單，可讓訪客留下訊息。"
        }
      ],
      targetAudience: "希望能夠定期發布專業內容，提升品牌專業形象，並節省後續維護成本的客戶。",
      price: "NT$ 24,000 - 40,000",
      timeline: "約 1-2 週",
      mockupComponent: <ContentWebsiteMockup companyName="VAST.living" mainColor="bg-indigo-500" />
    },
    {
      title: "方案三：專業服務預約平台",
      description: "著重於建立一個專業、有信任感的品牌形象，並透過完整的內容與預約功能，將訪客有效轉化為潛在客戶。",
      features: [
        {
          title: "專業設計",
          description: "提供客製化網站設計，確保網站風格與品牌調性一致。"
        },
        {
          title: "多頁面設計",
          description: "針對不同服務項目建立獨立頁面，詳細介紹服務流程與特色。"
        },
        {
          title: "進階預約表單",
          description: "客製化預約表單，能讓使用者直接在網站上選擇服務項目、日期與時段。"
        }
      ],
      targetAudience: "重視品牌形象，希望透過網站建立信任度，並帶來實際預約的客戶。",
      price: "NT$ 80,000 - 120,000",
      timeline: "約 6-8 週",
      mockupComponent: <BookingWebsiteMockup companyName="VAST.living" mainColor="bg-indigo-500" />
    },
    {
      title: "方案四：一站式服務電商平台",
      description: "將服務電商化，是針對有長期經營規劃的客戶設計，旨在透過自動化的線上流程，大幅提升營運效率與業務規模。",
      features: [
        {
          title: "完整購物車",
          description: "將服務轉化為商品，讓客戶可直接線上選購與結帳。"
        },
        {
          title: "金流串接",
          description: "支援信用卡、LINE Pay、ATM 轉帳等多種付款方式。"
        },
        {
          title: "會員系統",
          description: "提供會員註冊、登入與管理功能，方便進行訂單追蹤與管理。"
        },
        {
          title: "後台管理",
          description: "功能強大的後台系統，可管理商品、訂單、會員與金流報表。"
        }
      ],
      targetAudience: "有長期經營規劃，且預期有大量線上交易，需要高度自動化與穩定後台的客戶。",
      price: "NT$ 160,000 - 400,000+",
      timeline: "約 10-12 週+",
      mockupComponent: <EcommerceMockup companyName="VAST.living" mainColor="bg-indigo-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-soft border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-primary mb-4">
              網站建置四階段方案｜Castle Studio
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              我們提供四階段網站建置方案，精準匹配您的業務需求與預算，助您業務逐步升級。
            </p>
          </div>
        </div>
      </header>

      {/* Our Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold text-primary text-center mb-8">我們的解決方案</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center mb-10">
          Castle Studio 為 VAST.living 鉅億居家實業量身打造網站建置方案，助您應對挑戰，實現業務目標。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">方案一：入門網站門面</h3>
            <p className="text-muted-foreground">快速建立線上門面，專注於展示基本服務資訊，有效提升品牌曝光。</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">方案二：內容行銷網站</h3>
            <p className="text-muted-foreground">在入門基礎上，導入內容管理系統，透過持續內容更新，顯著提升品牌專業形象與搜尋引擎排名。</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">方案三：專業服務預約平台</h3>
            <p className="text-muted-foreground">專為預約服務設計，打造專業平台，全面優化使用者預約體驗，高效轉化潛在客戶。</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">方案四：一站式服務電商平台</h3>
            <p className="text-muted-foreground">將服務全面電商化，實現自動化線上交易與管理流程，旨在大幅提升營運效率並擴大業務規模。</p>
          </Card>
        </div>
      </section>

      {/* Plans Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-card rounded-lg shadow-lg">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              targetAudience={plan.targetAudience}
              price={plan.price}
              timeline={plan.timeline}
              mockupComponent={plan.mockupComponent}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Castle Studio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              聯絡我們：[您的聯絡方式，例如電子郵件或電話]
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
