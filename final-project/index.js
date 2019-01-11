import Content from './src/Content';
import Footer from './src/Footer';
import Navigation from './src/Navigation';
import Header from './src/Header';

var State = {
    'posts': [],
    'active': 'home',
    'home': {
        'title': 'Loving Lucille Jewelry',
        'links': ['about', 'contact us', 'bracelets', 'necklaces','keychains']
    },
    'blog': {
        'title': 'Read my amazing blog',
        'links': ['home', 'contact', 'projects']
    },
    'contact': {
        'title': 'Call me here',
        'links': ['home', 'blog', 'projects']
    },
    'projects': {
        'title': 'My great work',
        'links': ['home', 'blog', 'contact']
    }
};