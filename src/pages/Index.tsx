import { PlanCard } from "@/components/PlanCard";
import { BasicWebsiteMockup } from "@/components/mockups/BasicWebsiteMockup";
import { ContentWebsiteMockup } from "@/components/mockups/ContentWebsiteMockup";
import { BookingWebsiteMockup } from "@/components/mockups/BookingWebsiteMockup";
import { EcommerceMockup } from "@/components/mockups/EcommerceMockup";

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
      price: "NT$ 5,000 - 25,000",
      timeline: "約 1週內",
      mockupComponent: <BasicWebsiteMockup />
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
      price: "NT$ 30,000 - 50,000",
      timeline: "約 1-2 週",
      mockupComponent: <ContentWebsiteMockup />
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
      price: "NT$ 100,000 - 150,000",
      timeline: "約 6-8 週",
      mockupComponent: <BookingWebsiteMockup />
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
      price: "NT$ 200,000 - 500,000+",
      timeline: "約 10-12 週+",
      mockupComponent: <EcommerceMockup />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-soft border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              網站建置四階段方案
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              為了更精準地匹配您的業務需求與預算，我們將網站建置服務分為四個階段。您可以從最基礎的方案開始，並隨著業務成長逐步升級。
            </p>
          </div>
        </div>
      </header>

      {/* Plans Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              這四個方案能滿足不同的預算與時程需求，您可以根據客戶的實際狀況，推薦最適合的方案。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
