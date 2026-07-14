import React, { useState, useEffect } from 'react';

function useLanguage() {
  const [lang, setLang] = useState(document.documentElement.lang || 'tr');
  useEffect(() => {
    const handleLangChange = () => setLang(document.documentElement.lang || 'tr');
    window.addEventListener('languagechange', handleLangChange);
    return () => window.removeEventListener('languagechange', handleLangChange);
  }, []);
  return lang;
}

export function EpiasTable() {
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(true);
  const lang = useLanguage();

  useEffect(() => {
    fetch('https://energy.omerharmankaya.com/api/embed/accuracy-table')
      .then(res => res.json())
      .then(json => {
        setTableData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Tablo verisi çekilemedi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', color: 'var(--muted)' }}>
        {lang === 'en' ? 'Loading table...' : 'Tablo yükleniyor...'}
      </div>
    );
  }

  if (!tableData) return null;

  const segmentTranslations = {
    'Genel': 'Overall',
    'Hafta içi': 'Weekday',
    'Hafta sonu': 'Weekend',
    'Tatil / bayram': 'Holiday'
  };

  const colTranslations = {
    'Resmi+': 'Official+',
    'Resmi': 'Official'
  };

  const translateSegment = (seg) => lang === 'en' ? (segmentTranslations[seg] || seg) : seg;
  const translateCol = (col) => lang === 'en' ? (colTranslations[col] || col) : col;

  return (
    <div style={{ marginTop: '40px', overflowX: 'auto' }}>
      <h4 style={{ color: 'var(--ink)', fontWeight: 500, marginBottom: '10px' }}>
        {lang === 'en' ? 'Figure 2 — Error comparison table' : 'Şekil 2 — Hata karşılaştırma tablosu'}
      </h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--line)' }}>
            <th style={{ padding: '10px 5px', color: 'var(--muted)', fontWeight: 400 }}>Segment</th>
            {tableData.columns.map(col => (
              <th key={col} style={{ padding: '10px 5px', color: 'var(--muted)', fontWeight: 400 }}>{translateCol(col)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.table.map(row => (
            <tr key={row.segment} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '10px 5px', color: 'var(--ink)' }}>{translateSegment(row.segment)}</td>
              {row.cells.map((cell, i) => (
                <td key={i} style={{ 
                  padding: '10px 5px', 
                  color: cell.is_best ? '#4CAF50' : 'var(--muted)',
                  fontWeight: cell.is_best ? 500 : 400
                }}>
                  {cell.mape !== null ? cell.mape.toFixed(2) : '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: '0.75rem', color: 'var(--faint)', marginTop: '10px', fontStyle: 'italic' }}>
        {lang === 'en' 
          ? `backtest — model evaluated on historical data (last ${tableData.window_days} days)`
          : `geriye dönük test — model geçmiş veriyle sınanmıştır (son ${tableData.window_days} gün)`}
      </div>
    </div>
  );
}
