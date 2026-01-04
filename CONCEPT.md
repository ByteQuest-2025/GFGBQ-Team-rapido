# 📖 The ImpactTrace Protocol

## 1. The Core Innovation
ImpactTraceTrust moves away from "Trust-based" donations to "Verification-based" funding. We implement a **Milestone-Gating Mechanism** that acts as a decentralized escrow.

## 2. The Three-Layer Architecture

### Layer 1: The Commitment (Donor)
Donors contribute funds to a specific project. These funds are not sent directly to the NGO's operational account. Instead, they are held in a **Project Vault**.

### Layer 2: The Proof of Impact (NGO)
NGOs operate in phases. To unlock the next tranche of funding, they must upload:
- **Visual Evidence:** Geo-tagged photos of the work site.
- **Financial Evidence:** Digital copies of receipts/invoices.
- **Progress Report:** Data-backed updates on the milestone status.

### Layer 3: The Validation (Third-Party)
An independent Validator (Audit firm, Government body, or Community Leader) reviews the evidence. 
- **Approval:** Triggers an automatic release of the next 20-30% of funds.
- **Rejection/Flag:** Freezes the vault and alerts donors of a discrepancy.



## 3. Transparency Ledger
Every state change (Submission -> Approval -> Release) is logged with a **Transaction Hash**. This creates an immutable timeline, ensuring that even years later, a donor can see exactly which receipt triggered the release of their specific contribution.

## 4. Why this Wins
- **Reduces Corruption:** NGOs cannot spend money they haven't "earned" through proof of work.
- **Increases Donor Retention:** Donors feel like "Project Partners" rather than just ATM machines.
- **Scalability:** The logic can be deployed on any EVM-compatible blockchain (Polygon, Ethereum, Arbitrum) for 100% decentralization.
