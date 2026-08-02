import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function useLanguage() {
  const [lang, setLang] = useState(document.documentElement.lang || 'tr');
  useEffect(() => {
    const handleLangChange = () => setLang(document.documentElement.lang || 'tr');
    window.addEventListener('languagechange', handleLangChange);
    return () => window.removeEventListener('languagechange', handleLangChange);
  }, []);
  return lang;
}

export function EpiasChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const lang = useLanguage();

  useEffect(() => {
    fetch('https://loadcast.omerharmankaya.com/api/embed/series?days=8&granularity=hourly')
      .then(res => res.json())
      .then(json => {
        const chartData = json.data.map(d => {
          // Parse timestamp from date and hour
          const datetime = new Date(`${d.date}T${d.hour}:00`);
          return {
            time: datetime.getTime(),
            consumption: d.consumption,
            model_v1: d.model_v1
          };
        });
        setData(chartData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Veri çekilemedi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
        {lang === 'en' ? 'Loading...' : 'Yükleniyor...'}
      </div>
    );
  }

  // Format tick labels to show only date, e.g. "Jul 14" or "14 Tem"
  const formatDateTick = (timestamp) => {
    const d = new Date(timestamp);
    return d.toLocaleDateString(lang === 'en' ? 'en-US' : 'tr-TR', { month: 'short', day: 'numeric' });
  };

  // Format tooltip label to show full date and hour
  const formatTooltipLabel = (timestamp) => {
    const d = new Date(timestamp);
    const dateStr = d.toLocaleDateString(lang === 'en' ? 'en-US' : 'tr-TR', { weekday: 'short', month: 'short', day: 'numeric' });
    const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${dateStr}, ${timeStr}`;
  };

  return (
    <div style={{ width: '100%', height: '300px', marginTop: '30px' }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <XAxis 
            dataKey="time" 
            type="number"
            domain={['dataMin', 'dataMax']}
            tickCount={8}
            tickFormatter={formatDateTick}
            stroke="var(--muted)" 
            fontSize={11} 
            tick={{fill: 'var(--muted)'}} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis stroke="var(--muted)" fontSize={11} domain={['auto', 'auto']} tick={{fill: 'var(--muted)'}} tickLine={false} axisLine={false} width={50} />
          <Tooltip 
            labelFormatter={formatTooltipLabel}
            formatter={(value, name) => {
              if (name === 'consumption') return [value, lang === 'en' ? 'Actual' : 'Gerçekleşen'];
              return [value, name];
            }}
            contentStyle={{ backgroundColor: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '4px', fontSize: '0.85rem' }}
            itemStyle={{ color: 'var(--ink)' }}
            labelStyle={{ color: 'var(--muted)', marginBottom: '5px' }}
          />
          <Line type="monotone" dataKey="consumption" name="consumption" stroke="var(--ink)" strokeWidth={2} dot={false} connectNulls={false} />
          <Line type="monotone" dataKey="model_v1" name="Model v1.1" stroke="#FF5722" strokeWidth={1.5} dot={false} connectNulls={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
