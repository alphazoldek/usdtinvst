const plans = [
    { name: "Starter", amount: 5, profit: 0.25, days: 30 },
    { name: "Bronze", amount: 10, profit: 0.7, days: 30 },
    { name: "Silver", amount: 25, profit: 2, days: 30 },
    { name: "Gold", amount: 50, profit: 4.5, days: 30 },
    { name: "Premium", amount: 100, profit: 7.5, days: 30 },
    { name: "Diamond", amount: 200, profit: 15, days: 30 },
    { name: "Platinum", amount: 500, profit: 40, days: 30 },
    { name: "Investor Plus", amount: 750, profit: 60, days: 30 },
    { name: "Ultimate", amount: 1000, profit: 85, days: 30 },
    { name: "VIP Exclusive", amount: 1500, profit: 120, days: 30 }
  ];
  
  let selectedPlan = null;
  
  function renderPlans() {
    const plansGrid = document.getElementById('plansGrid');
    plans.forEach(plan => {
      const card = document.createElement('div');
      card.className = 'plan-card';
      card.innerHTML = `
        <h3>${plan.name}</h3>
        <p>💵 ${plan.amount} USDT</p>
        <p>💰 ربح يومي: ${plan.profit} USDT</p>
        <p>⏱️ المدة: ${plan.days} يوم</p>
      `;
      card.addEventListener('click', () => {
        document.querySelectorAll('.plan-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedPlan = plan;
      });
      plansGrid.appendChild(card);
    });
  }
  
  document.getElementById('investmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    if (!selectedPlan) {
      alert("يرجى اختيار باقة.");
      return;
    }
  
    // حساب إجمالي الأرباح بناءً على الربح اليومي والمدة
    const totalProfit = selectedPlan.profit * selectedPlan.days;
  
    document.getElementById('result').innerHTML = `✅ تم اختيار باقة <strong>${selectedPlan.name}</strong><br> 💵 إيداع: ${selectedPlan.amount} USDT<br> 📈 إجمالي أرباحك خلال ${selectedPlan.days} يوم: <strong>${totalProfit} USDT</strong>`;
  
    document.getElementById('walletModal').style.display = "block";
  });
  
  // بيانات الإيداع الوهمية
  const fakeDepositsData = [
    { address: '0x2321A68b76E2D80d432ABF23f3bD2A9f36FF8769', amount: 5, currency: 'USDT', card: 'Starter' },
    { address: '0xF8a82A9D77b06cAC93A0F06Bdb8Dd8d39c3C4D89', amount: 5, currency: 'USDT', card: 'Starter' },
    { address: '0xF4430E79b2F6A25aE1cB93eD4C9899B98167F607', amount: 25, currency: 'USDT', card: 'Silver' },
    { address: '0x492B55EF8A67f8f3F9289F6B021A698B44F02356', amount: 10, currency: 'USDT', card: 'Bronze' },
    { address: '0x9BC1D8e13D39fA3A0F183E046D0bb86C349A1F54', amount: 50, currency: 'USDT', card: 'Gold' },
    { address: '0x8D89A1B3D62F65F1B7C5BB0C9C3C1234567F6789', amount: 100, currency: 'USDT', card: 'Premium' },
    { address: '0x2433E5EEC9E8F2737A9F2D92D74A44A8A6EF5FB7', amount: 200, currency: 'USDT', card: 'Diamond' },
    { address: '0x7DA8A2C2B74A3C73D3F523992D445AF31D684B7F', amount: 500, currency: 'USDT', card: 'Platinum' },
    { address: '0x9C36c4b07186591B127Db0634BefBed982B03E8E', amount: 1000, currency: 'USDT', card: 'Ultimate' },
    { address: '0x9F1C84B7F8A9E56B9D5B909E1C4B8F520F8B24A3', amount: 750, currency: 'USDT', card: 'Investor Plus' },
    { address: '0x92AC6DFA932C9C45BC36BC7FE827F3158F9DB8F5', amount: 1500, currency: 'USDT', card: 'VIP Exclusive' },
  
    // إضافة عناوين جديدة
    { address: '0xE132B5E9F22A67355F2A81A75D73A6D5A6F58760', amount: 5, currency: 'USDT', card: 'Starter' },
    { address: '0xB0C52C8F3E9A9E2F5F6B2B6A539726D728C6F8B0', amount: 5, currency: 'USDT', card: 'Starter' },
    { address: '0xC9C3A20F1E0D2C0A4C13FCE98D94FBBF8E028B5D', amount: 25, currency: 'USDT', card: 'Silver' },
    { address: '0xD4B8A71E53BC45E91F4C6536E6A88A76F5F21A98', amount: 10, currency: 'USDT', card: 'Bronze' },
    { address: '0x3B3F8C827AB3D26F4D4D06AC9D05B80D788C2D1F', amount: 50, currency: 'USDT', card: 'Gold' },
    { address: '0x1A237DA1C84F43D5B1B2F5738D13A9F2D8798292', amount: 100, currency: 'USDT', card: 'Premium' },
    { address: '0xF5B9EAD6D6079C673F1A19734F09E5BE87F0EC39', amount: 200, currency: 'USDT', card: 'Diamond' },
    { address: '0xA738B2C9A73A8C9B2FB650EA833D13F6A5D5A4D9', amount: 500, currency: 'USDT', card: 'Platinum' },
    { address: '0x5C3578B9079A2D089E3F8E0785597A5D7B6D1E2A', amount: 1000, currency: 'USDT', card: 'Ultimate' },
    { address: '0x7F3A189F8F2B57731522C8E8A24C90556BFEF320', amount: 750, currency: 'USDT', card: 'Investor Plus' },
    { address: '0x4A23E91D0B4871E67D7B835D9A01CCDD5F9A92A7', amount: 1500, currency: 'USDT', card: 'VIP Exclusive' },
  
    // إضافة المزيد من العناوين
    { address: '0x8F9B3F084F812F2C7A572D19F1D9E72D345D5722', amount: 5, currency: 'USDT', card: 'Starter' },
    { address: '0xB90C6DAA38F5F923C7B6A6A3D4F193F6E2B3D1E4', amount: 5, currency: 'USDT', card: 'Starter' },
    { address: '0x21A4D62D7038CCB827FEE05C4951D30D3ABFA5D0', amount: 25, currency: 'USDT', card: 'Silver' },
    { address: '0x92A4D53A2F2D9E6F19FB063EC0F0743A82BE3436', amount: 10, currency: 'USDT', card: 'Bronze' },
    { address: '0x5D93D7C9F9B301F58749F739B1D6204BE0CFE39E', amount: 50, currency: 'USDT', card: 'Gold' },
    { address: '0x12E19D39952B32F6C5B95E064EC563F43853C0A0', amount: 100, currency: 'USDT', card: 'Premium' },
    { address: '0xD712F1F66B1F88E03B92656F437BEF743230A39A', amount: 200, currency: 'USDT', card: 'Diamond' },
    { address: '0x462A0B3B76EFB8B798B3EBD6A746EF343EA1E72B', amount: 500, currency: 'USDT', card: 'Platinum' },
    { address: '0xB97A7C7084C25A9AE458C1B9A3A4B9C712D2F4D9', amount: 1000, currency: 'USDT', card: 'Ultimate' },
    { address: '0x9A3F6F32B47AC3F858C859D57C5A60C519C9E616', amount: 750, currency: 'USDT', card: 'Investor Plus' },
    { address: '0x3C3C3C5C5DDB9A9A09D229A17413D2F71E5B6124', amount: 1500, currency: 'USDT', card: 'VIP Exclusive' }
  ];
  
  
  // دالة لتوليد الإيداعات الوهمية بشكل عشوائي
  function generateFakeDeposits() {
    const fakeDepositsContainer = document.getElementById('fakeDeposits');
    fakeDepositsContainer.innerHTML = ''; // مسح الإيداعات السابقة
  
    // توليد 8 إيداعات عشوائية من بيانات الإيداع
    for (let i = 0; i < 8; i++) {
      const randomDeposit = fakeDepositsData[Math.floor(Math.random() * fakeDepositsData.length)];
      
      const depositElement = document.createElement('div');
      depositElement.className = 'deposit';
      depositElement.innerHTML = `
        <p>📍 عنوان المحفظة: ${randomDeposit.address}</p>
        <p>💳 البطاقة التي اشترى بها: ${randomDeposit.card} (${randomDeposit.amount} ${randomDeposit.currency})</p>
        <p>🕒 تاريخ الإيداع: ${new Date().toLocaleString()}</p>
      `;
      fakeDepositsContainer.appendChild(depositElement);
    }
  }
  
  // تحديث الإيداعات بشكل عشوائي كل 5 ثواني
  setInterval(generateFakeDeposits, 5000); // التحديث كل 5 ثواني
  
  // إغلاق النافذة
  document.querySelector('.close').onclick = function() {
    document.getElementById('walletModal').style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == document.getElementById('walletModal')) {
      document.getElementById('walletModal').style.display = "none";
    }
  }
  
  function copyWallet() {
    const address = document.getElementById("walletAddress").innerText;
    navigator.clipboard.writeText(address);
    alert("📋 تم نسخ العنوان: " + address);
  }
  
  renderPlans();
  generateFakeDeposits();
  