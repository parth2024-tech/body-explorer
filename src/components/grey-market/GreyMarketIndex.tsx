import React, { useMemo } from "react";
import { useGreyMarketStore } from "../../store/useGreyMarketStore";
import greyMarketDataRaw from "../../data/grey_market_db.json";
import { MoleculeEntry } from "../../store/useGreyMarketStore";
import { GreyMarketCard } from "./GreyMarketCard";
import "./GreyMarket.css";

const greyMarketData = greyMarketDataRaw as unknown as MoleculeEntry[];

export const GreyMarketIndex: React.FC = () => {
  const {
    searchTerm,
    categoryFilter,
    riskFilters,
    sortBy,
    setSearchTerm,
    setCategoryFilter,
    toggleRiskFilter,
    setSortBy,
  } = useGreyMarketStore();

  const filteredData = useMemo(() => {
    let result = greyMarketData;

    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.product.toLowerCase().includes(lowerQuery) ||
          item.molecule.toLowerCase().includes(lowerQuery) ||
          item.brands.some((brand) => brand.toLowerCase().includes(lowerQuery)),
      );
    }

    if (categoryFilter !== "all") {
      result = result.filter((item) => item.category === categoryFilter);
    }

    if (riskFilters.length > 0) {
      result = result.filter((item) => riskFilters.includes(item.risk));
    }

    result.sort((a, b) => {
      if (sortBy === "risk") {
        const riskWeights = { CRITICAL: 3, HIGH: 2, "UNDER-REVIEW": 1 };
        return riskWeights[b.risk] - riskWeights[a.risk];
      }
      if (sortBy === "az") {
        return a.product.localeCompare(b.product);
      }
      if (sortBy === "cat") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return result;
  }, [searchTerm, categoryFilter, riskFilters, sortBy]);

  return (
    <div className="gm-container">
      <div className="gm-header">
        <h1>
          Cross-Border <span>Regulatory</span> Watch
        </h1>
        <p>
          An evidence-graded observatory tracking regulatory notices, import alerts, and safety
          thresholds across jurisdictions (US FDA, EFSA, Health Canada, SFA Singapore, CFS Hong
          Kong, FSSAI, and CDSCO).
        </p>
      </div>

      {/* Prominent Statutory & Non-Defamatory Disclaimer */}
      <div
        style={{
          backgroundColor: "rgba(252, 61, 33, 0.08)",
          border: "1px solid rgba(252, 61, 33, 0.3)",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          fontSize: "0.85rem",
          lineHeight: "1.5",
          color: "#EAEAEA",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FC3D21"
          strokeWidth="2"
          style={{ flexShrink: 0, marginTop: "2px" }}
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <div>
          <strong
            style={{
              color: "#FC3D21",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              display: "block",
              marginBottom: "4px",
            }}
          >
            Statutory Transparency & Legal Notice
          </strong>
          <span style={{ color: "var(--text2, #8A8F98)" }}>
            This observatory compiles public administrative notices, import alerts, and safety
            warnings published by statutory regulatory bodies (including US FDA, EFSA, Health
            Canada, Singapore SFA, Hong Kong CFS, India CDSCO, and FSSAI). Data is provided for
            public health literacy and cross-border regulatory comparison. Listings do not allege
            statutory non-compliance or intentional adulteration by manufacturers unless officially
            adjudicated by judicial or statutory orders. Consult official government gazettes and
            certified healthcare providers for clinical and regulatory guidance.
          </span>
        </div>
      </div>

      <div className="gm-controls">
        <div className="gm-search-bar">
          <svg className="gm-search-icon" width="20" height="20" viewBox="0 0 24 24">
            <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
          </svg>
          <input
            type="text"
            className="gm-search-input"
            placeholder="Search products, brands, or chemicals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="gm-filters-row">
          <div className="gm-filter-group">
            <span className="gm-filter-label">Category:</span>
            <button
              className={`gm-pill ${categoryFilter === "all" ? "active" : ""}`}
              onClick={() => setCategoryFilter("all")}
            >
              All Items
            </button>
            <button
              className={`gm-pill ${categoryFilter === "food" ? "active" : ""}`}
              onClick={() => setCategoryFilter("food")}
            >
              Food & Drinks
            </button>
            <button
              className={`gm-pill ${categoryFilter === "drug" ? "active" : ""}`}
              onClick={() => setCategoryFilter("drug")}
            >
              Medicines & Drugs
            </button>
          </div>

          <div className="gm-filter-group">
            <span className="gm-filter-label">Risk Level:</span>
            <button
              className={`gm-pill ${riskFilters.includes("CRITICAL") ? "active" : ""}`}
              data-risk="CRITICAL"
              onClick={() => toggleRiskFilter("CRITICAL")}
            >
              Critical
            </button>
            <button
              className={`gm-pill ${riskFilters.includes("HIGH") ? "active" : ""}`}
              data-risk="HIGH"
              onClick={() => toggleRiskFilter("HIGH")}
            >
              High
            </button>
            <button
              className={`gm-pill ${riskFilters.includes("UNDER-REVIEW") ? "active" : ""}`}
              data-risk="UNDER-REVIEW"
              onClick={() => toggleRiskFilter("UNDER-REVIEW")}
            >
              Under Review
            </button>
          </div>

          <div className="gm-filter-group">
            <span className="gm-filter-label">Sort:</span>
            <select
              className="gm-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "risk" | "az" | "cat")}
            >
              <option value="risk">Highest Risk First</option>
              <option value="az">A-Z by Product</option>
              <option value="cat">Group by Category</option>
            </select>
          </div>
        </div>
      </div>

      <div className="gm-grid">
        {filteredData.map((item) => (
          <GreyMarketCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
