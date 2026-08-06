const PAGES = {
  'zadun-los-cabos': {
    path: '/kosher-luxury-travel/zadun-los-cabos',
    title: 'Kosher Luxury at Zadún, A Ritz-Carlton Reserve',
    description:
      'Five-star Los Cabos, fully kosher — separate kitchens, on-site Rabbi supervision, and Shabbat dinners on the beach. We handle every detail.',
    image: 'https://images.unsplash.com/photo-1594325865031-724f97b191ee?w=1200&h=630&fit=crop&q=80',
  },
};

const SITE_URL = 'https://www.adventurebyyou.com';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = (req, res) => {
  const slug = (req.query.slug || '').toString();
  const page = PAGES[slug];

  if (!page) {
    res.status(404).send('Not found');
    return;
  }

  const destination = `${SITE_URL}${page.path}`;
  const userAgent = req.headers['user-agent'] || '';
  const isCrawler =
    /facebookexternalhit|whatsapp|linkedinbot|twitterbot|slackbot|telegrambot|discordbot|pinterest|redditbot/i.test(
      userAgent
    );

  if (!isCrawler) {
    res.writeHead(302, { Location: destination });
    res.end();
    return;
  }

  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const image = escapeHtml(page.image);
  const destEscaped = escapeHtml(destination);

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>${title}</title>
<meta property="og:type" content="website" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${image}" />
<meta property="og:url" content="${destEscaped}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${image}" />
<meta http-equiv="refresh" content="0; url=${destEscaped}" />
</head>
<body></body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
};
