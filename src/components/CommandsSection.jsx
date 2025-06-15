import { useState, useEffect, useRef, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSearch, 
  faStar, 
  faUsers, 
  faCoins, 
  faDragon, 
  faCrown,
  faTerminal,
  faInfoCircle,
  faGamepad,
  faChevronDown,
  faQuoteLeft,
  faHeart,
  faMagic,
  faGift,
  faLifeRing,
  faLeaf,
  faSmile,
  faSun,
  faWind,
  faDizzy,
  faArrowsAltV,
  faBolt,
  faCloudRain,
  faMoon,
  faShieldAlt,
  faSkull,
  faComments,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'

const CommandsSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openDropdowns, setOpenDropdowns] = useState({})
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(-1)
  const [isKeyboardMode, setIsKeyboardMode] = useState(false)
  const searchInputRef = useRef(null)
  const commandRefs = useRef([])

  const categories = [
    { id: 'all', label: 'All Commands', icon: faStar },
    { id: 'viewer', label: 'Viewer', icon: faUsers },
    { id: 'redemption', label: 'Redemptions', icon: faCoins },
    { id: 'spawn', label: 'Spawn System', icon: faDragon },
    { id: 'admin', label: 'Admin', icon: faCrown }
  ]

  // Add keyboard navigation functionality
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'f') {
        event.preventDefault()
        setIsKeyboardMode(true)
        searchInputRef.current?.focus()
        return
      }

      if (event.key === 'Escape') {
        setIsKeyboardMode(false)
        setSelectedCommandIndex(-1)
        searchInputRef.current?.blur()
        return
      }

      if (isKeyboardMode) {
        const filteredSections = getFilteredSections()
        const allCommands = filteredSections.flatMap(section => 
          section.sections.flatMap(subSection => subSection.commands)
        )

        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault()
            setSelectedCommandIndex(prev => 
              prev < allCommands.length - 1 ? prev + 1 : 0
            )
            break
          case 'ArrowUp':
            event.preventDefault()
            setSelectedCommandIndex(prev => 
              prev > 0 ? prev - 1 : allCommands.length - 1
            )
            break
          case 'Enter':
            if (selectedCommandIndex >= 0 && selectedCommandIndex < allCommands.length) {
              // Scroll to selected command
              const commandElement = commandRefs.current[selectedCommandIndex]
              if (commandElement) {
                commandElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
                commandElement.classList.add('command-highlight-flash')
                setTimeout(() => {
                  commandElement.classList.remove('command-highlight-flash')
                }, 1000)
              }
            }
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isKeyboardMode, selectedCommandIndex])

  // Enhanced search highlighting function
  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm || !text) return text
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="search-highlight-enhanced">
          {part}
        </mark>
      ) : part
    )
  }

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownId]: !prev[dropdownId]
    }))
  }

  // Command data structure
  const commandData = {
    viewer: {
      title: "Viewer Chat Commands",
      description: "Essential commands that all viewers can use to interact with the stream and check game information.",
      sections: [
        {
          id: 'game-info-commands',
          title: 'Game Information Commands',
          icon: faInfoCircle,
          count: 8,
          commands: [
            {
              command: '!health',
              badge: 'Viewer',
              description: "Shows player's current health status",
              example: "@viewer Player health: 450/500 (90%)"
            },
            {
              command: '!time',
              badge: 'Viewer',
              description: "Shows current in-game time",
              example: "@viewer Current time: Day (75% complete)"
            },
            {
              command: '!players',
              badge: 'Viewer',
              description: "Lists all active players in the game",
              example: "@viewer 2 players online: Dante, Friend123"
            },
            {
              command: '!boss',
              badge: 'Viewer',
              description: "Shows currently active bosses",
              example: "@viewer Active bosses: Eye of Cthulhu"
            },
            {
              command: '!weather',
              badge: 'Viewer',
              description: "Shows current weather conditions",
              example: "@viewer Current weather: Raining, Snow biome"
            },
            {
              command: '!progression',
              badge: 'Viewer',
              description: "Reports the current world progression tier (e.g., Hardmode, Post-Eye, etc.)",
              example: "@username Current progression: Hardmode"
            },
            {
              command: '!spawnlist',
              badge: 'Viewer',
              description: "Shows all possible mobs you can currently spawn, organized by tier and filtered by your progression",
              example: "!spawnlist"
            },
            {
              command: '!spawn <tier>',
              badge: 'Viewer',
              description: "Spawns a random mob from the specified tier (harmless, common, rare, deadly), filtered by world progression",
              example: "!spawn harmless"
            }
          ]
        },
        {
          id: 'token-commands',
          title: 'Token & Economy Commands',
          icon: faCoins,
          count: 3,
          commands: [
            {
              command: '!tokens',
              badge: 'Viewer',
              description: "Check your current token balance",
              example: "@viewer You have 150 tokens"
            },
            {
              command: '!leaderboard',
              badge: 'Viewer',
              description: "Shows top token holders",
              example: "Shows top 5 viewers with most tokens"
            },
            {
              command: '!watchtime',
              badge: 'Viewer',
              description: "Check your personal watch time",
              example: "@viewer You've watched for 2.5 hours"
            }
          ]
        },
        {
          id: 'interaction-commands',
          title: 'Interaction Commands',
          icon: faGamepad,
          count: 3,
          commands: [
            {
              command: '!shop / !rewards',
              badge: 'Viewer',
              description: "View all available redemptions and their costs",
              example: "Shows all redemption options with costs"
            },
            {
              command: '!redeem <option>',
              badge: 'Viewer',
              description: "Redeem your tokens for various effects",
              example: "@viewer Redeemed 'heal' for 50 tokens!"
            },
            {
              command: '!help / !commands',
              badge: 'Viewer',
              description: "Shows all available commands",
              example: "Lists all available commands"
            }
          ]
        }
      ]
    },
    redemption: {
      title: "Token Redemption System",
      description: "Spend your earned tokens to influence gameplay, trigger events, and interact with the streamer's world.",
      sections: [
        {
          id: 'player-effects',
          title: 'Player Effects',
          icon: faHeart,
          count: 5,
          commands: [
            {
              command: '!redeem heal',
              cost: '50 tokens',
              description: "Heal the player by 100 HP instantly",
              effect: "Player Effect",
              effectIcon: faHeart
            },
            {
              command: '!redeem buff',
              cost: '30 tokens',
              description: "Get a random beneficial buff for 5 minutes",
              effect: "Player Effect",
              effectIcon: faMagic
            },
            {
              command: '!redeem item',
              cost: '75 tokens',
              description: "Spawn a random useful item in the world",
              effect: "Player Effect",
              effectIcon: faGift
            },
            {
              command: '!redeem respawn',
              cost: '40 tokens',
              description: "Respawn the player if they are currently dead",
              effect: "Player Effect",
              effectIcon: faLifeRing
            },
            {
              command: '!redeem biome',
              cost: '120 tokens',
              description: "Get biome-specific buffs based on current location",
              effect: "Player Effect",
              effectIcon: faLeaf
            }
          ]
        },
        {
          id: 'fun-effects',
          title: 'Fun & Interactive Effects',
          icon: faSmile,
          count: 7,
          commands: [
            {
              command: '!redeem rain',
              cost: '25 tokens',
              description: "Toggle rain on or off in the world",
              effect: "Weather Effect",
              effectIcon: faCloudRain
            },
            {
              command: '!redeem daynight',
              cost: '35 tokens',
              description: "Toggle between day and night instantly",
              effect: "Time Effect",
              effectIcon: faSun
            },
            {
              command: '!redeem slime',
              cost: '20 tokens',
              description: "Spawn a harmless slime party around the player",
              effect: "Spawn Effect",
              effectIcon: faSmile
            },
            {
              command: '!redeem windy',
              cost: '40 tokens',
              description: "Make the world very windy for atmospheric effect",
              effect: "Weather Effect",
              effectIcon: faWind
            },
            {
              command: '!redeem bunnies',
              cost: '30 tokens',
              description: "Spawn a horde of adorable bunnies everywhere",
              effect: "Spawn Effect",
              effectIcon: faHeart
            },
            {
              command: '!redeem confusion',
              cost: '35 tokens',
              description: "Reverse player's movement controls for 30 seconds",
              effect: "Player Debuff",
              effectIcon: faDizzy
            },
            {
              command: '!redeem gravity',
              cost: '50 tokens',
              description: "Flip player's gravity for 60 seconds of chaos",
              effect: "Player Debuff",
              effectIcon: faArrowsAltV
            }
          ]
        },
        {
          id: 'event-effects',
          title: 'Event Effects',
          icon: faBolt,
          count: 5,
          commands: [
            {
              command: '!redeem slimerain',
              cost: '150 tokens',
              description: "Trigger the epic Slime Rain event",
              effect: "Major Event",
              effectIcon: faCloudRain
            },
            {
              command: '!redeem bloodmoon',
              cost: '200 tokens',
              description: "Trigger a terrifying Blood Moon event",
              effect: "Major Event",
              effectIcon: faMoon
            },
            {
              command: '!redeem eclipse',
              cost: '300 tokens',
              description: "Trigger a dangerous Solar Eclipse event",
              effect: "Major Event",
              effectIcon: faSun
            },
            {
              command: '!redeem sandstorm',
              cost: '100 tokens',
              description: "Trigger a blinding sandstorm in desert areas",
              effect: "Weather Event",
              effectIcon: faWind
            },
            {
              command: '!redeem chaos',
              cost: '180 tokens',
              description: "Spawn random creatures everywhere for pure chaos",
              effect: "Chaos Event",
              effectIcon: faBolt
            }
          ]
        },
        {
          id: 'advanced-effects',
          title: 'Advanced Effects',
          icon: faSkull,
          count: 2,
          commands: [
            {
              command: '!redeem boss',
              cost: '500 tokens',
              description: "Spawn a random boss - extremely dangerous!",
              effect: "Boss Spawn",
              effectIcon: faSkull
            },
            {
              command: '!redeem invasion',
              cost: '400 tokens',
              description: "Trigger a random invasion event",
              effect: "Invasion Event",
              effectIcon: faShieldAlt
            }
          ]
        }
      ]
    },
    admin: {
      title: "Admin Commands",
      description: "Powerful administrative tools for streamers and moderators to manage the interactive experience.",
      sections: [
        {
          id: 'twitch-chat-admin',
          title: 'Twitch Chat Admin Commands',
          icon: faComments,
          count: 4,
          commands: [
            {
              command: '!admin give <user/all> <amount>',
              badge: 'Admin',
              description: "Give tokens to specific viewers or all viewers at once",
              example: "!admin give @viewer123 100"
            },
            {
              command: '!admin spawn <entity> [count]',
              badge: 'Admin',
              description: "Spawn any creature in the game (bypasses progression locks)",
              example: "!admin spawn vampire 3"
            },
            {
              command: '!admin weather <type>',
              badge: 'Admin',
              description: "Control weather conditions directly",
              example: "!admin weather rain"
            },
            {
              command: '!admin time <day/night>',
              badge: 'Admin',
              description: "Control the day/night cycle",
              example: "!admin time night"
            }
          ]
        },
        {
          id: 'in-game-admin',
          title: 'In-Game Admin Commands (Streamer Only)',
          icon: faGamepad,
          count: 12,
          commands: [
            {
              command: '/twitch help',
              badge: 'Streamer',
              description: "Show all available in-game commands"
            },
            {
              command: '/twitch auth',
              badge: 'Streamer',
              description: "Connect your Twitch account with OAuth"
            },
            {
              command: '/twitch connect',
              badge: 'Streamer',
              description: "Connect to Twitch chat and start receiving commands"
            },
            {
              command: '/twitch disconnect',
              badge: 'Streamer',
              description: "Disconnect from Twitch chat"
            },
            {
              command: '/twitch status',
              badge: 'Streamer',
              description: "Show current connection status and stats"
            },
            {
              command: '/twitch tokens [username]',
              badge: 'Streamer',
              description: "Show token leaderboard or check specific viewer"
            },
            {
              command: '/twitch give <user> <amount>',
              badge: 'Streamer',
              description: "Give tokens to a specific viewer"
            },
            {
              command: '/twitch take <user> <amount>',
              badge: 'Streamer',
              description: "Remove tokens from a viewer"
            },
            {
              command: '/twitch set <user> <amount>',
              badge: 'Streamer',
              description: "Set a viewer's token balance to specific amount"
            },
            {
              command: '/twitch autotokens',
              badge: 'Streamer',
              description: "Show automatic token reward status"
            },
            {
              command: '/twitch reward',
              badge: 'Streamer',
              description: "Manually trigger token rewards for all viewers"
            },
            {
              command: '/twitch blacklist <add/remove/list>',
              badge: 'Streamer',
              description: "Manage viewer blacklist for command restrictions"
            }
          ]
        }
      ]
    },
    spawn: {
      title: "Spawn System",
      description: "Interactive mob spawning system with progression-based unlocks and balanced token costs. Viewers can spawn creatures that match the current game progression level.",
      sections: [
        {
          id: 'spawn-overview',
          title: 'Spawn System Overview',
          icon: faLayerGroup,
          count: 1,
          isOverview: true,
          content: {
            mobTiers: [
              {
                name: 'Harmless Tier',
                description: 'Peaceful critters and non-hostile mobs.',
                examples: 'Examples: Bunny, goldfish, bird, squirrel, penguin, frog, duck, firefly, butterfly, snail, corrupt goldfish'
              },
              {
                name: 'Common Tier',
                description: 'Basic slimes and weak enemies.',
                examples: 'Examples: Slimes (blue, green, purple, yellow, red, jungle, ice), zombie, demon eye, cave bat, eater of souls, crab, piranha, corrupt bunny'
              },
              {
                name: 'Rare Tier',
                description: 'Stronger pre-hardmode enemies, uncommon hardmode enemies, and more.',
                examples: 'Examples: Skeletons, hornets, jungle/dungeon/goblin enemies, unicorn, pixie, hardmode enemies, etc.'
              },
              {
                name: 'Deadly Tier',
                description: 'The most dangerous non-boss enemies, mini-bosses, and rare hardmode threats.',
                examples: 'Examples: Wraith, gastropod, possessed armor, corruptor, clinger, werewolf, mimic, spiked ice slime, deadly jungle/ocean/cavern enemies, etc.'
              }
            ],
            tokenCosts: [
              { tier: 'HarmlessMobSpawnPrice', category: 'Peaceful critters, non-hostile mobs', cost: '10' },
              { tier: 'CommonMobSpawnPrice', category: 'Basic slimes, weak enemies', cost: '20' },
              { tier: 'RareMobSpawnPrice', category: 'Stronger pre-hardmode, uncommon hardmode', cost: '100' },
              { tier: 'DeadlyMobSpawnPrice', category: 'Deadliest non-bosses, mini-bosses, rare mobs', cost: '250' }
            ],
            notes: [
              'Tiered Spawning: Use !spawn <tier> to spawn a random mob from a tier filtered by your progression. Tiers: harmless, common, rare, deadly.',
              'Progression-Based: Mobs unlock as you defeat bosses and progress through the game. Progression stages: Early Game, Post-Eye, Post-Brain/Eater, Post-Skeletron, Hardmode, Post-Mechanical, Post-Plantera.',
              'Smart Positioning: The system tries to find a valid spawn location near a player, using smart logic to avoid blocks and ensure mobs appear in accessible areas.',
              'Progression Gating: Only mobs appropriate for your world state can be spawned (unless you are a Game Master).',
              'Full Configurability: Every redeem and function is fully configurable: prices can be changed, and any feature can be enabled or disabled in the mod settings.',
              'Leaderboard System: Viewers can compete against each other for the top spot on the leaderboard.',
              'Token Distribution System: Tokens are automatically distributed to viewers who watch your stream.',
              'Complete List: Over 100+ different spawnable creatures available.'
            ]
          }
        }
      ]
    }
  }

  // Filter commands based on search and category
  const getFilteredSections = () => {
    let sections = []
    
    if (activeCategory === 'all') {
      sections = Object.values(commandData).flatMap(category => 
        category.sections.map(section => ({
          ...section,
          categoryTitle: category.title,
          categoryDescription: category.description
        }))
      )
    } else {
      sections = commandData[activeCategory]?.sections || []
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase()
      sections = sections.map(section => {
        if (section.isOverview) {
          // For overview sections, search in notes and tier descriptions
          const matchesOverview = 
            section.title.toLowerCase().includes(searchLower) ||
            section.content?.notes?.some(note => note.toLowerCase().includes(searchLower)) ||
            section.content?.mobTiers?.some(tier => 
              tier.name.toLowerCase().includes(searchLower) ||
              tier.description.toLowerCase().includes(searchLower) ||
              tier.examples.toLowerCase().includes(searchLower)
            )
          
          return matchesOverview ? section : null
        } else {
          // For command sections, filter commands
          const filteredCommands = section.commands.filter(cmd =>
            cmd.command.toLowerCase().includes(searchLower) ||
            cmd.description.toLowerCase().includes(searchLower) ||
            cmd.effect?.toLowerCase().includes(searchLower) ||
            cmd.example?.toLowerCase().includes(searchLower)
          )
          
          return filteredCommands.length > 0 ? {
            ...section,
            commands: filteredCommands,
            count: filteredCommands.length
          } : null
        }
      }).filter(Boolean)
    }

    return sections
  }

  const filteredSections = getFilteredSections()

  return (
    <section id="commands" className="commands">
      <div className="container">
        <div className="section-header">
          <h2>Command Reference</h2>
          <p>Complete guide to all available commands and their usage</p>
        </div>
        
        {/* Interactive Command Explorer */}
        <div className="command-explorer">
          <div className="explorer-header">
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} />
              <input 
                type="text" 
                id="command-search" 
                placeholder="Search commands, effects, or mobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
              />
            </div>
            <div className="filter-chips">
              {categories.map((category) => (
                <button 
                  key={category.id}
                  className={`chip ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <FontAwesomeIcon icon={category.icon} />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="explorer-stats">
            <div className="stat-chip">
              <FontAwesomeIcon icon={faTerminal} />
              <span className="stat-number">45+</span>
              <span className="stat-label">Commands</span>
            </div>
            <div className="stat-chip">
              <FontAwesomeIcon icon={faCoins} />
              <span className="stat-number">25+</span>
              <span className="stat-label">Redemptions</span>
            </div>
            <div className="stat-chip">
              <FontAwesomeIcon icon={faDragon} />
              <span className="stat-number">100+</span>
              <span className="stat-label">Spawnable Mobs</span>
            </div>
          </div>
        </div>

        {/* Keyboard Navigation Indicator */}
        {isKeyboardMode && (
          <div className="keyboard-mode-indicator">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <FontAwesomeIcon icon={faSearch} />
              <strong>Keyboard Navigation Active</strong>
            </div>
            <div style={{ fontSize: '0.75rem', opacity: '0.9' }}>
              ↑↓ Navigate • Enter Select • Esc Exit
            </div>
          </div>
        )}

        {/* Command Sections */}
        <div className="command-sections">
          {/* Search Results Indicator */}
          {searchTerm.trim() && (
            <div className="search-results-indicator">
              <p>
                {filteredSections.length === 0 
                  ? `No results found for "${searchTerm}"` 
                  : `Found ${filteredSections.length} section${filteredSections.length !== 1 ? 's' : ''} matching "${searchTerm}"`
                }
              </p>
            </div>
          )}

          {activeCategory !== 'all' && commandData[activeCategory] && !searchTerm.trim() && (
            <div className="command-section" data-category={activeCategory}>
              <h3>
                <FontAwesomeIcon icon={categories.find(c => c.id === activeCategory)?.icon} />
                {commandData[activeCategory].title}
              </h3>
              <p className="section-description">{commandData[activeCategory].description}</p>
            </div>
          )}

          <div className="admin-dropdown-container">
            {filteredSections.map((section) => (
              <div key={section.id} className="admin-dropdown">
                <div 
                  className="dropdown-header" 
                  onClick={() => toggleDropdown(section.id)}
                >
                  <div className="dropdown-title">
                    <FontAwesomeIcon icon={section.icon} />
                    <h4>{section.title}</h4>
                    <span className="command-count">{section.count} {section.isOverview ? 'overview' : 'commands'}</span>
                  </div>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`dropdown-arrow ${openDropdowns[section.id] ? 'active' : ''}`}
                  />
                </div>
                <div className={`dropdown-content ${openDropdowns[section.id] ? 'active' : ''}`}>
                  {section.isOverview ? (
                    <SpawnOverviewContent 
                      content={section.content} 
                      searchTerm={searchTerm}
                      highlightSearchTerm={highlightSearchTerm}
                    />
                  ) : (
                                          <div className="command-grid">
                        {section.commands.map((cmd, index) => (
                          <CommandCard 
                            key={index} 
                            command={cmd} 
                            ref={(el) => (commandRefs.current[index] = el)}
                            searchTerm={searchTerm}
                            highlightSearchTerm={highlightSearchTerm}
                          />
                        ))}
                      </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Command Card Component
const CommandCard = forwardRef(({ command, searchTerm, highlightSearchTerm }, ref) => {
  const isRedemption = command.cost
  const isAdmin = command.badge === 'Admin' || command.badge === 'Streamer'
  
  return (
    <div className={`command-card ${isRedemption ? 'redemption' : ''} ${isAdmin ? 'admin' : ''}`} ref={ref}>
      <div className="card-header">
        <code>{command.command}</code>
        {command.cost ? (
          <span className="token-cost">{command.cost}</span>
        ) : (
          <span className={`card-badge ${command.badge?.toLowerCase() || 'viewer'}`}>
            {command.badge || 'Viewer'}
          </span>
        )}
      </div>
      <div className="card-description">
        {highlightSearchTerm(command.description, searchTerm)}
      </div>
      {command.example && (
        <div className="card-example">
          <FontAwesomeIcon icon={faQuoteLeft} />
          {highlightSearchTerm(command.example, searchTerm)}
        </div>
      )}
      {command.effect && (
        <div className="card-effect">
          <FontAwesomeIcon icon={command.effectIcon} />
          {highlightSearchTerm(command.effect, searchTerm)}
        </div>
      )}
    </div>
  )
})

// Spawn Overview Component
const SpawnOverviewContent = ({ content, searchTerm, highlightSearchTerm }) => {
  const [openTiers, setOpenTiers] = useState({})

  const toggleTier = (tierName) => {
    setOpenTiers(prev => ({
      ...prev,
      [tierName]: !prev[tierName]
    }))
  }

  return (
    <div className="spawn-overview">
      <div className="spawn-info-cards">
        <div className="spawn-info-card">
          <FontAwesomeIcon icon={faLayerGroup} />
          <h4>Mob Tiers</h4>
          <div className="admin-dropdown-container">
            {content.mobTiers.map((tier, index) => (
              <div key={index} className="admin-dropdown">
                <div 
                  className="dropdown-header" 
                  onClick={() => toggleTier(tier.name)}
                >
                  <div className="dropdown-title">
                    <strong>{tier.name}</strong>
                  </div>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`dropdown-arrow ${openTiers[tier.name] ? 'active' : ''}`}
                  />
                </div>
                <div className={`dropdown-content ${openTiers[tier.name] ? 'active' : ''}`}>
                  <p>{tier.description}</p>
                  <p className="spawn-tier-examples">{tier.examples}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="spawn-tier-note">
            <em>Bosses are not included in these tiers and are spawned via a separate command.</em>
          </p>
        </div>
        
        <div className="spawn-info-card">
          <FontAwesomeIcon icon={faCoins} />
          <h4>Token Cost Table</h4>
          <div className="table-responsive">
            <table className="commands-table">
              <thead>
                <tr>
                  <th>Config Tier</th>
                  <th>Mob Category</th>
                  <th>Default Cost</th>
                </tr>
              </thead>
              <tbody>
                {content.tokenCosts.map((cost, index) => (
                  <tr key={index}>
                    <td>{cost.tier}</td>
                    <td>{cost.category}</td>
                    <td>{cost.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="spawn-tier-note">
            <em>See your mod config for the exact values.</em>
          </p>
        </div>
      </div>

      <div className="spawn-notes">
        <h4><FontAwesomeIcon icon={faInfoCircle} /> Important Notes</h4>
        <ul>
          {content.notes.map((note, index) => (
            <li key={index}>{highlightSearchTerm(note, searchTerm)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommandsSection 