import React, { useState } from 'react';
import { MoleculeEntry } from '../../store/useGreyMarketStore';
import './GreyMarket.css';

interface GreyMarketCardProps {
  item: MoleculeEntry;
}

export const GreyMarketCard: React.FC<GreyMarketCardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="gm-card">
      <div className="gm-card-header">
        <div className="gm-card-icon">{item.icon}</div>
        <div className="gm-badges-container">
          <div className={`gm-risk-badge ${item.risk.toLowerCase()}`}>
            {item.risk} RISK
          </div>
          {item.confidenceLevel && (
            <div className="gm-risk-badge" style={{ backgroundColor: 'rgba(46, 139, 87, 0.1)', color: '#2E8B57', borderColor: 'rgba(46, 139, 87, 0.3)' }}>
              {item.confidenceLevel} CONFIDENCE
            </div>
          )}
        </div>
        <div className="gm-card-molecule">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1m-1.636 6.364l-.707-.707M3 12h1m1.636-6.364l.707.707"/>
          </svg>
          {item.molecule}
        </div>
        <h3 className="gm-card-title">{item.product}</h3>
        <p className="gm-card-subtitle">{item.subtitle}</p>
      </div>

      <div className="gm-card-body">
        <p className="gm-data-value" style={{ color: 'var(--text2)' }}>
          {item.summary}
        </p>

        <div className="gm-data-row">
          <span className="gm-data-label">Common Brands / Names</span>
          <div className="gm-brands-list">
            {item.brands.map((brand, idx) => (
              <span key={idx} className="gm-brand-tag">{brand}</span>
            ))}
          </div>
        </div>

        <div className="gm-data-row">
          <span className="gm-data-label">Target Organ / System</span>
          <span className="gm-data-value">{item.organ}</span>
        </div>

        <div className="gm-data-row">
          <span className="gm-data-label">Global Status</span>
          <div className="gm-status-grid">
            {Object.entries(item.status_global).map(([country, status]) => (
              <div key={country} className="gm-status-item">
                <span className="gm-status-country">{country}</span>
                <span className={`gm-status-desc ${status.toLowerCase().includes('ban') ? 'banned' : ''}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="gm-india-status">
          <span className="gm-data-label">Status in India</span>
          <p className="gm-data-value" style={{ marginTop: '8px' }}>
            {item.status_india}
          </p>
        </div>

        <div className="gm-data-row">
          <span className="gm-data-label">How to Spot It</span>
          <span className="gm-data-value">{item.how_to_spot}</span>
        </div>

        <div className="gm-data-row">
          <span className="gm-data-label">Safer Alternatives</span>
          <ul className="gm-list">
            {item.alternatives.map((alt, idx) => (
              <li key={idx}><span>{alt}</span></li>
            ))}
          </ul>
        </div>

        <div className="gm-data-row">
          <button 
            className={`gm-expand-btn ${isExpanded ? 'active' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Hide Medical Mechanism' : 'View Medical Mechanism'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <div className={`gm-mechanism-content ${isExpanded ? 'open' : ''}`}>
            <span className="gm-data-label" style={{ color: 'var(--text)', marginBottom: '8px', display: 'block' }}>
              Why is it dangerous?
            </span>
            <span className="gm-data-value" style={{ color: 'var(--text2)', fontSize: '0.9rem', display: 'block', marginBottom: '12px' }}>
              {item.mechanism}
            </span>
            {item.evidenceStatement && (
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border2)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text3)', fontStyle: 'italic' }}>
                  {item.evidenceStatement}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="gm-card-footer" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>Ref: {item.ref}</div>
        {item.clinicalDisclaimer && (
          <div style={{ fontSize: '0.75rem', color: 'var(--red)', fontStyle: 'italic', fontWeight: 500 }}>
            {item.clinicalDisclaimer}
          </div>
        )}
      </div>
    </div>
  );
};
