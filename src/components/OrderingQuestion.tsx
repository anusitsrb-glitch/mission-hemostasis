import { useState } from 'react';

interface Props {
  items: string[];
  onChange: (items: string[]) => void;
  disabled: boolean;
  correctOrder?: string[];
}

export function OrderingQuestion({ items, onChange, disabled, correctOrder }: Props) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const moveUp = (index: number) => {
    if (index === 0 || disabled) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    onChange(newItems);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1 || disabled) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    onChange(newItems);
  };

  const handleDragStart = (index: number) => setDragIndex(index);
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };
  const handleDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) {
      setDragIndex(null);
      setDragOverIndex(null);
      return;
    }
    const newItems = [...items];
    const [removed] = newItems.splice(dragIndex, 1);
    newItems.splice(index, 0, removed);
    onChange(newItems);
    setDragIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="ordering-container">
      <p className="ordering-hint">↕️ ลากหรือกดลูกศรเพื่อเรียงลำดับ</p>
      {items.map((item, index) => {
        let itemClass = 'ordering-item';
        if (disabled && correctOrder) {
          const correctIndex = correctOrder.indexOf(item);
          itemClass += correctIndex === index ? ' order-correct' : ' order-incorrect';
        }
        if (dragOverIndex === index) itemClass += ' drag-over';
        return (
          <div
            key={item}
            className={itemClass}
            draggable={!disabled}
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={() => handleDrop(index)}
          >
            <span className="order-number">{index + 1}</span>
            <span className="order-text">{item}</span>
            {!disabled && (
              <div className="order-controls">
                <button className="order-btn" onClick={() => moveUp(index)} disabled={index === 0}>▲</button>
                <button className="order-btn" onClick={() => moveDown(index)} disabled={index === items.length - 1}>▼</button>
              </div>
            )}
            {disabled && correctOrder && (
              <span className="order-result">
                {correctOrder.indexOf(item) === index ? '✅' : `❌ →ตำแหน่ง ${correctOrder.indexOf(item) + 1}`}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
