

/* ══ DATA ══ */
const GEM_IMGS = {
  'diamante': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gdiamante%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f0f8ff%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%23c0d8f0%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238ab0cc%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gldiamante%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23c8e8ff%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23c8e8ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22bdiamante%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%23c8e8ff%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23bdiamante%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%23f0f8ff%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%23c0d8f0%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%23608898%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%23f0f8ff%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%23c0d8f0%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%238ab0cc%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23608898%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%238ab0cc%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23385868%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%23f0f8ff%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23gdiamante%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23gldiamante%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
  'rubi': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22grubi%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ff7070%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%23cc2020%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238b0000%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22glrubi%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ff2020%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23ff2020%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22brubi%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%23ff2020%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23brubi%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%23ff7070%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%23cc2020%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%23600000%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%23ff7070%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%23cc2020%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%238b0000%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23600000%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%238b0000%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%233d0000%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%23ff7070%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23grubi%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23glrubi%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
  'esmeralda': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gesmeralda%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2350e890%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%230d8a40%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23065c28%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22glesmeralda%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2300dd55%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2300dd55%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22besmeralda%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%2300dd55%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23besmeralda%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%2350e890%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%230d8a40%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%23044020%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%2350e890%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%230d8a40%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23065c28%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23044020%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23065c28%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23022810%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%2350e890%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23gesmeralda%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23glesmeralda%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
  'topacio': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gtopacio%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ffd060%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%23e8a800%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23b07800%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22gltopacio%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ffcc00%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23ffcc00%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22btopacio%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%23ffcc00%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23btopacio%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%23ffd060%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%23e8a800%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%23805000%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%23ffd060%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%23e8a800%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23b07800%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23805000%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23b07800%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23503000%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%23ffd060%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23gtopacio%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23gltopacio%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
  'zafiro': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gzafiro%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234090ff%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%230040cc%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23002888%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22glzafiro%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230055ff%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230055ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22bzafiro%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%230055ff%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23bzafiro%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%234090ff%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%230040cc%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%23001860%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%234090ff%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%230040cc%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23002888%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23001860%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23002888%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23000c3d%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%234090ff%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23gzafiro%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23glzafiro%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
  'amatista': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gamatista%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d080ff%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%238820cc%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%235a1088%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22glamatista%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23aa00ff%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23aa00ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22bamatista%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%23aa00ff%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23bamatista%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%23d080ff%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%238820cc%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%233a0860%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%23d080ff%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%238820cc%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%235a1088%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%233a0860%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%235a1088%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%2320043d%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%23d080ff%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23gamatista%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23glamatista%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
  'aguamarina': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22gaguamarina%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2360e8ff%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%2300b8d8%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23007898%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22glaguamarina%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2300ccff%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2300ccff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22baguamarina%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%2300ccff%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23baguamarina%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%2360e8ff%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%2300b8d8%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%23005068%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%2360e8ff%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%2300b8d8%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23007898%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23005068%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23007898%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23003040%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%2360e8ff%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23gaguamarina%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23glaguamarina%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
  'alejandrita': 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22galejandrita%22%20cx%3D%2245%25%22%20cy%3D%2235%25%22%20r%3D%2260%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23c070f0%22%2F%3E%3Cstop%20offset%3D%2240%25%22%20stop-color%3D%22%236820c0%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23420888%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22glalejandrita%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2250%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%239900ff%22%20stop-opacity%3D%220.4%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239900ff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22balejandrita%22%3E%3CfeGaussianBlur%20stdDeviation%3D%222.5%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cellipse%20cx%3D%2250%22%20cy%3D%2274%22%20rx%3D%2226%22%20ry%3D%225%22%20fill%3D%22%239900ff%22%20opacity%3D%220.3%22%20filter%3D%22url%28%23balejandrita%29%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2068%2C38%2062%2C28%2038%2C28%22%20fill%3D%22%23c070f0%22%20opacity%3D%220.95%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2038%2C28%2022%2C42%22%20fill%3D%22%236820c0%22%20opacity%3D%220.85%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2062%2C28%2078%2C42%22%20fill%3D%22%232c0560%22%20opacity%3D%220.8%22%2F%3E%3Cpolygon%20points%3D%2232%2C38%2050%2C43%2038%2C28%22%20fill%3D%22%23c070f0%22%20opacity%3D%220.9%22%2F%3E%3Cpolygon%20points%3D%2268%2C38%2050%2C43%2062%2C28%22%20fill%3D%22%236820c0%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%23420888%22%20opacity%3D%220.88%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2068%2C38%2050%2C43%2050%2C55%22%20fill%3D%22%232c0560%22%20opacity%3D%220.78%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23420888%22%20opacity%3D%220.82%22%2F%3E%3Cpolygon%20points%3D%2282%2C55%2050%2C55%2050%2C82%22%20fill%3D%22%23160230%22%20opacity%3D%220.72%22%2F%3E%3Cline%20x1%3D%2218%22%20y1%3D%2255%22%20x2%3D%2282%22%20y2%3D%2255%22%20stroke%3D%22%23c070f0%22%20stroke-width%3D%220.7%22%20opacity%3D%220.55%22%2F%3E%3Cpolygon%20points%3D%2218%2C55%2032%2C38%2068%2C38%2082%2C55%2050%2C82%22%20fill%3D%22url%28%23galejandrita%29%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2255%22%20r%3D%2242%22%20fill%3D%22url%28%23glalejandrita%29%22%2F%3E%3Cpolygon%20points%3D%2238%2C32%2050%2C35%2044%2C28%22%20fill%3D%22white%22%20opacity%3D%220.6%22%2F%3E%3Cpolygon%20points%3D%2254%2C29%2063%2C33%2059%2C26%22%20fill%3D%22white%22%20opacity%3D%220.32%22%2F%3E%3C%2Fsvg%3E',
};

const DEFS=[
  {id:1, nombre:'Diamante',   imgKey:'diamante',   precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'La gema suprema · pureza y luz eterna'},
  {id:2, nombre:'Rubí',       imgKey:'rubi',       precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'Piedra del coraje · pasión y vitalidad'},
  {id:3, nombre:'Esmeralda',  imgKey:'esmeralda',  precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'Gema del corazón · amor y abundancia'},
  {id:4, nombre:'Topacio',    imgKey:'topacio',    precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'Piedra solar · claridad y manifestación'},
  {id:5, nombre:'Zafiro',     imgKey:'zafiro',     precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'Piedra de la sabiduría · verdad y nobleza'},
  {id:6, nombre:'Amatista',   imgKey:'amatista',   precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'Gema espiritual · protección y equilibrio'},
  {id:7, nombre:'Aguamarina', imgKey:'aguamarina', precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'Piedra del mar · calma y comunicación'},
  {id:8, nombre:'Alejandrita',imgKey:'alejandrita',precio:50000, mp:'https://mpago.la/2rKn89s', descripcion:'Gema camaleón · la más rara del mundo'},
];
/* ══ SUPABASE CONFIG + AUTH ══ */
const SUPA_URL = 'https://tgoarsmdmyfcsylyurpa.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnb2Fyc21kbXlmY3N5bHl1cnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMjAxMzcsImV4cCI6MjA5MzU5NjEzN30.dadyu3I2_g1EI7yT0toeksc_dBV0ZUqLBhlhFH2FgMI';

/* ══ MERCADO PAGO ══ */
// Public Key — usada en el front para inicializar el SDK de MP si fuera necesario
const MP_PUBLIC_KEY = 'APP_USR-998eae3c-f905-434b-9cac-afd215bf266f';

/* ══ FORMSPREE ══ */
const FORMSPREE_URL = 'https://formspree.io/f/xpqbdbyr';

async function supa(table, method='GET', body=null, filters=''){
  const res = await fetch(`${SUPA_URL}/rest/v1/${table}${filters}`, {
    method,
    headers:{
      'apikey': SUPA_KEY,
      'Authorization': `Bearer ${SUPA_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': method==='POST' ? 'return=representation' : ''
    },
    body: body ? JSON.stringify(body) : null
  });
  if(!res.ok){ const e=await res.json(); throw e; }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

/* ══ LOCAL HELPERS (cart + session persisten en localStorage) ══ */
const db={
  /* ── Productos: Supabase ── */
  prods: async ()=>{
    try{ const r=await supa('products','GET',null,'?activo=eq.true&order=nombre.asc'); return r?.length?r:DEFS; }
    catch(e){ console.warn('DB prods fallback:',e); return DEFS; }
  },
  savP: async (prod,isEdit=false)=>{
    if(isEdit) return supa('products','PATCH',{nombre:prod.nombre,precio:prod.precio,descripcion:prod.descripcion,activo:prod.activo},`?id=eq.${prod.id}`);
    return supa('products','POST',{nombre:prod.nombre,precio:prod.precio,descripcion:prod.descripcion||'',activo:true});
  },
  delP: async (id)=> supa('products','DELETE',null,`?id=eq.${id}`),

  /* ── Usuarios: Supabase ── */
  getUser: async (email)=>{
    const r=await supa('users','GET',null,`?email=eq.${encodeURIComponent(email)}&limit=1`);
    return r?.[0]||null;
  },
  createUser: async (nombre,email,pass)=>{
    return supa('users','POST',{nombre,email,password_hash:btoa(pass)});
  },

  /* ── Órdenes: Supabase ── */
  orders: async (userId=null)=>{
    const f=userId?`?user_id=eq.${userId}&order=created_at.desc`:'?order=created_at.desc';
    return supa('orders','GET',null,f);
  },
  createOrder: async (order)=> supa('orders','POST',order),
  updateOrder: async (id,data)=> supa('orders','PATCH',data,`?id=eq.${id}`),

  /* ── Carrito: localStorage (no necesita DB) ── */
  cart:()=>JSON.parse(localStorage.getItem('lc_c')||'[]'),
  savC:d=>{localStorage.setItem('lc_c',JSON.stringify(d));updC();},

  /* ── Reseñas: localStorage ── */
  revs:()=>JSON.parse(localStorage.getItem('lc_r')||'[]'),
  savR:d=>localStorage.setItem('lc_r',JSON.stringify(d)),

  /* ── Sesión: localStorage ── */
  me:()=>{const u=localStorage.getItem('lc_m');return u?JSON.parse(u):null;},
  setMe:u=>u?localStorage.setItem('lc_m',JSON.stringify(u)):localStorage.removeItem('lc_m')
};

/* ══ PAGES ══ */
function go(n,b){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+n).classList.add('active');
  document.querySelectorAll('.nb').forEach(x=>x.classList.remove('on'));
  if(b)b.classList.add('on');
  window.scrollTo(0,0);
  if(n==='catalog')renCat();
  if(n==='clients')renRevs();
  if(n==='panel')renPanel();
  if(n==='admin')renAdmin();
}
function hLogin(){const u=db.me();if(u?.role==='admin'){go('admin');return;}if(u){go('panel');return;}go('login');}

/* ══ DRAWER ══ */
function togDrawer(){
  const d=document.getElementById('drawer'),b=document.getElementById('burger');
  const o=d.classList.toggle('open');b.classList.toggle('open',o);
  document.body.style.overflow=o?'hidden':'';
}
function cDr(){document.getElementById('drawer').classList.remove('open');document.getElementById('burger').classList.remove('open');document.body.style.overflow='';}

/* ══ UTILS ══ */
const fmt=n=>'$'+(n).toLocaleString('es-AR');
const erMsg=(el,t)=>{el.style.color='var(--ruby)';el.textContent=t;};
const okMsg=(el,t)=>{el.style.color='var(--em)';el.textContent=t;};
function bCls(s){return s==='enviado'?'bs':s==='entregado'?'bd':s==='cancelado'?'bc':'bp';}

/* ══ CATALOG ══ */
let _prodsCache = []; // caché de productos cargados del catálogo

async function renCat(){
  const grid=document.getElementById('catGrid');
  grid.innerHTML='<p style="text-align:center;color:var(--slo);font-size:.72rem;letter-spacing:.1em;padding:40px">Cargando catálogo...</p>';
  const prods=await db.prods();
  _prodsCache = prods; // guardar en caché para addCart
  grid.innerHTML=prods.map(p=>{
    const imgSrc = GEM_IMGS[p.imgKey] || GEM_IMGS['diamante'];
    return `<div class="gc">
      <img src="${imgSrc}" alt="${p.nombre}" style="width:80px;height:80px;object-fit:contain;margin:0 auto 14px;display:block;filter:drop-shadow(0 0 12px rgba(180,210,255,.35))">
      <div class="gn">${p.nombre}</div>
      <div class="gd">${p.descripcion||''}</div>
      <div class="gp">Precio: <strong>${fmt(p.precio)}</strong></div>
      <div class="gbs">
        <button class="bb" onclick="addCart(${p.id});openCart()">💳 Comprar</button>
        <button class="ba" onclick="addCart(${p.id})">＋ Agregar</button>
      </div>
    </div>`;
  }).join('');
}

/* ══ CART ══ */
function updC(){const n=db.cart().length;document.getElementById('cb1').textContent=n;document.getElementById('cb2').textContent=n;}
function addCart(id){
  // Buscar en caché (productos cargados del catálogo) con fallback a DEFS
  const p = (_prodsCache.length ? _prodsCache : DEFS).find(g=>String(g.id)==String(id));
  if(!p)return;
  const c=db.cart();
  c.push({id:p.id,nombre:p.nombre,precio:p.precio,mp:p.mp,descripcion:p.descripcion,imgKey:p.imgKey,cid:Date.now()+Math.random()});
  db.savC(c);showAl(`✦ ${p.nombre} agregada al carrito`);
}
function openCart(){
  const cart=db.cart();
  const it=document.getElementById('cItems'),tot=document.getElementById('cTot'),acts=document.getElementById('cActs');
  if(!cart.length){it.innerHTML='<p class="ce">Tu carrito está vacío.</p>';tot.innerHTML='';acts.innerHTML='';}
  else{
    it.innerHTML=cart.map(i=>`<div class="ci"><img src="${GEM_IMGS[i.imgKey]||GEM_IMGS['diamante']}" style="width:28px;height:28px;object-fit:contain"><span class="cin">${i.nombre||i.name}</span><span class="cip">${fmt(i.precio||i.price)}</span><button class="crm" onclick="rmCart('${i.cid}')">✕</button></div>`).join('');
    tot.innerHTML=`Total: <strong>${fmt(cart.reduce((s,i)=>s+(i.precio||i.price||0),0))}</strong>`;
    const total=cart.reduce((s,i)=>s+(i.precio||i.price||0),0);
    acts.innerHTML=`
      <button class="bck" id="btnPagar" onclick="checkout()">
        💳 Pagar Total — ${fmt(total)}
      </button>
      <button class="bsm dd" style="align-self:center;margin-top:6px" onclick="clrCart()">🗑 Vaciar carrito</button>
      <p id="mpMsg" style="text-align:center;font-size:.66rem;letter-spacing:.1em;color:var(--slo);min-height:18px;margin-top:4px"></p>`;
  }
  document.getElementById('cartOv').classList.add('open');
}
function rmCart(cid){db.savC(db.cart().filter(i=>String(i.cid)!==String(cid)));openCart();}
function clrCart(){db.savC([]);openCart();}
function closeCart(){document.getElementById('cartOv').classList.remove('open');}

/* ══ AUTH ══ */
function togAuth(t){document.getElementById('fLogin').style.display=t==='l'?'block':'none';document.getElementById('fReg').style.display=t==='r'?'block':'none';}
async function doRecover(){
  const e=document.getElementById('lE').value.trim();
  const m=document.getElementById('lMsg');
  if(!e){erMsg(m,'Ingresá tu email primero.');return;}
  try{
    await fetch(`${SUPA_URL}/auth/v1/recover`,{
      method:'POST',
      headers:{'apikey':SUPA_KEY,'Content-Type':'application/json'},
      body:JSON.stringify({email:e})
    });
    okMsg(m,'✦ Revisá tu email para recuperar tu contraseña.');
  }catch(err){
    erMsg(m,'Error al enviar el email.');
  }
}
async function doLogin(){
  const e=document.getElementById('lE').value.trim(),p=document.getElementById('lP').value,m=document.getElementById('lMsg');
  if(!e||!p){erMsg(m,'Completá todos los campos.');return;}
  // Admin hardcoded
  if(e==='admin@lacueva.com'&&p==='lacueva2024'){
    db.setMe({id:'admin',name:'Administrador',email:e,role:'admin'});updLBtn();go('admin');return;
  }
  // Supabase Auth
  try{
    const res = await fetch(`${SUPA_URL}/auth/v1/token?grant_type=password`,{
      method:'POST',
      headers:{'apikey':SUPA_KEY,'Content-Type':'application/json'},
      body:JSON.stringify({email:e,password:p})
    });
    const data = await res.json();
    if(data.access_token){
      db.setMe({id:data.user.id,name:data.user.user_metadata?.nombre||e,email:e,role:'user',token:data.access_token});
      updLBtn();go('panel');return;
    }
    if(!res.ok){erMsg(m,'Email o contraseña incorrectos.');return;}
  }catch(err){
    // Fallback local para testing offline
    const users=JSON.parse(localStorage.getItem('lc_u')||'[]');
    const lu=users.find(x=>x.email===e&&x.pass===p);
    if(!lu){erMsg(m,'Sin conexión. Probá cuando estés en línea.');return;}
    db.setMe({id:lu.email,name:lu.nombre||lu.name,email:e,role:'user'});
  }
  updLBtn();go('panel');
}
async function doReg(){
  const n=document.getElementById('rN').value.trim(),e=document.getElementById('rE').value.trim(),p=document.getElementById('rP').value,m=document.getElementById('rMsg');
  if(!n||!e||!p){erMsg(m,'Completá todos los campos.');return;}
  if(p.length<6){erMsg(m,'Mínimo 6 caracteres.');return;}
  // Supabase Auth signup
  try{
    const res = await fetch(`${SUPA_URL}/auth/v1/signup`,{
      method:'POST',
      headers:{'apikey':SUPA_KEY,'Content-Type':'application/json'},
      body:JSON.stringify({email:e,password:p,data:{nombre:n}})
    });
    const data = await res.json();
    if(data.id||data.user?.id){
      // También guardar en tabla users
      try{ await supa('users','POST',{id:data.id||data.user?.id,nombre:n,email:e,password_hash:''}); }catch(_){}
      db.setMe({id:data.id||data.user?.id,name:n,email:e,role:'user'});
      updLBtn();go('panel');return;
    }
    if(data.msg||data.error_description){erMsg(m,data.msg||data.error_description);return;}
  }catch(err){
    // Fallback local para testing offline
    const users=JSON.parse(localStorage.getItem('lc_u')||'[]');
    if(users.find(x=>x.email===e)){erMsg(m,'Ya existe una cuenta con ese email.');return;}
    users.push({nombre:n,name:n,email:e,pass:p});
    localStorage.setItem('lc_u',JSON.stringify(users));
    db.setMe({id:e,name:n,email:e,role:'user'});
  }
  updLBtn();go('panel');
}
function doLogout(){db.setMe(null);updLBtn();go('home');}
function updLBtn(){
  const u=db.me();
  const lb=document.getElementById('lbtn'),dlb=document.getElementById('dlbtn'),ab=document.getElementById('abtn');
  if(u){
    lb.textContent='Mi Panel';lb.onclick=()=>go(u.role==='admin'?'admin':'panel');
    dlb.textContent='Mi Panel';dlb.onclick=()=>{go(u.role==='admin'?'admin':'panel');cDr();};
    if(u.role==='admin')ab.style.display='inline-block';
  }else{
    lb.textContent='Login';lb.onclick=hLogin;
    dlb.textContent='Login';dlb.onclick=()=>{hLogin();cDr();};
    ab.style.display='none';
  }
}

/* ══ PANEL ══ */
async function renPanel(){
  const u=db.me();if(!u){go('login');return;}
  document.getElementById('pName').textContent=u.name;
  const el=document.getElementById('uOrders');
  el.innerHTML='<p class="nd">Cargando...</p>';
  try{
    const orders=await db.orders(u.id)||[];
    if(!orders.length){el.innerHTML='<p class="nd">No tenés compras registradas aún.</p>';return;}
    el.innerHTML=`<div style="overflow-x:auto"><table><thead><tr><th>Producto</th><th>Precio</th><th>Fecha</th><th>Estado</th><th>Tracking</th><th>Despacho</th></tr></thead><tbody>${orders.map(o=>`<tr><td>${o.producto}</td><td>${fmt(o.precio)}</td><td>${new Date(o.created_at).toLocaleDateString('es-AR')}</td><td><span class="badge ${bCls(o.estado)}">${o.estado}</span></td><td>${o.tracking||'—'}</td><td>${o.dispatch_date||'—'}</td></tr>`).join('')}</tbody></table></div>`;
  }catch(e){
    // localStorage fallback
    const lOrders=JSON.parse(localStorage.getItem('lc_o')||'[]').filter(o=>o.userId===u.email||o.userId===u.id);
    if(!lOrders.length){el.innerHTML='<p class="nd">No tenés compras registradas aún.</p>';return;}
    el.innerHTML=`<div style="overflow-x:auto"><table><thead><tr><th>Producto</th><th>Precio</th><th>Fecha</th><th>Estado</th><th>Tracking</th></tr></thead><tbody>${lOrders.map(o=>`<tr><td>${o.producto||o.product}</td><td>${fmt(o.precio||o.price)}</td><td>${o.date||'—'}</td><td><span class="badge ${bCls(o.estado||o.status)}">${o.estado||o.status}</span></td><td>${o.tracking||'—'}</td></tr>`).join('')}</tbody></table></div>`;
  }
}

/* ══ CLIENTS ══ */
let stars=0;
function setStar(n){
  stars=n;document.getElementById('sv').value=n;
  document.querySelectorAll('.sb').forEach((s,i)=>s.classList.toggle('on',i<n));
}
async function subRev(e){
  e.preventDefault();
  const m=document.getElementById('revMsg');
  if(!stars){erMsg(m,'Seleccioná una calificación.');return;}
  const f=e.target;
  const name=f.querySelector('[name=nombre]').value;
  const comment=f.querySelector('[name=comentario]').value;
  // Guardar reseña localmente siempre
  const revs=db.revs();
  revs.unshift({name,comment,stars,date:new Date().toLocaleDateString('es-AR')});
  db.savR(revs);renRevs();
  // Enviar a FormSpree
  try{
    const resp=await fetch(FORMSPREE_URL,{
      method:'POST',
      body:new FormData(f),
      headers:{'Accept':'application/json'}
    });
    if(resp.ok){
      okMsg(m,'✦ ¡Gracias por tu reseña!');
    }else{
      okMsg(m,'✦ Reseña guardada localmente.');
    }
  }catch(_){
    okMsg(m,'✦ Reseña guardada localmente.');
  }
  f.reset();setStar(0);
}
function renRevs(){
  const revs=db.revs(),el=document.getElementById('revList');
  if(!revs.length){el.innerHTML='<p style="color:var(--slo);font-size:.7rem;letter-spacing:.1em;text-align:center">Aún no hay reseñas.</p>';return;}
  el.innerHTML=revs.map(r=>`<div class="rc"><div class="rn">${r.name} <span style="color:var(--slo);font-size:.6rem">· ${r.date}</span></div><div class="rs">${'★'.repeat(r.stars)}<span style="color:rgba(180,210,255,.18)">${'★'.repeat(5-r.stars)}</span></div><div class="rt">${r.comment}</div></div>`).join('');
}

/* ══ ADMIN ══ */
const APW='lacueva2024';let aOk=false;
function doAdmL(){
  const p=document.getElementById('aP').value,m=document.getElementById('aMsg');
  if(p===APW){aOk=true;document.getElementById('aLoginW').style.display='none';document.getElementById('aDash').style.display='block';renAdmin();}
  else erMsg(m,'Contraseña incorrecta.');
}
function renAdmin(){
  const u=db.me();
  if(u?.role==='admin'){aOk=true;document.getElementById('aLoginW').style.display='none';document.getElementById('aDash').style.display='block';}
  if(!aOk)return;
  renPT();renOT();renUT();renTT();
}
function swTab(n,b){
  document.querySelectorAll('.atn').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.ap').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');document.getElementById('ap-'+n).classList.add('on');
}
async function savPr(){
  const eid=document.getElementById('eid').value;
  const prod={
    id:eid||null,
    nombre:document.getElementById('pNm').value.trim(),
    imgKey:document.getElementById('pIc').value.trim()||'diamante',
    precio:parseInt(document.getElementById('pPr').value)||50000,
    mp:document.getElementById('pMp').value.trim(),
    descripcion:document.getElementById('pDs').value.trim(),
    activo:true
  };
  if(!prod.nombre){showAl('Ingresá un nombre.');return;}
  try{
    await db.savP(prod, !!eid);
    clrPr();renPT();showAl('✦ Producto guardado');
  }catch(e){showAl('Error al guardar producto.');}
}
function clrPr(){['eid','pNm','pIc','pPr','pMp','pDs'].forEach(id=>document.getElementById(id).value='');}
async function edPr(id){
  const prods = _prodsCache.length ? _prodsCache : await db.prods();
  const p = prods.find(g=>String(g.id)===String(id));
  if(!p)return;
  document.getElementById('eid').value=p.id;
  document.getElementById('pNm').value=p.nombre||p.name||'';
  document.getElementById('pIc').value=p.imgKey||p.icon||'';
  document.getElementById('pPr').value=p.precio||p.price||'';
  document.getElementById('pMp').value=p.mp||'';
  document.getElementById('pDs').value=p.descripcion||p.desc||'';
  swTab('prods',document.querySelector('.atn'));window.scrollTo(0,180);
}
async function dlPr(id){if(!confirm('¿Eliminar?'))return;try{await db.delP(id);renPT();showAl('Producto eliminado');}catch(e){showAl('Error al eliminar.');}}
async function renPT(){
  const tb=document.getElementById('pTb');
  tb.innerHTML='<tr><td colspan="4" class="nd">Cargando...</td></tr>';
  const prods=await db.prods();
  _prodsCache = prods; // actualizar caché
  tb.innerHTML=prods.map(p=>`<tr><td style="font-size:1.15rem">💎</td><td>${p.nombre}</td><td>${fmt(p.precio)}</td><td><div style="display:flex;gap:6px"><button class="bsm" onclick="edPr('${p.id}')">Editar</button><button class="bsm dd" onclick="dlPr('${p.id}')">Elim.</button></div></td></tr>`).join('');
}
async function renOT(){
  const tb=document.getElementById('oTb');
  tb.innerHTML='<tr><td colspan="6" class="nd">Cargando...</td></tr>';
  try{
    const orders=await db.orders()||[];
    if(!orders.length){tb.innerHTML='<tr><td colspan="6" class="nd">Sin pedidos</td></tr>';return;}
    tb.innerHTML=orders.map(o=>`<tr><td>${o.users?.nombre||'—'}</td><td>${o.users?.email||'—'}</td><td>${o.producto}</td><td>${fmt(o.precio)}</td><td>${new Date(o.created_at).toLocaleDateString('es-AR')}</td><td><span class="badge ${bCls(o.estado)}">${o.estado}</span></td></tr>`).join('');
  }catch(e){tb.innerHTML='<tr><td colspan="6" class="nd">Error al cargar</td></tr>';}
}
async function renUT(){
  const tb=document.getElementById('uTb');
  tb.innerHTML='<tr><td colspan="4" class="nd">Cargando...</td></tr>';
  try{
    const users=await supa('users','GET',null,'?order=created_at.desc')||[];
    if(!users.length){tb.innerHTML='<tr><td colspan="4" class="nd">Sin usuarios</td></tr>';return;}
    tb.innerHTML=users.map(u=>`<tr><td>${u.nombre}</td><td>${u.email}</td><td>—</td><td>${new Date(u.created_at).toLocaleDateString('es-AR')}</td></tr>`).join('');
  }catch(e){tb.innerHTML='<tr><td colspan="4" class="nd">Error al cargar</td></tr>';}
}
async function renTT(){
  const tb=document.getElementById('tTb');
  tb.innerHTML='<tr><td colspan="5" class="nd">Cargando...</td></tr>';
  try{
    const orders=await db.orders()||[];
    if(!orders.length){tb.innerHTML='<tr><td colspan="5" class="nd">Sin pedidos</td></tr>';return;}
    tb.innerHTML=orders.map((o,i)=>`<tr>
      <td>${o.users?.nombre||'—'}</td>
      <td>${o.producto}</td>
      <td><input type="text" value="${o.tracking||''}" id="tk_${i}" placeholder="Nº tracking" style="background:rgba(180,210,255,.04);border:1px solid var(--bdr);color:var(--sv2);font-family:'Cinzel',serif;font-size:.63rem;padding:5px 8px;border-radius:2px;width:125px"/></td>
      <td><select id="st_${i}" style="background:var(--bg3);border:1px solid var(--bdr);color:var(--sv2);font-family:'Cinzel',serif;font-size:.61rem;padding:5px 7px;border-radius:2px">
        <option value="pendiente" ${o.estado==='pendiente'?'selected':''}>Pendiente</option>
        <option value="enviado" ${o.estado==='enviado'?'selected':''}>Enviado</option>
        <option value="entregado" ${o.estado==='entregado'?'selected':''}>Entregado</option>
        <option value="cancelado" ${o.estado==='cancelado'?'selected':''}>Cancelado</option>
      </select></td>
      <td><button class="bsm ss" onclick="updTk('${o.id}',${i})">Guardar</button></td>
    </tr>`).join('');
  }catch(e){tb.innerHTML='<tr><td colspan="5" class="nd">Error al cargar</td></tr>';}
}
async function updTk(oid,i){
  const tk=document.getElementById('tk_'+i).value.trim();
  const st=document.getElementById('st_'+i).value;
  const data={tracking:tk,estado:st};
  if((st==='enviado'||st==='entregado')) data.dispatch_date=new Date().toISOString().split('T')[0];
  try{
    await db.updateOrder(oid,data);
    showAl('✦ Tracking actualizado');
    renTT();
    if(tk&&st==='enviado') console.log(`[MAIL] → orden ${oid}: tracking ${tk}`);
  }catch(e){showAl('Error al actualizar.');}
}

/* ══ ALERT ══ */
let aT;
function showAl(m){const el=document.getElementById('alb');el.textContent=m;el.style.display='block';clearTimeout(aT);aT=setTimeout(()=>el.style.display='none',3200);}

/* ══ CHECKOUT DINÁMICO — MERCADO PAGO ══ */
async function checkout(){
  const cart = db.cart();
  if(!cart.length) return;

  const btn  = document.getElementById('btnPagar');
  const msg  = document.getElementById('mpMsg');
  if(!btn) return;

  btn.textContent = 'Procesando...';
  btn.style.opacity = '0.6';
  btn.disabled = true;
  if(msg) msg.textContent = '';

  // Fallback: link de MP directo del primer item (si existe)
  const firstMpLink = cart[0]?.mp || null;

  try {
    const res = await fetch('/api/create-preference', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{
          name:  cart.length === 1
                   ? (cart[0].nombre || cart[0].name || 'Piedra preciosa')
                   : `LA CUEVA · ${cart.length} productos`,
          price: cart.reduce((s, i) => s + (Number(i.precio) || Number(i.price) || 0), 0),
          desc:  cart.map(i => i.nombre || i.name).join(', ')
        }]
      })
    });

    const data = await res.json();

    if(!res.ok || data.error) throw new Error(data.error || 'Error al procesar el pago');

    // Guardar pedidos (Supabase con fallback localStorage)
    const u = db.me();
    if(u && u.role !== 'admin'){
      for(const item of cart){
        try{
          await db.createOrder({
            user_id: u.id,
            producto: item.nombre || item.name,
            precio: item.precio || item.price,
            estado: 'pendiente',
            mp_payment_id: null
          });
        }catch(e){
          const orders=JSON.parse(localStorage.getItem('lc_o')||'[]');
          orders.push({
            id:'ORD-'+Date.now(),
            userId:u.email,
            producto:item.nombre||item.name,
            precio:item.precio||item.price,
            date:new Date().toLocaleDateString('es-AR'),
            estado:'pendiente',tracking:''
          });
          localStorage.setItem('lc_o',JSON.stringify(orders));
        }
      }
    }

    // Redirigir al checkout de MP
    window.location.href = data.init_point;

  } catch(err) {
    console.error('Checkout error:', err);

    if(btn){
      btn.textContent = '💳 Pagar Total';
      btn.style.opacity = '1';
      btn.disabled = false;
    }
    if(msg) {
      msg.style.color = 'var(--ruby)';
      msg.textContent = '⚠ Error al conectar con Mercado Pago (Asegurate de correr el servidor local con npm run dev).';
    }
  }
}

/* ══ RESULTADO DE PAGO — leer URL params ══ */
function checkPaymentResult(){
  const params = new URLSearchParams(window.location.search);
  const pago   = params.get('pago');
  if(!pago) return;

  // Limpiar URL sin recargar
  window.history.replaceState({}, '', window.location.pathname);

  const msgs = {
    aprobado: { txt: '✦ ¡Pago aprobado! Tu pedido fue registrado.', col: 'var(--em)' },
    error:    { txt: '⚠ El pago no se completó. Podés intentarlo de nuevo.', col: 'var(--ruby)' },
    pendiente:{ txt: '⏳ Tu pago está pendiente de acreditación.', col: '#c8b860' }
  };

  const m = msgs[pago];
  if(!m) return;

  if(pago === 'aprobado') { db.savC([]); updC(); }

  // Mostrar alerta grande
  const al = document.getElementById('alb');
  al.style.background  = 'var(--bg3)';
  al.style.borderColor = m.col;
  al.style.color       = m.col;
  al.style.maxWidth    = '340px';
  al.style.fontSize    = '.75rem';
  al.style.lineHeight  = '1.6';
  showAl(m.txt);
}

/* ══ INIT ══ */
updLBtn();updC();checkPaymentResult();
