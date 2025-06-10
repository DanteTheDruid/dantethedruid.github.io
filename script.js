// DOM elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const commandSearch = document.getElementById('command-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const commandSections = document.querySelectorAll('.command-section');
const commandTables = document.querySelectorAll('.commands-table');
const backToTopButton = document.getElementById('back-to-top');
const loadingScreen = document.getElementById('loading-screen');

// Navigation toggle for mobile
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Command search functionality
function searchCommands(query) {
    query = query.toLowerCase().trim();
    
    commandTables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        let visibleRows = 0;
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let rowText = '';
            
            // Clear any previous search styling
            cells.forEach(cell => {
                // Store original HTML if not already stored
                if (!cell.dataset.originalHtml) {
                    cell.dataset.originalHtml = cell.innerHTML;
                }
                // Restore original HTML
                cell.innerHTML = cell.dataset.originalHtml;
                rowText += cell.textContent.toLowerCase() + ' ';
            });
            
            if (query === '' || rowText.includes(query)) {
                row.style.display = '';
                visibleRows++;
                
                // Highlight search terms
                if (query !== '') {
                    cells.forEach(cell => {
                        const cellHtml = cell.innerHTML;
                        const cellText = cell.textContent;
                        
                        if (cellText.toLowerCase().includes(query)) {
                            // Only highlight text nodes, not HTML tags
                            const highlightedHtml = cellHtml.replace(
                                new RegExp(`(${escapeRegExp(query)})(?![^<]*>)`, 'gi'),
                                '<mark class="search-highlight">$1</mark>'
                            );
                            cell.innerHTML = highlightedHtml;
                        }
                    });
                }
            } else {
                row.style.display = 'none';
            }
        });
        
        // Show/hide section based on visible rows
        const section = table.closest('.command-section');
        if (visibleRows === 0 && query !== '') {
            section.style.display = 'none';
        } else {
            section.style.display = '';
        }
    });
}

// Helper function to escape regex special characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Filter functionality
function filterCommands(category) {
    commandSections.forEach(section => {
        const sectionCategory = section.getAttribute('data-category');
        
        if (category === 'all' || sectionCategory === category) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

// Back to top button visibility and functionality
function toggleBackToTop() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

backToTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading screen
function hideLoadingScreen() {
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000); // Show loading for at least 1 second
    }
}

// Toast notification system
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('visible');
    }, 100);
    
    // Hide toast
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// Enhanced copy functionality with toast feedback
function enhancedCopyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied: ${text}`, 'success', 2000);
        
        // Visual feedback on the element
        const originalBg = element.style.background;
        element.style.background = 'var(--primary-green)';
        element.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            element.style.background = originalBg;
            element.style.transform = '';
        }, 500);
    }).catch(err => {
        showToast('Failed to copy to clipboard', 'error', 3000);
        console.error('Failed to copy: ', err);
    });
}

// Enhanced analytics tracking (placeholder for future integration)
function trackEvent(category, action, label = '') {
    // Placeholder for analytics integration
    console.log(`Analytics: ${category} - ${action} - ${label}`);
}

// Enhanced search with analytics
function searchCommandsWithAnalytics(query) {
    searchCommands(query);
    if (query.length > 2) {
        trackEvent('Search', 'Command Search', query);
    }
}

// Enhanced filter with analytics
function filterCommandsWithAnalytics(category) {
    filterCommands(category);
    trackEvent('Filter', 'Command Filter', category);
}

// Keyboard shortcuts with visual feedback
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (commandSearch) {
            commandSearch.focus();
            commandSearch.select();
            showToast('Search focused - start typing!', 'info', 2000);
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        if (commandSearch && commandSearch === document.activeElement) {
            commandSearch.value = '';
            searchCommands('');
            commandSearch.blur();
            showToast('Search cleared', 'info', 1500);
        }
    }
    
    // Alt + T to go to top
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
    }
}

// Initialize animations
function initAnimations() {
    // Add fade-in class to elements that should animate
    const animatedElements = [
        '.feature-card',
        '.security-card',
        '.step',
        '.command-section'
    ];
    
    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('fade-in');
        });
    });
}



// FAQ functionality
function createFAQ() {
    const faqData = [
        {
            question: "How do I get started with TwitchIntegrationPlus?",
            answer: "Follow our 3-step setup guide: Install the mod, authorize with `/twitch auth`, and connect with `/twitch connect`. It's that simple!"
        },
        {
            question: "Are my Twitch tokens secure?",
            answer: "Yes! All OAuth tokens are encrypted and stored separately from configuration files. They never appear in the UI and are completely streaming-safe."
        },
        {
            question: "How do viewers earn tokens?",
            answer: "Viewers automatically earn tokens by watching your stream. You can also manually reward tokens using admin commands or set up automatic token rewards."
        },
        {
            question: "Can I customize the token costs for redemptions?",
            answer: "The token costs are pre-set to maintain balance, but you can give tokens freely to viewers using admin commands to adjust their spending power."
        },
        {
            question: "Does this work in multiplayer?",
            answer: "Yes! TwitchIntegrationPlus works in both single-player and multiplayer worlds. Only the host needs to set up the connection."
        },
        {
            question: "What if a command isn't working?",
            answer: "Check your connection status with `/twitch status`. Make sure you're connected to chat and have the proper OAuth permissions. Restart the connection if needed."
        }
    ];
    
    const faqHtml = `
        <section class="faq-section">
            <div class="container">
                <div class="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Common questions about TwitchIntegrationPlus</p>
                </div>
                <div class="faq-container">
                    ${faqData.map((item, index) => `
                        <div class="faq-item">
                            <div class="faq-question" data-faq="${index}">
                                <span>${item.question}</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer" id="faq-${index}">
                                <p>${item.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    // Insert FAQ before the download section
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
        const faqDiv = document.createElement('div');
        faqDiv.innerHTML = faqHtml;
        downloadSection.parentNode.insertBefore(faqDiv.firstElementChild, downloadSection);
        
        // Add FAQ functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqIndex = question.getAttribute('data-faq');
                const answer = document.getElementById(`faq-${faqIndex}`);
                const icon = question.querySelector('i');
                
                // Toggle answer visibility
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                
                // Toggle icon rotation
                icon.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
                
                // Close other open answers
                document.querySelectorAll('.faq-answer').forEach((otherAnswer, index) => {
                    if (index != faqIndex) {
                        otherAnswer.style.display = 'none';
                        document.querySelectorAll('.faq-question i')[index].style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Enhanced scroll handler (define before using)
const enhancedScrollHandler = throttle(() => {
    animateOnScroll();
    handleNavbarScroll();
    toggleBackToTop();
}, 16);

// Event listeners
window.addEventListener('scroll', enhancedScrollHandler);

window.addEventListener('load', () => {
    initAnimations();
    createFAQ();
    animateOnScroll();
    hideLoadingScreen();
    
    // Show welcome message after loading
    setTimeout(() => {
        showToast('Welcome to TwitchIntegrationPlus! Press Ctrl+K to search commands.', 'info', 4000);
    }, 1500);
});

// Replace the existing keyboard event listener
document.removeEventListener('keydown', document.querySelector('keydown'));
document.addEventListener('keydown', handleKeyboardShortcuts);

// Update copy functionality for code blocks
document.querySelectorAll('code').forEach(codeBlock => {
    if (codeBlock.textContent.startsWith('!') || codeBlock.textContent.startsWith('/')) {
        codeBlock.style.cursor = 'pointer';
        codeBlock.title = 'Click to copy (or use Ctrl+K to search)';
        
        codeBlock.addEventListener('click', () => {
            enhancedCopyToClipboard(codeBlock.textContent, codeBlock);
            trackEvent('Copy', 'Command Copy', codeBlock.textContent);
        });
    }
});

// Update search and filter event listeners
if (commandSearch) {
    commandSearch.addEventListener('input', (e) => {
        searchCommandsWithAnalytics(e.target.value);
    });
}

if (filterButtons) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterCommandsWithAnalytics(category);
            
            // Clear search when filtering
            if (commandSearch) {
                commandSearch.value = '';
                searchCommands('');
            }
        });
    });
}

// Add intersection observer for better scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            trackEvent('View', 'Section Viewed', entry.target.id || entry.target.className);
        }
    });
}, observerOptions);

// Observe elements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Export enhanced functions
window.TwitchIntegrationPlus = {
    ...window.TwitchIntegrationPlus,
    showToast,
    trackEvent,
    enhancedCopyToClipboard
};
