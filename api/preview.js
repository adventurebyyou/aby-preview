// go.adventurebyyou.com/<slug>  ->  this function (via the rewrite in vercel.json)
//
// - Social crawlers (WhatsApp, Facebook, iMessage, etc.) get a tiny HTML page
//   with the correct title/description/image for that slug.
// - Everyone else gets redirected straight to the real page on
//   adventurebyyou.com. Nobody actually "stays" on go.adventurebyyou.com.
//
// TO ADD A NEW PAGE: add one entry to PAGES below (slug, path on the real
// site, title, description, image), commit, done. No other setup needed —
// this same function and domain handle every page.

const PAGES = {
  'about': {
    path: "/about",
    title: "About Adventure By You | Luxury Travel",
    description: "Adventure By You is a New York and New Jersey luxury travel concierge and private aviation company \u2014 bespoke itineraries, real relationships, real service.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=630&fit=crop&q=80",
  },
  'amalfi-coast': {
    path: "/destinations/italy-amalfi-coast",
    title: "Luxury Amalfi Coast Travel | Adventure By You",
    description: "Experience the Amalfi Coast \u2014 private cliffside villas in Positano, boat charters along the coastline, Michelin dining, and a dedicated concierge in Italy.",
    image: "https://images.unsplash.com/photo-1533165850316-2c87136d5e44?w=1200&h=630&fit=crop&q=80",
  },
  'become-affiliate': {
    path: "/become-affiliate",
    title: "Become an Affiliate | Adventure By You",
    description: "Refer your high-net-worth clients to Adventure By You and earn commission on every booking \u2014 private jets, yachts, villas, and bespoke travel.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b67c0e?w=1200&h=630&fit=crop&q=80",
  },
  'company': {
    path: "/company",
    title: "Our Story & Safety Standards | Adventure By You",
    description: "The team, safety standards, and story behind Adventure By You \u2014 ARGUS and Wyvern Wingman certified operators only, with concierge service available 24/7.",
    image: "https://media.base44.com/images/public/6a179019576503004ffd4ae9/5ad2e012f_PBYLOGO-10.jpg",
  },
  'contact': {
    path: "/contact",
    title: "Contact Us | Adventure By You",
    description: "Reach our luxury travel concierge team 24/7 \u2014 call, email, or WhatsApp for private jets, yacht charters, villas, and VIP trips. Quotes confirmed in 15 minutes.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1200&h=630&fit=crop&q=80",
  },
  'destinations': {
    path: "/destinations",
    title: "Luxury Travel Destinations | Adventure By You",
    description: "Curated luxury destinations worldwide \u2014 the Maldives, Amalfi Coast, Israel, the Greek Islands, Turks and Caicos, and beyond, each arranged door to door.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&fit=crop&q=80",
  },
  'empty-legs': {
    path: "/empty-legs",
    title: "Empty Leg Flights | Adventure By You",
    description: "Fly private at 25 to 75 percent below standard charter pricing \u2014 we monitor empty leg availability daily on key New York and New Jersey routes, updated live.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=630&fit=crop&q=80",
  },
  'executive-assistant-guide': {
    path: "/executive-assistant-travel-guide",
    title: "Executive Assistant Travel Guide | Adventure By You",
    description: "Built for executive assistants \u2014 one call arranges private jet charter, luxury hotels, and travel for your principal, with every detail confirmed in writing.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop&q=80",
  },
  'helicopter-shuttle': {
    path: "/executive-helicopter-shuttle",
    title: "Helicopter Shuttle NYC to NJ | Adventure By You",
    description: "Executive helicopter shuttle between Manhattan and Deal, New Jersey \u2014 fast, private, door-to-door, with pre-Shabbat departure windows built in.",
    image: "https://images.unsplash.com/photo-1586377231015-0f4900ab9e67?q=80&w=1200&h=630&fit=crop",
  },
  'faq': {
    path: "/faq",
    title: "Frequently Asked Questions | Adventure By You",
    description: "Answers about private jet charter, empty leg flights, yacht and villa rentals, kosher travel, booking, pricing, and how our concierge service works.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=630&fit=crop&q=80",
  },
  'flights': {
    path: "/flights",
    title: "Flight Booking Concierge | Adventure By You",
    description: "Commercial flight search and booking, handled by our concierge team \u2014 major carriers worldwide, with the same personal service as every trip we arrange.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cccb?w=1200&h=630&fit=crop&q=80",
  },
  'gift-cards': {
    path: "/gift-cards",
    title: "Gift Cards | Adventure By You",
    description: "Give the gift of a private jet charter, yacht day, villa stay, or bespoke experience \u2014 Adventure By You gift cards, delivered instantly.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1200&h=630&fit=crop&q=80",
  },
  'greece-islands': {
    path: "/destinations/greece-islands",
    title: "Luxury Greek Islands Travel | Adventure By You",
    description: "Luxury travel to Greece \u2014 Santorini's caldera views, Mykonos, and the Cyclades. Private villas, yacht charters between islands, full concierge service.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1200&h=630&fit=crop&q=80",
  },
  'home': {
    path: "/",
    title: "Adventure By You | Luxury Travel & Private Jets",
    description: "New York's private aviation and luxury travel concierge \u2014 private jets, superyacht charters, exclusive villas, safaris, and bespoke itineraries, arranged 24/7.",
    image: "https://media.base44.com/images/public/6a179019576503004ffd4ae9/5ad2e012f_PBYLOGO-10.jpg",
  },
  'honeymoons': {
    path: "/honeymoons",
    title: "Luxury Honeymoon Planning | Adventure By You",
    description: "Bespoke luxury honeymoon itineraries \u2014 overwater villas, private jet transfers, and a dedicated concierge for the first journey you'll take together.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=630&fit=crop&q=80",
  },
  'hotel-quote': {
    path: "/hotel-quote",
    title: "Get a Free Hotel Quote | Adventure By You",
    description: "Tell us where you want to stay and your dates \u2014 we'll pull exclusive rates and get back to you fast. No login required.",
    image: "https://media.base44.com/images/public/6a179019576503004ffd4ae9/5ad2e012f_PBYLOGO-10.jpg",
  },
  'israel': {
    path: "/destinations/israel",
    title: "Luxury Travel to Israel | Adventure By You",
    description: "Luxury Israel travel \u2014 Jerusalem, Tel Aviv, and the Dead Sea, woven into one itinerary. Kosher-aware planning and private aviation access, start to finish.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=630&fit=crop&q=80",
  },
  'jet-charter': {
    path: "/jet-charter",
    title: "Private Jet Charter | Adventure By You",
    description: "Private jet charter from New York and New Jersey \u2014 Teterboro departures, ARGUS-rated operators, empty leg savings, and a quote confirmed in fifteen minutes.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1200&h=630&fit=crop&auto=format",
  },
  'jet-charter-nj': {
    path: "/jet-charter/new-jersey",
    title: "Private Jet Charter New Jersey | Adventure By You",
    description: "Private jet charter from New Jersey \u2014 Teterboro departures, ARGUS-rated operators, and door-to-door concierge service for Miami, Aspen, and Caribbean routes.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1200&h=630&fit=crop&auto=format",
  },
  'jet-ny-aspen': {
    path: "/jet-charter/new-york-to-aspen",
    title: "Private Jet New York to Aspen | Adventure By You",
    description: "Fly private from New York to Aspen this ski season \u2014 direct charter into ASE, luxury ground transfers, and full concierge service from tarmac to mountain.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1200&h=630&fit=crop&auto=format",
  },
  'jet-ny-miami': {
    path: "/jet-charter/new-york-to-miami",
    title: "Private Jet New York to Miami | Adventure By You",
    description: "Fly private from New York to Miami in under three hours \u2014 one of the East Coast's busiest corridors, with strong empty leg availability and full concierge service.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1200&h=630&fit=crop&auto=format",
  },
  'jet-ny-palmbeach': {
    path: "/jet-charter/new-york-to-palm-beach",
    title: "Private Jet New York to Palm Beach | Adventure By You",
    description: "Fly private from New York to Palm Beach \u2014 winter's most requested route. Direct charter to KPBI or Boca Raton, luxury transfers, and kosher catering on request.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1200&h=630&fit=crop&auto=format",
  },
  'jet-teterboro': {
    path: "/jet-charter/teterboro",
    title: "Private Jet Charter Teterboro | Adventure By You",
    description: "Charter from Teterboro Airport, twelve miles from Midtown Manhattan \u2014 zero commercial traffic, ARGUS-rated operators, and departures arranged within hours.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1200&h=630&fit=crop&auto=format",
  },
  'kosher-travel': {
    path: "/kosher-luxury-travel",
    title: "Kosher Luxury Travel Planning | Adventure By You",
    description: "Luxury travel for observant Jewish families \u2014 kosher-certified hotels, Shabbat-aware itineraries, villas, and private jet access, planned around your calendar.",
    image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=1200&h=630&fit=crop&q=80",
  },
  'kosher-ny': {
    path: "/kosher-luxury-travel/new-york",
    title: "Kosher Travel Agency New York | Adventure By You",
    description: "Kosher luxury travel concierge for New York's observant communities \u2014 Shabbat-aware planning, certified kosher catering, and private aviation access.",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&h=630&fit=crop&q=80",
  },
  'family-vacations': {
    path: "/luxury-family-vacations",
    title: "Luxury Family Vacation Planning | Adventure By You",
    description: "Multi-generational luxury family travel, planned around everyone \u2014 private aviation, kosher-friendly options, curated destinations, and one dedicated concierge.",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&h=630&fit=crop&q=80",
  },
  'safari': {
    path: "/luxury-safari",
    title: "Luxury Safari Planning | Adventure By You",
    description: "Luxury African safaris, planned end to end \u2014 private game reserves, fly-in bush camps, family-friendly itineraries, and concierge service to the last mile.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=630&fit=crop&q=80",
  },
  'safari-guide': {
    path: "/travel-inspiration/luxury-safari-planning-guide",
    title: "How to Plan a Luxury Safari | Adventure By You",
    description: "A practical guide to planning a luxury safari \u2014 choosing destinations, timing your trip to migrations, fly-in camps, aircraft, and the decisions that matter most.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=630&fit=crop&q=80",
  },
  'aspen': {
    path: "/luxury-travel/aspen",
    title: "Luxury Travel to Aspen | Adventure By You",
    description: "Luxury Aspen trips, fully arranged \u2014 private jet charter to ASE, ski-in accommodations, dining reservations, and a dedicated mountain concierge.",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&h=630&fit=crop&q=80",
  },
  'luxury-concierge': {
    path: "/luxury-travel-concierge",
    title: "Luxury Travel Concierge | Adventure By You",
    description: "Bespoke luxury travel planning with one dedicated concierge \u2014 flights, hotels, villas, safaris, and VIP experiences, arranged from first call to return.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=630&fit=crop&q=80",
  },
  'los-angeles': {
    path: "/luxury-travel/los-angeles",
    title: "Luxury Travel Agency Los Angeles | Adventure By You",
    description: "Luxury travel concierge for Los Angeles \u2014 private jet charter into Van Nuys, bespoke itineraries, and concierge service from Beverly Hills to Malibu.",
    image: "https://images.unsplash.com/photo-1446757987292-8d6e0ef99e6a?w=1200&h=630&fit=crop&q=80",
  },
  'luxury-miami': {
    path: "/luxury-travel/miami",
    title: "Luxury Travel Agency Miami | Adventure By You",
    description: "Luxury travel concierge for Miami \u2014 private jet charter into Opa-locka, yacht charters, boutique hotels, and itineraries planned around your schedule.",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&h=630&fit=crop&q=80",
  },
  'villas-europe': {
    path: "/luxury-villas-europe",
    title: "Luxury Villa Rentals Europe | Adventure By You",
    description: "Private luxury villas in Tuscany, the Amalfi Coast, French Riviera, and Greece \u2014 personally vetted, fully staffed, and backed by full concierge service.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&h=630&fit=crop&q=80",
  },
  'maldives': {
    path: "/destinations/maldives",
    title: "Luxury Maldives Travel | Adventure By You",
    description: "Luxury Maldives vacations \u2014 overwater villas, private-island resorts, seaplane and private jet access, and concierge service from booking to the beach.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=630&fit=crop&q=80",
  },
  'mediterranean-yachts': {
    path: "/yachts-villas/mediterranean-yacht-charter",
    title: "Mediterranean Yacht Charter | Adventure By You",
    description: "Charter a fully crewed superyacht in the Mediterranean \u2014 Amalfi, the Greek Islands, French Riviera, and Croatia \u2014 with a captain and itinerary matched to you.",
    image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=1200&h=630&fit=crop&q=80",
  },
  'miami-getaway': {
    path: "/miami-getaway",
    title: "Miami Getaway Packages | Adventure By You",
    description: "Boutique waterfront hotel, roundtrip flights, and private transfers in Miami \u2014 curated and booked for you, from touchdown to the front desk.",
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=1200&h=630&fit=crop&q=80",
  },
  'pesach': {
    path: "/kosher-luxury-travel/pesach-programs",
    title: "Luxury Pesach Programs 2027 | Adventure By You",
    description: "Luxury Pesach programs for 2027, matched to your family \u2014 expert guidance on the best Passover hotels and resorts, plus private jet access to get there.",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&h=630&fit=crop&q=80",
  },
  'privacy-policy': {
    path: "/privacy-policy",
    title: "Privacy Policy | Adventure By You",
    description: "How Adventure By You collects, uses, and protects your personal information when you inquire about or book luxury travel services with us.",
    image: "https://media.base44.com/images/public/6a179019576503004ffd4ae9/5ad2e012f_PBYLOGO-10.jpg",
  },
  'jet-cost-guide': {
    path: "/jet-charter/private-jet-cost-guide",
    title: "Private Jet Charter Cost Guide | Adventure By You",
    description: "An honest, no-nonsense guide to private jet charter costs \u2014 aircraft categories, hourly rates, route pricing, empty legs, and what really affects your quote.",
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1200&h=630&fit=crop&auto=format",
  },
  'jet-vs-first-class': {
    path: "/travel-inspiration/private-jet-vs-first-class",
    title: "Private Jet vs First Class | Adventure By You",
    description: "Private jet versus first class, honestly compared \u2014 real costs, time saved, comfort, and privacy, so frequent luxury travelers can decide what's worth it.",
    image: "https://images.unsplash.com/photo-1556388158-26ea04d6affd?w=1200&h=630&fit=crop&q=80",
  },
  'services': {
    path: "/services",
    title: "Luxury Travel Services | Adventure By You",
    description: "Every luxury travel service in one place \u2014 private jet charter, yacht charters, villas, safaris, kosher travel, honeymoons, and bespoke VIP experiences.",
    image: "https://media.base44.com/images/public/6a179019576503004ffd4ae9/5ad2e012f_PBYLOGO-10.jpg",
  },
  'sunday-on-the-water': {
    path: "/sunday-on-the-water",
    title: "Sunday on the Water | Adventure By You",
    description: "A private family yacht day for Deal and Monmouth County families \u2014 kosher catering, luxury SUV transport, and a photographer, all fully orchestrated.",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&h=630&fit=crop&q=80",
  },
  'terms': {
    path: "/terms-of-service",
    title: "Terms of Service | Adventure By You",
    description: "The terms governing your use of Adventure By You's website and luxury travel concierge services.",
    image: "https://media.base44.com/images/public/6a179019576503004ffd4ae9/5ad2e012f_PBYLOGO-10.jpg",
  },
  'testimonials': {
    path: "/testimonials",
    title: "Client Testimonials | Adventure By You",
    description: "Real stories from Adventure By You clients \u2014 private aviation, yacht charters, villas, safaris, and bespoke journeys, told in their own words.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=630&fit=crop&q=80",
  },
  'chat-concierge': {
    path: "/concierge",
    title: "Chat With Our Concierge | Adventure By You",
    description: "Start a live conversation with our concierge team \u2014 private aviation, yachts, villas, safaris, and honeymoons, tailored for you in real time.",
    image: "https://media.base44.com/images/public/6a179019576503004ffd4ae9/5ad2e012f_PBYLOGO-10.jpg",
  },
  'travel-inspiration': {
    path: "/travel-inspiration",
    title: "Luxury Travel Inspiration | Adventure By You",
    description: "Luxury travel inspiration and expert guides \u2014 private aviation insights, safari planning, destination ideas, and honest advice for discerning travelers.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=630&fit=crop&q=80",
  },
  'turks-caicos': {
    path: "/destinations/turks-and-caicos",
    title: "Luxury Turks & Caicos Travel | Adventure By You",
    description: "Luxury Turks and Caicos \u2014 private villas along Grace Bay's famous sand, direct jet charter to Providenciales, and concierge service from arrival to departure.",
    image: "https://images.unsplash.com/photo-1473221326025-9183b464bb7e?w=1200&h=630&fit=crop&q=80",
  },
  'vip': {
    path: "/vip-experiences",
    title: "VIP Travel Experiences | Adventure By You",
    description: "Exclusive VIP access worldwide \u2014 Formula 1 paddocks, after-hours museum tours, heli-skiing, and private culinary evenings, arranged down to the last detail.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=630&fit=crop&q=80",
  },
  'empty-leg-explained': {
    path: "/travel-inspiration/what-is-an-empty-leg-flight",
    title: "What Is an Empty Leg Flight? | Adventure By You",
    description: "Empty leg flights explained simply \u2014 what they are, how repositioning pricing works, and how to fly private at 25 to 75 percent off standard charter rates.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=630&fit=crop&q=80",
  },
  'work-with-us': {
    path: "/work-with-us",
    title: "Partner With Us | Adventure By You",
    description: "Partner with Adventure By You \u2014 service providers and referral partners serving high-net-worth clients in private aviation, yachts, villas, and travel.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=630&fit=crop&q=80",
  },
  'yachts-villas': {
    path: "/yachts-villas",
    title: "Yacht & Villa Charters | Adventure By You",
    description: "Private crewed yacht charters and hand-picked luxury villas worldwide \u2014 Mediterranean, Caribbean, and beyond \u2014 paired seamlessly with your private jet arrival.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&h=630&fit=crop&q=80",
  },
  'zadun-los-cabos': {
    path: "/kosher-luxury-travel/zadun-los-cabos",
    title: "Kosher Luxury at Zad\u00fan, A Ritz-Carlton Reserve",
    description: "Five-star Los Cabos, fully kosher \u2014 separate kitchens, on-site Rabbi supervision, and Shabbat dinners on the beach. We handle every detail.",
    image: "https://images.unsplash.com/photo-1594325865031-724f97b191ee?w=1200&h=630&fit=crop&q=80",
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
