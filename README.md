# 🛡️ VeriFund | Transparent NGO Fund Utilization Tracker

> **Problem:** $40B+ in annual donations are lost to mismanagement.  
> **Solution:** A blockchain-inspired "Trust Protocol" that ensures every dollar reaches its intended destination through milestone-gating and verifiable evidence.

---

## 🏆 The Vision
VeriFund was built for the **ByteQuest 2025 Hackathon** to solve the "Black Hole" of charitable giving. Current platforms focus on *collecting* money; we focus on *tracking* it. We bridge the trust gap between donors and NGOs by making impact measurable, immutable, and visible in real-time.

## 🚀 Key Features

### 1. Milestone-Based Fund Release (Smart Escrow)
Funds are not handed over in a lump sum. They are locked in a digital vault and released in **tranches** only after a verified third-party validator approves a project milestone.

### 2. Evidence-to-Transaction Mapping
Every expense is tied to a **Proof of Impact** (receipts, GPS-tagged photos, or digital signatures). Each record is assigned a unique cryptographic hash to ensure the data is tamper-proof.

### 3. The "Dollar Journey" Dashboard
Donors can follow their specific contribution through a vertical timeline—from the moment of donation to the final purchase of supplies or completion of a project.

### 4. Triple-Stakeholder Governance
- **NGOs:** Request funds by providing proof of work.
- **Validators:** Independent auditors who verify milestones.
- **Donors:** Real-time visibility and "Impact Badges" for successful projects.

---
LINK:https://impact-trace-trust.vercel.app/

<h3 align="center">📱 Application Gallery</h3>

<p align="center">
  <img src="./Screenshots/Screenshot 2026-01-04 110338.png" width="31%" />
  <img src="./Screenshots/Screenshot 2026-01-04 110350.png" width="31%" />
  <img src="./Screenshots/Screenshot 2026-01-04 110416.png
" width="31%" />
</p>
<p align="center">
  <img src="./Screenshots/Screenshot 2026-01-04 110428.png" width="45%" />
  <img src="./Screenshots/Screenshot 2026-01-04 110450.png
" width="45%" />
</p>

<p align="center">
  <em>Visualizing Transparency: Donor Dashboard, NGO Portal, and Validator Interface</em>
</p>

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js (Vite) + Tailwind CSS |
| **UI Library** | Radix UI / Lucide Icons |
| **Backend/Ledger** | Supabase (PostgreSQL with Row Level Security) |
| **Architecture** | Milestone-Gating Logic (Simulated On-Chain Governance) |
| **Deployment** | Vercel |

---

* **Donor Dashboard:** Real-time tracking of project completion.
* **NGO Portal:** Secure interface for uploading milestone evidence.
* **Validator View:** One-click verification system for fund release.

---

## 📂 Project Structure

```text
├── src/
│   ├── components/      # Reusable UI (Progress Bars, Transaction Ledger)
│   ├── hooks/           # State management for Milestone logic
│   ├── pages/           # NGO, Donor, and Validator views
│   └── lib/             # Supabase / Database configuration
├── supabase/            # Database schemas for the "Immutable Ledger"
└── public/              # Branding assets and professional favicons
