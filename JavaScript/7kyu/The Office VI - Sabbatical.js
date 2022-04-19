function sabb(s, val, happiness){
  return val + happiness + [...s].filter(v=>`sabbatical`.includes(v)).length > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}
