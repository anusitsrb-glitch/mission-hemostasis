import { useState } from 'react';
import { glossaryTerms } from '../data';

interface Props {
  onBack: () => void;
}

export function GlossaryScreen({ onBack }: Props) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  const categories = ['ทั้งหมด', ...Array.from(new Set(glossaryTerms.map(t => t.category)))];

  const filtered = glossaryTerms.filter(term => {
    const matchSearch = search === '' ||
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.termTh.includes(search) ||
      term.definition.includes(search);
    const matchCat = selectedCategory === 'ทั้งหมด' || term.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="screen glossary-screen">
      <div className="glossary-header">
        <button className="btn btn-icon" onClick={onBack}>← กลับ</button>
        <h1>📖 คำศัพท์สำคัญ</h1>
        <p>Primary Hemostasis Glossary</p>
      </div>

      <div className="glossary-filters">
        <input
          className="glossary-search"
          type="text"
          placeholder="🔍 ค้นหาคำศัพท์..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="glossary-list">
        {filtered.length === 0 && (
          <div className="no-results">ไม่พบคำศัพท์ที่ค้นหา</div>
        )}
        {filtered.map(term => (
          <div key={term.term} className="glossary-card">
            <div className="glossary-card-header">
              <h3 className="term-name">{term.term}</h3>
              <span className="term-category">{term.category}</span>
            </div>
            <p className="term-th">🇹🇭 {term.termTh}</p>
            <p className="term-definition">{term.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
