import React, { useState } from 'react';

interface AppProps {
  title: string;
}

export const App: React.FC<AppProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);

  // React.createElement(typ, props, ...děti)
  return React.createElement(
    'div',
    {
      style: {
        fontFamily: 'system-ui, sans-serif',
        padding: '2rem',
        maxWidth: '400px',
        margin: '2rem auto',
        borderRadius: '8px',
        background: '#f1f5f9',
        textAlign: 'center',
      },
    },
    React.createElement('h1', { style: { color: '#0f172a' } }, title),
    React.createElement(
      'p',
      { style: { fontSize: '1.25rem', fontWeight: 'bold' } },
      `Hodnota: ${count}`
    ),
    React.createElement(
      'div',
      { style: { display: 'flex', gap: '0.5rem', justifyContent: 'center' } },
      React.createElement(
        'button',
        {
          onClick: () => setCount(prev => prev - 1),
          style: { padding: '0.5rem 1rem', cursor: 'pointer' },
        },
        '-1'
      ),
      React.createElement(
        'button',
        {
          onClick: () => setCount(0),
          style: { padding: '0.5rem 1rem', cursor: 'pointer' },
        },
        'Reset'
      ),
      React.createElement(
        'button',
        {
          onClick: () => setCount(prev => prev + 1),
          style: { padding: '0.5rem 1rem', cursor: 'pointer' },
        },
        '+1'
      )
    )
  );
};