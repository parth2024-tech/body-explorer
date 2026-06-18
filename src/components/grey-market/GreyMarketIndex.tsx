import React, { useMemo } from 'react';
import { useGreyMarketStore } from '../../store/useGreyMarketStore';
import greyMarketDataRaw from '../../data/grey_market_db.json';
import { MoleculeEntry } from '../../store/useGreyMarketStore';
import { GreyMarketCard } from './GreyMarketCard';
import './GreyMarket.css';

const greyMarketData = greyMarketDataRaw as MoleculeEntry[];

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
          item.brands.some((brand) => brand.toLowerCase().includes(lowerQuery))
      );
    }

    if (categoryFilter !== 'all') {
      result = result.filter((item) => item.category === categoryFilter);
    }

    if (riskFilters.length > 0) {
      result = result.filter((item) => riskFilters.includes(item.risk));
    }

    result.sort((a, b) => {
      if (sortBy === 'risk') {
        const riskWeights = { 'CRITICAL': 3, 'HIGH': 2, 'UNDER-REVIEW': 1 };
        return riskWeights[b.risk] - riskWeights[a.risk];
      }
      if (sortBy === 'az') {
        return a.product.localeCompare(b.product);
      }
      if (sortBy === 'cat') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return result;
  }, [searchTerm, categoryFilter, riskFilters, sortBy]);

  return (
    <div className="gm-container">
      <div className="gm-header">
        <h1>India <span>Safety</span> Watch</h1>
        <p>An independent registry of foods, drugs, and products sold in India that are banned or severely restricted in other countries due to proven health risks.</p>
      </div>

      <div className="gm-controls">
        <div className="gm-search-bar">
          <svg className="gm-search-icon" width="20" height="20" viewBox="0 0 24 24">
            <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
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
            <button className={`gm-pill ${categoryFilter === 'all' ? 'active' : ''}`} onClick={() => setCategoryFilter('all')}>All Items</button>
            <button className={`gm-pill ${categoryFilter === 'food' ? 'active' : ''}`} onClick={() => setCategoryFilter('food')}>Food & Drinks</button>
            <button className={`gm-pill ${categoryFilter === 'drug' ? 'active' : ''}`} onClick={() => setCategoryFilter('drug')}>Medicines & Drugs</button>
          </div>

          <div className="gm-filter-group">
            <span className="gm-filter-label">Risk Level:</span>
            <button 
              className={`gm-pill ${riskFilters.includes('CRITICAL') ? 'active' : ''}`} 
              data-risk="CRITICAL"
              onClick={() => toggleRiskFilter('CRITICAL')}
            >
              Critical
            </button>
            <button 
              className={`gm-pill ${riskFilters.includes('HIGH') ? 'active' : ''}`} 
              data-risk="HIGH"
              onClick={() => toggleRiskFilter('HIGH')}
            >
              High
            </button>
            <button 
              className={`gm-pill ${riskFilters.includes('UNDER-REVIEW') ? 'active' : ''}`} 
              data-risk="UNDER-REVIEW"
              onClick={() => toggleRiskFilter('UNDER-REVIEW')}
            >
              Under Review
            </button>
          </div>

          <div className="gm-filter-group">
            <span className="gm-filter-label">Sort:</span>
            <select 
              className="gm-sort-select" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'risk' | 'az' | 'cat')}
            >
              <option value="risk">Highest Risk First</option>
              <option value="az">A-Z by Product</option>
              <option value="cat">Group by Category</option>
            </select>
          </div>
        </div>
      </div>

      <div className="gm-grid">
        {filteredData.map(item => (
          <GreyMarketCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
