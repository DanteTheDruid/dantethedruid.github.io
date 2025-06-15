# TwitchIntegrationPlus

A Terraria tModLoader mod that integrates with Twitch services to provide interactive streaming features.

## Features

- **Simple Setup**: No need to create your own Twitch application - just authorize and go!
- **Secure Token Storage**: OAuth tokens are encrypted and never visible in the UI
- **Chat Integration**: Real-time Twitch chat monitoring and interaction
- **Event Handling**: Support for subscriptions, raids, hosts, and more
- **Configurable**: Easy setup through in-game configuration menu
- **Streaming Safe**: Tokens are hidden from UI to prevent accidental exposure during streams
- **Token System**: Reward viewers with tokens for watch time that they can redeem for in-game effects

## Quick Setup (Most Users)

### 1. Install and Configure the Mod
1. Start Terraria with tModLoader
2. Enable the TwitchIntegrationPlus mod
3. Go to **Mod Configuration** → **TwitchIntegrationPlus**
4. Enter your **Twitch Channel Name** (your Twitch username)
5. Leave **Custom Client ID** empty (uses built-in default)

### 2. Authorize the Application
1. In-game, open the chat and type: `/twitch auth`
2. Your browser will open to the Twitch authorization page
3. Click "Authorize" to grant permissions to the TwitchIntegrationPlus application
4. The browser will show a success page when complete
5. Return to Terraria - the mod will automatically save your token securely

### 3. Connect to Twitch
1. Type: `/twitch connect` to establish the connection
2. You should see a success message when connected
3. The mod will join your Twitch channel and can now interact with chat

That's it! No need to create your own Twitch application or manage Client IDs.

## Advanced Setup (Developers/Advanced Users)

If you want to use your own Twitch application instead of the built-in one:

### Option A: Environment Variable (Recommended for Developers)
1. Create a Twitch application at the [Twitch Developer Console](https://dev.twitch.tv/console/apps)
2. Set OAuth Redirect URL to: `http://localhost:8080/auth/callback`
3. Set the `TWITCH_CLIENT_ID` environment variable to your Client ID
4. See [ENVIRONMENT_SETUP.md](ENVIRONMENT_SETUP.md) for detailed instructions

### Option B: Mod Configuration
1. Create a Twitch application (same as Option A)
2. Enter your **Client ID** in the **Custom Client ID** field in mod configuration
3. This overrides the built-in default Client ID

1. In-game, open the chat and type: `/twitch auth`
2. Your browser will open to the Twitch authorization page
3. Click "Authorize" to grant permissions to your application
4. The browser will show a success page when complete
5. Return to Terraria - the mod will automatically save your token

### 4. Connect to Twitch

1. Type: `/twitch connect` to establish the connection
2. You should see a success message when connected
3. The mod will join your Twitch channel and can now interact with chat

## Commands

- `/twitch help` - Show available commands
- `/twitch auth` - Connect your Twitch account
- `/twitch connect` - Connect to Twitch chat
- `/twitch disconnect` - Disconnect from Twitch
- `/twitch status` - Show current connection status

## Required Permissions

The mod requests the following Twitch permissions:
- `chat:read` - Read chat messages
- `chat:edit` - Send chat messages
- `channel:read:subscriptions` - Monitor subscriptions
- `bits:read` - Monitor bit donations
- `channel:read:redemptions` - Monitor channel point redemptions
- `moderator:read:followers` - Monitor new followers

## Security Features

- **Encrypted Token Storage**: OAuth tokens are encrypted and stored separately from config files
- **UI Hidden**: OAuth tokens never appear in the configuration interface
- **Streaming Safe**: No risk of accidentally showing tokens during live streams
- **Secure by Default**: Built-in Client ID is safe for public distribution
- **Token Validation**: Automatic validation and refresh handling

## Troubleshooting

### "Failed to connect to Twitch"
- Check that your **Channel Name** matches your Twitch username exactly
- Try using `/twitch auth` to reconnect your account
- Check your internet connection

### "Authorization failed"
- Try clearing your browser cache and cookies for Twitch
- Use `/twitch auth` to start fresh authorization
- Make sure you click "Authorize" in your browser when prompted

### Connection keeps dropping
- This is normal and the mod will automatically reconnect
- You can manually reconnect using `/twitch connect`

## For Streamers

This mod is designed to be streaming-safe:
- **Account credentials are never visible** in the configuration UI
- You can safely show your mod configuration on stream
- No risk of accidentally exposing sensitive information
- All sensitive data is encrypted and hidden

## Development

This mod is built using:
- **tModLoader**: Latest stable version
- **TwitchLib**: Version 3.5.3
- **.NET**: Framework version compatible with tModLoader

### Project Structure
```
TwitchIntegrationPlus/
├── Common/
│   ├── Config/           # Configuration classes
│   └── Systems/          # Core mod systems
├── Utilities/            # Helper classes and utilities
└── Localization/         # Text localization files
```

## License

This project is open source. See the license file for details.

## Support

For issues, questions, or feature requests, please create an issue on the project repository.

## Token System

The mod includes a token-based reward system for your viewers:

- **Automatic Rewards**: Viewers earn tokens for watching your stream
- **Viewer Commands**: Viewers can check their token balance and redeem rewards in chat
- **Redemption Shop**: Viewers can spend tokens on various in-game effects including the new dynamic biome blessing system
- **Admin Controls**: Manage tokens with simple in-game commands
- **Game Master System**: Designated users (like `dantethedruid`) can redeem anything for free
- **Persistence**: Token balances are saved across sessions and worlds

See [TOKEN_SYSTEM.md](TOKEN_SYSTEM.md) and [BIOME_BLESSING_REDEMPTION.md](BIOME_BLESSING_REDEMPTION.md) for detailed information.

## Twitch Chat Commands: Spawning and Progression

### !spawn <tier>
Spawns a random mob from the specified tier, filtered by world progression. Tiers:
- `harmless`: Peaceful critters and non-hostile mobs
- `common`: Basic slimes and weak enemies
- `rare`: Stronger pre-hardmode and uncommon hardmode enemies
- `deadly`: The most dangerous non-boss enemies, mini-bosses, and rare threats

**Usage:**
```
!spawn harmless   # Spawns a random harmless critter
!spawn common     # Spawns a random common enemy
!spawn rare       # Spawns a random rare enemy
!spawn deadly     # Spawns a random deadly enemy
```
- The system will choose a mob appropriate for your current progression (e.g., more mobs unlock after defeating bosses or entering Hardmode).
- If no mobs are available for a tier, the bot will notify you.
- Each tier has a configurable token cost (see mod config).
- Bosses are not included in these tiers and must be spawned via a separate command.

### !spawnlist
Shows all possible mobs you can currently spawn, organized by tier and filtered by your progression. Use this to see what is available at your current stage.

### !progression
Reports the current world progression tier. Example output:
```
@username Current progression: Hardmode
```
Progression stages include: Early Game, Post-Eye, Post-Brain/Eater, Post-Skeletron, Hardmode, Post-Mechanical, Post-Plantera.

### How Spawning Works
- The system tries up to 40 times to find a valid spawn location near a player, using smart logic to avoid blocks and ensure mobs appear in accessible areas.
- If no perfect spot is found, it will use the best fallback, and as a last resort, spawn above the player with a warning.
- Progression gating ensures only mobs appropriate for your world state can be spawned (unless you are a Game Master).
- Token costs and mob lists are configurable in the mod settings.

See also: [SPAWN_LIST.md](SPAWN_LIST.md) for detailed mob lists by tier and progression.
