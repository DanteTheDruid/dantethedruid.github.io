# TwitchIntegrationPlus Website Project Prompt

Create a modern, interactive website to showcase the TwitchIntegrationPlus Terraria mod and all of its commands and features.

## Project Overview

**TwitchIntegrationPlus** is a Terraria tModLoader mod that integrates with Twitch services to provide interactive streaming features. It allows viewers to interact with the game through chat commands, earn tokens, and redeem rewards that affect the gameplay in real-time.

## Website Requirements

### 1. Design & Layout
- **Modern, Gaming-Themed Design**: Dark theme with Terraria-inspired colors (blues, greens, purples)
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Interactive Elements**: Hover effects, smooth animations, and engaging UI components
- **Navigation**: Clear sections for Commands, Token System, Setup Guide, and Features
- **Hero Section**: Eye-catching landing area with mod logo and key features

### 2. Core Sections to Include

#### **Landing/Hero Section**
- Mod title: "TwitchIntegrationPlus"
- Tagline: "Interactive Terraria Streaming Experience"
- Key benefits: Real-time viewer interaction, token rewards, secure setup
- Download/GitHub links
- Feature highlights with icons

#### **Features Overview**
- **Simple Setup**: No need to create Twitch applications - built-in OAuth
- **Secure Token Storage**: Encrypted tokens, streaming-safe
- **Real-time Chat Integration**: Live Twitch chat monitoring
- **Token Reward System**: Virtual currency for viewers
- **Interactive Commands**: 15+ viewer commands
- **Admin Controls**: Streamer management tools
- **Event Handling**: Subscriptions, raids, hosts support

#### **Commands Reference (Main Feature)**
Create comprehensive, searchable command tables:

##### **Viewer Chat Commands**
| Command | Description | Example Response |
|---------|-------------|------------------|
| `!health` | Shows player's current health | `@viewer Player health: 450/500 (90%)` |
| `!time` | Shows in-game time | `@viewer Current time: Day (75% complete)` |
| `!players` | Lists active players | `@viewer 2 players online: Dante, Friend123` |
| `!boss` | Shows active bosses | `@viewer Active bosses: Eye of Cthulhu` |
| `!weather` | Shows weather conditions | `@viewer Current weather: Raining, Snow biome` |
| `!tokens [username]` | Check token balance | `@viewer You have 150 tokens` |
| `!leaderboard` | Top token holders | Shows top 5 viewers with most tokens |
| `!watchtime` | Personal watch time | `@viewer You've watched for 2.5 hours` |
| `!shop` / `!rewards` | View available redemptions | Shows all redemption options with costs |
| `!redeem <option>` / `!r <option>` | Redeem tokens for effects | `@viewer Redeemed 'heal' for 50 tokens!` |
| `!help` / `!commands` | Shows all commands | Lists all available commands |

##### **Token Redemption System**
**Player Effects:**
| Command | Description | Cost |
|---------|-------------|------|
| `heal` | Heal the player by 100 HP | 50 tokens |
| `buff` | Get a random buff for 5 minutes | 30 tokens |
| `item` | Spawn a random item | 75 tokens |
| `respawn` | Respawn if the player is dead | 40 tokens |
| `biome` | Get biome-specific buffs based on current location | 120 tokens |

**Fun Effects:**
| Command | Description | Cost |
|---------|-------------|------|
| `rain` | Toggle rain on/off | 25 tokens |
| `daynight` | Toggle between day and night | 35 tokens |
| `slime` | Spawn a slime party | 20 tokens |
| `windy` | Make it very windy | 40 tokens |
| `bunnies` | Spawn a horde of bunnies | 30 tokens |

**Event Effects:**
| Command | Description | Cost |
|---------|-------------|------|
| `slimerain` | Trigger the Slime Rain event | 150 tokens |
| `bloodmoon` | Trigger a Blood Moon | 200 tokens |
| `eclipse` | Trigger a Solar Eclipse | 300 tokens |
| `sandstorm` | Trigger a sandstorm | 100 tokens |
| `chaos` | Spawn random creatures everywhere | 180 tokens |

**Advanced Effects:**
| Command | Description | Cost |
|---------|-------------|------|
| `boss` | Spawn a random boss | 500 tokens |
| `invasion` | Trigger a random invasion | 400 tokens |

**Game Master System:**
- Special users (like `dantethedruid`) can redeem anything for **FREE**
- Game masters see `[GAME MASTER]` prefix in redemption messages
- No token cost for any redemption

##### **Admin Commands (Streamer/Mods)**
**Twitch Chat Admin Commands:**
| Command | Description |
|---------|-------------|
| `!admin give <user/all> <amount>` | Give tokens to specific viewer or all viewers |
| `!admin spawn <entity> [count]` | Spawn creatures in the game |
| `!admin weather <type>` | Control weather conditions |
| `!admin time <day/night>` | Control day/night cycle |

**In-Game Admin Commands (Streamer Only):**
| Command | Description |
|---------|-------------|
| `/twitch help` | Show all available commands |
| `/twitch auth` | Connect your Twitch account |
| `/twitch connect` | Connect to Twitch chat |
| `/twitch disconnect` | Disconnect from Twitch |
| `/twitch status` | Show current connection status |
| `/twitch tokens [username]` | Show token leaderboard or check specific viewer |
| `/twitch give <username> <amount>` | Give tokens to a viewer |
| `/twitch take <username> <amount>` | Remove tokens from a viewer |
| `/twitch set <username> <amount>` | Set a viewer's token balance |
| `/twitch autotokens` | Show automatic token reward status |
| `/twitch reward` | Manually trigger token rewards for all viewers |
| `/twitch blacklist <add/remove/list> <username>` | Manage viewer blacklist |

#### **Setup Guide**
**Quick Setup (3 Steps):**
1. **Install & Configure**: Enable mod, set channel name in Mod Configuration
2. **Authorize**: Use `/twitch auth` command in-game to connect account
3. **Connect**: Use `/twitch connect` to join chat

**Required Permissions:**
- `chat:read` - Read chat messages
- `chat:edit` - Send chat messages  
- `channel:read:subscriptions` - Monitor subscriptions
- `bits:read` - Monitor bit donations
- `channel:read:redemptions` - Monitor channel point redemptions
- `moderator:read:followers` - Monitor new followers

#### **Security Features**
- **Encrypted Token Storage**: OAuth tokens are encrypted and stored separately
- **UI Hidden**: OAuth tokens never appear in configuration interface
- **Streaming Safe**: No risk of accidentally showing tokens during streams
- **Secure by Default**: Built-in Client ID safe for public distribution
- **Token Validation**: Automatic validation and refresh handling

#### **Technical Information**
- **Platform**: Terraria tModLoader
- **Language**: C#
- **Dependencies**: TwitchLib.Client (3.5.3)
- **File Size**: Lightweight mod
- **Compatibility**: Works with multiplayer and single-player

### 3. Interactive Features
- **Command Search**: Filter commands by category or search by keyword
- **Token Calculator**: Show redemption costs and help viewers plan
- **Setup Wizard**: Interactive guide for mod installation
- **FAQ Section**: Common troubleshooting and questions
- **Live Status**: If possible, show if mod is currently connected (optional)

### 4. Technical Implementation
- **Framework**: Use React/Next.js, Vue.js, or vanilla HTML/CSS/JS
- **Styling**: Modern CSS with animations, maybe Tailwind CSS
- **Search Functionality**: Client-side filtering for commands
- **Mobile Optimization**: Responsive design for all screen sizes
- **Performance**: Fast loading, optimized images
- **SEO**: Meta tags, proper headings structure

### 5. Content Tone
- **Gaming-focused**: Enthusiastic, technical but accessible
- **Community-oriented**: Emphasize viewer interaction and engagement
- **Professional**: Clear documentation style for setup instructions
- **Helpful**: Comprehensive troubleshooting and support information

### 6. Visual Elements
- **Terraria Color Scheme**: Blues (#1e3a8a), greens (#059669), purples (#7c3aed)
- **Icons**: Gaming icons, Twitch brand colors where appropriate
- **Screenshots**: Mock-ups of the mod in action (if possible)
- **Code Blocks**: Syntax highlighted command examples
- **Tables**: Clean, sortable command reference tables

### 7. Call-to-Action Elements
- **Download Buttons**: Links to mod download page
- **GitHub Repository**: Source code and issue reporting
- **Discord/Community**: Links to support communities
- **Documentation**: Link to full setup guides

## Target Audience
- **Terraria Streamers**: Looking for viewer interaction tools
- **Twitch Viewers**: Want to understand available commands
- **Mod Developers**: Interested in the technical implementation
- **Gaming Communities**: Seeking interactive streaming solutions

## Success Metrics
- Clear, comprehensive command reference
- Easy-to-follow setup instructions
- Professional, gaming-appropriate design
- Mobile-friendly user experience
- Fast loading and smooth navigation

This website should serve as the definitive resource for anyone wanting to use or understand the TwitchIntegrationPlus mod, making it easy to discover commands, understand pricing, and get started with interactive Terraria streaming.
