const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Parser = require('rss-parser'); // For parsing the RSS feed
const parser = new Parser();

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Landing Page Route - Fetch Urdu News from BBC Urdu RSS Feed
app.get('/', async (req, res) => {
    try {
        // Fetch the RSS feed from BBC Urdu
        const feed = await parser.parseURL('https://feeds.bbci.co.uk/urdu/rss.xml'); // BBC Urdu Latest News RSS Feed URL
        const articles = feed.items.map(item => ({
            title: item.title,
            link: item.link,
            description: item.contentSnippet || item.content,
            pubDate: item.pubDate,
            source: "BBC Urdu"
        }));

        res.render('index', { articles, error: null, title: 'Latest Urdu News' });
    } catch (error) {
        console.error('Error fetching news:', error.message);
        res.render('index', { articles: [], error: 'Could not fetch Urdu news articles', title: 'Latest Urdu News' });
    }
});

// Server Port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

