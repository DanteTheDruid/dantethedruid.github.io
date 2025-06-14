# Confuse and Gravity Flip Redeems

This document covers the implementation and usage of the new **Confuse** and **Gravity Flip** redemption features in TwitchIntegrationPlus.

## Overview

These two new player-targeted redemptions allow Twitch viewers to interact with the streamer's gameplay by applying temporary debuffs/effects that create entertaining and challenging situations.

## Confuse Redemption

### Description
The Confuse redemption applies the **Confusion** debuff to the player, reversing their movement controls for a duration of **30 seconds**.

### Implementation Details

- **Command**: `!confusion` or `!confuse`
- **Duration**: 30 seconds (1800 ticks)
- **Effect**: Applies `BuffID.Confused` debuff
- **Default Price**: 35 tokens
- **Buff ID**: 31 (Confused)

### Visual & Audio Effects

The confusion redemption includes enhanced visual and audio feedback:

#### Audio Effects
- **Primary Sound**: `SoundID.Item20` (debuff application sound)
- **Secondary Sound**: `SoundID.Zombie53` (eerie confusion sound)

#### Visual Effects
1. **Purple Swirling Aura**: 25 shadowflame dust particles in purple color swirling around the player
2. **Spiraling Particles**: 15 purple torch dust particles creating a spiral pattern
3. **Head Effect**: 12 vile powder dust particles above the player's head in dark violet
4. **Chaotic Burst**: 18 purple clentaminator particles bursting outward randomly

### Configuration Options

```csharp
// Toggle the redemption on/off
public bool EnableConfusionRedemption { get; set; } = true;

// Set the token cost
[Range(0, 1000)]
public int ConfusionRedemptionPrice { get; set; } = 35;
```

### Chat Notification
When activated, displays: `"{username} confused {player_name}! 😵‍💫"` in purple text.

---

## Gravity Flip Redemption

### Description
The Gravity Flip redemption applies the **Gravitation** buff to the player, flipping their gravity for **60 seconds**. Players can press UP to toggle gravity direction while the buff is active.

### Implementation Details

- **Command**: `!gravity` or `!gravitation`
- **Duration**: 60 seconds (3600 ticks)
- **Effect**: Applies `BuffID.Gravitation` and forces `gravDir = -1f`
- **Default Price**: 50 tokens
- **Buff ID**: 18 (Gravitation)

### Gravity Mechanics

The mod includes a dedicated `GravityFlipPlayer` class that:
- Forces gravity to remain flipped (`gravDir = -1f`) while the buff is active
- Automatically restores normal gravity (`gravDir = 1f`) when the buff expires
- Overrides the default gravitation behavior to ensure consistent upside-down movement

### Visual & Audio Effects

The gravity flip redemption features spectacular visual effects:

#### Audio Effects
- **Primary Sound**: `SoundID.Item4` (magic sound)
- **Secondary Sound**: `SoundID.Item29` (ethereal whoosh)

#### Visual Effects
1. **Floating Sparkles**: 50 magic mirror dust particles in cornflower blue with no gravity
2. **Floating Orbs**: 20 portal bolt trail dust particles in light blue
3. **Gravity-Defying Spirals**: 15 blue fairy dust particles creating upward spiraling effects

### Configuration Options

```csharp
// Toggle the redemption on/off
public bool EnableGravitationRedemption { get; set; } = true;

// Set the token cost
[Range(0, 1000)]
public int GravitationRedemptionPrice { get; set; } = 50;
```

### Chat Notification
When activated, displays: `"🌀 {username} has flipped {player_name}'s gravity for 60 seconds! 🔄"` in cornflower blue text.

---

## Technical Implementation

### Base Class Structure
Both redemptions inherit from `BaseRedemption` and implement the `HandleRedemption` method:

```csharp
public override bool HandleRedemption(TwitchChatMessage message, string[] args)
{
    // Implementation with error handling and post-update actions
}
```

### Error Handling
Both redemptions include comprehensive error handling:
- Try-catch blocks around all operations
- Logging of errors to the mod's logger
- Graceful failure with boolean return values

### Safety Checks
Before applying effects, both redemptions verify:
- Player exists and is not null
- Player is active in the game
- Player is not dead

### Post-Update Actions
Effects are applied using the mod's `AddPostUpdateAction` system to ensure thread safety and proper timing within Terraria's update cycle.

---

## Usage Instructions

### For Streamers
1. Enable the redemptions in the mod configuration
2. Set appropriate token prices based on your channel economy
3. Register the redemptions with your Twitch bot
4. Viewers can use `!confusion` or `!gravity` commands

### For Viewers
- **Confuse**: Type `!confusion` to reverse the streamer's controls for 30 seconds
- **Gravity Flip**: Type `!gravity` to flip the streamer's gravity for 60 seconds

---

## Balancing Considerations

### Confusion Redemption
- **Duration**: 30 seconds provides enough disruption without being overly frustrating
- **Price**: 35 tokens makes it accessible but not spammable
- **Effect**: Only affects movement, doesn't prevent other actions

### Gravity Flip Redemption
- **Duration**: 60 seconds allows for significant gameplay impact
- **Price**: 50 tokens reflects the more dramatic effect
- **Control**: Players retain the ability to toggle gravity with UP key
- **Visual Feedback**: Extensive particle effects make the activation clear

---

## Future Enhancements

Potential improvements for these redemptions:
1. **Stacking Prevention**: Prevent multiple applications from extending duration
2. **Boss Fight Protection**: Disable during boss encounters
3. **Cooldown System**: Add per-viewer cooldowns to prevent spam
4. **Intensity Scaling**: Variable duration based on token amount spent
5. **Combination Effects**: Special interactions when both effects are active simultaneously

---

## Troubleshooting

### Common Issues
1. **Effects Not Applying**: Check that the player is alive and active
2. **Visual Effects Missing**: Ensure particle settings are enabled in Terraria
3. **Gravity Not Flipping**: Verify the `GravityFlipPlayer` class is properly loaded
4. **Chat Notifications Not Showing**: Check in-game chat settings

### Debug Information
Both redemptions log errors to the mod's logger system. Check the tModLoader logs for detailed error information if redemptions fail to activate. 