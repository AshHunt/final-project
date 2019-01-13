import Content from './src/Content';
import Footer from './src/Footer';
import Navigation from './src/Navigation';
import Header from './src/Header';

var State = {
    'posts': [],
    'active': 'home',
    'home': {
        'title': 'Loving Lucille Jewelry',
        'links': ['about', 'contact us', 'bracelets', 'necklaces','keychains and more', 'for the kids']
    },
    'about us': {
        'title': 'About Loving Lucille',
        'links': ['home', 'contact us', 'bracelets', 'necklaces', 'keychains and more', 'for the kids']
    },
    'bracelets': {
        'title': 'Our Lovely Bracelets',
        'links': ['home', 'about', 'contact us','necklaces', 'keychains and more', 'for the kids']
    },
    'contact us': {
        'title': 'Send Us an email',
        'links': ['about', 'home', 'bracelets', 'necklaces', 'keychains and more', 'for the kids']
    },
    'necklaces': {
        'title': 'Our Lovely Necklaces',
        'links': ['about', 'contact us', 'bracelets', 'home', 'keychains and more', 'for the kids'] 
    }, 
    'keychains and more': {
        'title': 'We Have Keychains and More',
        'links': ['about', 'contact us', 'bracelets', 'necklaces', 'home', 'for the kids']
    },
    'for the kids':{
        'title': 'Fun Stuff for the Kids',
        'links': ['about', 'contact us', 'bracelets', 'necklaces', 'keychains and more', 'home']
    }
};