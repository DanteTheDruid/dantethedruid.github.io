import Stepper from './Stepper'

const SetupGuideSection = () => {
  const steps = [
    {
      number: 1,
      title: "Install & Configure",
      description: "Enable the mod in tModLoader and set your channel name in Mod Configuration",
      details: [
        "Download and install the mod from the mod browser (Steam Workshop coming soon)",
        "Launch Terraria with tModLoader",
        "Go to Mods → Mod Configuration → TwitchIntegrationPlus",
        "Set your Twitch channel name",
        "Configure any additional settings you want"
      ]
    },
    {
      number: 2,
      title: "Connect Twitch Account",
      description: "Use the /twitch auth command in-game to connect your Twitch account",
      details: [
        "Open the in-game chat",
        "Type /twitch auth",
        "Twitch authorization will open in your browser",
        "Once authorized, you can close the browser window",
        "The mod will attempt to automatically connect to twitch. If it fails, connect manually with /twitch connect"
      ]
    },
    {
      number: 3,
      title: "Go Live!",
      description: "That's it! You're ready to start streaming!",
      details: [
        "Viewers can use the !help or !shop commands to see what you have available",
        "You can use the !admin command to manage the mod",
        "Viewers can redeem items from the shop with !r / !redeem (redemption)"
      ]
    }
  ]

  return (
    <section id="setup" className="setup">
      <div className="container">
        <Stepper 
          steps={steps}
          title="Setup Guide"
          subtitle="Get TwitchIntegrationPlus running in just 3 simple steps"
        />
      </div>
    </section>
  )
}

export default SetupGuideSection 