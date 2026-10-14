import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hedgeSpecies, guideLabelsFor } from '../data/guides';
import { productPath, buildLocalizedPath } from '../data/seoPages';

const fieldStyle = { padding: '10px 14px', borderRadius: 10, border: '1.5px solid #c8e6c9', fontSize: '1rem', width: '100%' };
const labelStyle = { display: 'block', fontWeight: 600, color: '#234d20', marginBottom: 6 };

// Kalkulator: koliko biljaka treba za gard viu date dužine
const HedgeCalculator = ({ lang = 'ro' }) => {
  const [length, setLength] = useState(20);
  const [speciesId, setSpeciesId] = useState(hedgeSpecies[0].id);
  const [rows, setRows] = useState(1);
  const L = guideLabelsFor(lang).calc;
  const nameOf = (s) => s.name[lang] || s.name.ro;

  const species = hedgeSpecies.find(s => s.id === Number(speciesId)) || hedgeSpecies[0];
  const meters = Math.max(0, Number(String(length).replace(',', '.')) || 0);
  // Rând dublu: fiecare rând se plantează ceva mai rar (~75% din densitatea rândului simplu)
  const factor = rows === 2 ? 2 * 0.75 : 1;
  const min = Math.ceil(meters * species.min * factor);
  const max = Math.ceil(meters * species.max * factor);
  const fmt = (n) => String(n).replace('.', lang === 'en' ? '.' : ',');

  return (
    <div style={{ background: '#f1f8e9', border: '2px solid #c5e1a5', borderRadius: 16, padding: 24, margin: '8px 0 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
        <label>
          <span style={labelStyle}>{L.length}</span>
          <input type="number" min="0" step="0.5" inputMode="decimal" value={length}
            onChange={e => setLength(e.target.value)} style={fieldStyle} />
        </label>
        <label>
          <span style={labelStyle}>{L.plant}</span>
          <select value={speciesId} onChange={e => setSpeciesId(e.target.value)} style={fieldStyle}>
            {hedgeSpecies.map(s => <option key={s.id} value={s.id}>{nameOf(s)}</option>)}
          </select>
        </label>
        <label>
          <span style={labelStyle}>{L.rows}</span>
          <select value={rows} onChange={e => setRows(Number(e.target.value))} style={fieldStyle}>
            <option value={1}>{L.single}</option>
            <option value={2}>{L.double}</option>
          </select>
        </label>
      </div>
      <p style={{ margin: '20px 0 4px', fontSize: '1.25rem', color: '#1b5e20' }} aria-live="polite">
        {L.result}: <strong>{min === max ? min : `${min}–${max}`} {L.plants}</strong> {nameOf(species)}
      </p>
      <p style={{ margin: 0, color: '#33691e', fontSize: '0.95rem' }}>
        {fmt(species.min)}–{fmt(species.max)} {L.perMetre}{rows === 2 ? L.twoRows : ''}. {L.hint}{' '}
        <Link to={buildLocalizedPath(productPath(species.id), lang)} style={{ color: '#2e7d32', fontWeight: 600 }}>{L.view} {nameOf(species)}</Link>
        {' · '}
        <Link to={buildLocalizedPath('/contact', lang)} style={{ color: '#2e7d32', fontWeight: 600 }}>{L.quote} {max || ''} {L.plants}</Link>
      </p>
    </div>
  );
};

export default HedgeCalculator;
