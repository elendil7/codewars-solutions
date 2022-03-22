pointsPer48 = (p, m) => (p < 1 ? 0 : +((p / m) * 48).toFixed(1));

pointsPer48 = (p, m) => +((p / m) * 48).toFixed(1) || 0;
