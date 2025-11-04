import React, { useMemo, useState } from "react";

const PRODUCT_MAP = {
  "Tapered Internal": [
    { itemNo: "TLX3010", label: "Tapered Internal 3.0 — 10.5mm (TLX3010)" },
    { itemNo: "TLX3012", label: "Tapered Internal 3.0 — 12.0mm (TLX3012)" },
    { itemNo: "TLX3015", label: "Tapered Internal 3.0 — 15.0mm (TLX3015)" },
    { itemNo: "TLX3409", label: "Tapered Internal 3.4 — 9.0mm (TLX3409)" },
    { itemNo: "TLX3410", label: "Tapered Internal 3.4 — 10.5mm (TLX3410)" },
    { itemNo: "TLX3412", label: "Tapered Internal 3.4 — 12.0mm (TLX3412)" },
    { itemNo: "TLX3415", label: "Tapered Internal 3.4 — 15.0mm (TLX3415)" },
    { itemNo: "TLX3418", label: "Tapered Internal 3.4 — 18.0mm (TLX3418)" },
    { itemNo: "TLX3809", label: "Tapered Internal 3.8 — 9.0mm (TLX3809)" },
    { itemNo: "TLX3810", label: "Tapered Internal 3.8 — 10.5mm (TLX3810)" },
    { itemNo: "TLX3812", label: "Tapered Internal 3.8 — 12.0mm (TLX3812)" },
    { itemNo: "TLX3815", label: "Tapered Internal 3.8 — 15.0mm (TLX3815)" },
    { itemNo: "TLX3818", label: "Tapered Internal 3.8 — 18.0mm (TLX3818)" },
    { itemNo: "TLX4607", label: "Tapered Internal 4.6 — 7.5mm (TLX4607)" },
    { itemNo: "TLX4609", label: "Tapered Internal 4.6 — 9.0mm (TLX4609)" },
    { itemNo: "TLX4610", label: "Tapered Internal 4.6 — 10.5mm (TLX4610)" },
    { itemNo: "TLX4612", label: "Tapered Internal 4.6 — 12.0mm (TLX4612)" },
    { itemNo: "TLX4615", label: "Tapered Internal 4.6 — 15.0mm (TLX4615)" },
    { itemNo: "TLX4618", label: "Tapered Internal 4.6 — 18.0mm (TLX4618)" },
    { itemNo: "TLX5209", label: "Tapered Internal 5.2 — 9.0mm (TLX5209)" },
    { itemNo: "TLX5210", label: "Tapered Internal 5.2 — 10.5mm (TLX5210)" },
    { itemNo: "TLX5212", label: "Tapered Internal 5.2 — 12.0mm (TLX5212)" },
    { itemNo: "TLX5215", label: "Tapered Internal 5.2 — 15.0mm (TLX5215)" },
    { itemNo: "TLX5810", label: "Tapered Internal 5.8 — 10.5mm (TLX5810)" },
    { itemNo: "TLX5812", label: "Tapered Internal 5.8 — 12.0mm (TLX5812)" },
    { itemNo: "TLX5815", label: "Tapered Internal 5.8 — 15.0mm (TLX5815)" }
  ],
  "Tapered PRO": [
    { itemNo: "BTA3409", label: "Tapered Pro 3.4 — 9.0mm (BTA3409)" },
    { itemNo: "BTA3410", label: "Tapered Pro 3.4 — 10.5mm (BTA3410)" },
    { itemNo: "BTA3412", label: "Tapered Pro 3.4 — 12.0mm (BTA3412)" },
    { itemNo: "BTA3807", label: "Tapered Pro 3.8 — 7.5mm (BTA3807)" },
    { itemNo: "BTA3809", label: "Tapered Pro 3.8 — 9.0mm (BTA3809)" },
    { itemNo: "BTA3810", label: "Tapered Pro 3.8 — 10.5mm (BTA3810)" },
    { itemNo: "BTA3812", label: "Tapered Pro 3.8 — 12.0mm (BTA3812)" },
    { itemNo: "BTA4210", label: "Tapered Pro 4.2 — 10.5mm (BTA4210)" },
    { itemNo: "BTA4212", label: "Tapered Pro 4.2 — 12.0mm (BTA4212)" },
    { itemNo: "BTA4607", label: "Tapered Pro 4.6 — 7.5mm (BTA4607)" },
    { itemNo: "BTA4609", label: "Tapered Pro 4.6 — 9.0mm (BTA4609)" },
    { itemNo: "BTA4610", label: "Tapered Pro 4.6 — 10.5mm (BTA4610)" },
    { itemNo: "BTA4612", label: "Tapered Pro 4.6 — 12.0mm (BTA4612)" },
    { itemNo: "BTA4615", label: "Tapered Pro 4.6 — 15.0mm (BTA4615)" },
    { itemNo: "BTA5209", label: "Tapered Pro 5.2 — 9.0mm (BTA5209)" },
    { itemNo: "BTA5210", label: "Tapered Pro 5.2 — 10.5mm (BTA5210)" },
    { itemNo: "BTA5212", label: "Tapered Pro 5.2 — 12.0mm (BTA5212)" },
    { itemNo: "BTA5215", label: "Tapered Pro 5.2 — 15.0mm (BTA5215)" }
  ],
  "Tapered Short": [
    { itemNo: "TSL4606", label: "Tapered Short 4.6 — 6.0mm (TSL4606)" },
    { itemNo: "TSL4607", label: "Tapered Short 4.6 — 7.5mm (TSL4607)" },
    { itemNo: "TSL5806", label: "Tapered Short 5.8 — 6.0mm (TSL5806)" },
    { itemNo: "TSL5807", label: "Tapered Short 5.8 — 7.5mm (TSL5807)" }
  ],
  "Tapered Tissue Level": [
    { itemNo: "TTLY3007", label: "Tapered Tissue Level 3.0 — 7.5mm (TTLY3007)" },
    { itemNo: "TTLY3009", label: "Tapered Tissue Level 3.0 — 9.0mm (TTLY3009)" },
    { itemNo: "TTLY3010", label: "Tapered Tissue Level 3.0 — 10.5mm (TTLY3010)" },
    { itemNo: "TTLY3012", label: "Tapered Tissue Level 3.0 — 12.0mm (TTLY3012)" },
    { itemNo: "TTLY3807", label: "Tapered Tissue Level 3.8 — 7.5mm (TTLY3807)" },
    { itemNo: "TTLY3809", label: "Tapered Tissue Level 3.8 — 9.0mm (TTLY3809)" },
    { itemNo: "TTLY3810", label: "Tapered Tissue Level 3.8 — 10.5mm (TTLY3810)" },
    { itemNo: "TTLY3812", label: "Tapered Tissue Level 3.8 — 12.0mm (TTLY3812)" },
    { itemNo: "TTLG4607", label: "Tapered Tissue Level 4.6 — 7.5mm (TTLG4607)" },
    { itemNo: "TTLG4609", label: "Tapered Tissue Level 4.6 — 9.0mm (TTLG4609)" },
    { itemNo: "TTLG4610", label: "Tapered Tissue Level 4.6 — 10.5mm (TTLG4610)" },
    { itemNo: "TTLG4612", label: "Tapered Tissue Level 4.6 — 12.0mm (TTLG4612)" },
    { itemNo: "TTLB5807", label: "Tapered Tissue Level 5.8 — 7.5mm (TTLB5807)" },
    { itemNo: "TTLB5809", label: "Tapered Tissue Level 5.8 — 9.0mm (TTLB5809)" },
    { itemNo: "TTLB5810", label: "Tapered Tissue Level 5.8 — 10.5mm (TTLB5810)" },
    { itemNo: "TTLB5812", label: "Tapered Tissue Level 5.8 — 12.0mm (TTLB5812)" }
  ]
};

const CATEGORIES = Object.keys(PRODUCT_MAP);
function classNames(...xs) { return xs.filter(Boolean).join(" "); }
function getWeekday(dateStr) { const d = new Date(dateStr); return isNaN(d) ? "" : d.toLocaleDateString("zh-TW", { weekday: "long" }); }

export default function App() {
  const [category, setCategory] = useState(CATEGORIES[0] || "");
  const items = useMemo(() => PRODUCT_MAP[category] || [], [category]);
  const [quantities, setQuantities] = useState({});
  const today = new Date().toISOString().split("T")[0];
  const [customer, setCustomer] = useState({ clinic:"", contactName:"", phone:"", address:"", salesRep:"", billTo:"", note:"", deliveryDate: today });

  const totalQty = useMemo(() => Object.values(quantities).reduce((a, b) => a + (b || 0), 0), [quantities]);
  const handleQtyChange = (itemNo, val) => setQuantities((q) => ({ ...q, [itemNo]: Math.max(0, Math.floor(Number(val) || 0)) }));
  const onCust = (k, v) => setCustomer((c) => ({ ...c, [k]: v }));

  const orderLines = useMemo(() => CATEGORIES.flatMap((cat) => (PRODUCT_MAP[cat] || []).map((i) => ({ category: cat, itemNo: i.itemNo, label: i.label, qty: quantities[i.itemNo] || 0 }))).filter((r) => r.qty > 0), [quantities]);

  const exportCSV = () => {
    const headers = ["Clinic","Contact Name","Phone","Address","Sales Rep","Bill To","Delivery Date","Note","Category","Item No","Label","Quantity"];
    const cust = [customer.clinic, customer.contactName, customer.phone, customer.address, customer.salesRep, customer.billTo, customer.deliveryDate, customer.note];
    const rows = orderLines.map((r) => [...cust, r.category, r.itemNo, r.label, r.qty]);
    const csv = [headers, ...rows].map((row) => row.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `BH_Implant_Order_${new Date().toISOString().slice(0,10)}.csv`; a.click(); URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-5xl mx-auto grid gap-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">BioHorizons Implant Ordering</h1>
          <div className="text-sm text-gray-600">含到貨日期（不可早於今天，顯示星期幾） / 客戶資料 / 負責業務 / 帳單收件人 / 附註</div>
        </header>

        <section className="bg-gray-50 rounded-2xl p-4 shadow-sm border">
          <h2 className="font-semibold mb-3">客戶資料</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input placeholder="診所名稱 (Clinic)" value={customer.clinic} onChange={(e) => onCust("clinic", e.target.value)} className="border rounded-lg px-3 py-2" />
            <input placeholder="聯絡人姓名 (Contact Name)" value={customer.contactName} onChange={(e) => onCust("contactName", e.target.value)} className="border rounded-lg px-3 py-2" />
            <input placeholder="電話 (Phone)" value={customer.phone} onChange={(e) => onCust("phone", e.target.value)} className="border rounded-lg px-3 py-2" />
            <input placeholder="地址 (Address)" value={customer.address} onChange={(e) => onCust("address", e.target.value)} className="border rounded-lg px-3 py-2" />
            <input placeholder="負責的業務 (Sales Rep)" value={customer.salesRep} onChange={(e) => onCust("salesRep", e.target.value)} className="border rounded-lg px-3 py-2" />
            <input placeholder="帳單給誰 (Bill To)" value={customer.billTo} onChange={(e) => onCust("billTo", e.target.value)} className="border rounded-lg px-3 py-2" />
            <div className="flex flex-col">
              <input type="date" min={today} value={customer.deliveryDate} onChange={(e) => onCust("deliveryDate", e.target.value)} className="border rounded-lg px-3 py-2" />
              <span className="text-xs text-gray-600 mt-1">星期：{getWeekday(customer.deliveryDate)}</span>
            </div>
          </div>
          <textarea placeholder="附註 (Notes)" value={customer.note} onChange={(e) => onCust("note", e.target.value)} className="mt-3 border rounded-lg w-full px-3 py-2" rows={3} />
        </section>

        <section className="bg-gray-50 rounded-2xl p-4 shadow-sm border">
          <label className="block text-sm font-medium mb-2">植體分類</label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={classNames("px-3 py-1.5 rounded-full border text-sm", c === category ? "bg-black text-white border-black" : "bg-white hover:bg-gray-100")}>
                {c}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-4 shadow-sm border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">{category} 產品清單</h2>
            <div className="text-sm text-gray-600">共 {items.length} 筆</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.itemNo} className="item-row">
                <div className="item-row-left">
                  <div className="font-medium leading-tight">{it.label}</div>
                  <div className="text-xs text-gray-500">Item No: {it.itemNo}</div>
                </div>
                <input type="number" min={0} className="qty-input" value={quantities[it.itemNo] || 0} onChange={(e) => handleQtyChange(it.itemNo, e.target.value)} />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-4 shadow-sm border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">訂單摘要</h2>
            <div className="text-sm text-gray-600">合計數量：{totalQty}</div>
          </div>

          {orderLines.length === 0 ? (
            <div className="text-sm text-gray-500">尚未選購任何商品。</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-3">分類</th>
                    <th className="py-2 pr-3">Item No</th>
                    <th className="py-2 pr-3">品名</th>
                    <th className="py-2 pr-3 text-right">數量</th>
                  </tr>
                </thead>
                <tbody>
                  {orderLines.map((r) => (
                    <tr key={r.itemNo} className="border-b last:border-0">
                      <td className="py-2 pr-3 whitespace-nowrap">{r.category}</td>
                      <td className="py-2 pr-3 whitespace-nowrap font-mono">{r.itemNo}</td>
                      <td className="py-2 pr-3">{r.label}</td>
                      <td className="py-2 pr-3 text-right">{r.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="flex gap-3 justify-end mt-3">
            <button onClick={exportCSV} className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90">匯出 CSV</button>
          </div>
        </section>

        <section className="text-xs text-gray-500">
          <p>若要擴充功能（PDF 匯出、金額估算、搜尋/篩選、常用客戶帶入），告訴我要加什麼，我直接幫你接上。</p>
        </section>
      </div>
    </div>
  );
}
