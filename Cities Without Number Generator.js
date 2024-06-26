//Gig Generator constant
const gigUuid = "Compendium.world-of-gigs.world-of-gigs-scripts.Macro.LhJwBX3JPmqkIt42";

const gigGen = await fromUuid(gigUuid);

//Fixer Generator Constant
const fixUuid = "Compendium.world-of-gigs.world-of-gigs-scripts.Macro.NGmGtBiKFDhIrYJ7";

const fixGen = await fromUuid(fixUuid);

//Megacorp Gen Constant
const corpUuid = "Compendium.world-of-gigs.world-of-gigs-scripts.Macro.n3hTUaEN9qGRW0Vb";

const corpGen = await fromUuid(corpUuid);



new Dialog({
    title: "Worlds Without Number Generators",
    content: "<p>The City contains multitudes...</p>",
    buttons: {
      Gig: {
        label: `Gig Generator<br><img src="modules/world-of-gigs/Art/take-my-money.svg" alt="Gig Icon" style="width: 50px; height: 50px;">`,
        callback: () => {gigGen.execute()}
      },
      Corp: {
        label: `Corp Generator<br><img src="modules/world-of-gigs/Art/briefcase.svg" alt="Corp Icon" style="width: 50px; height: 50px;">`,
        callback: () => {corpGen.execute()}
      },
      Fixer: {
        label: `Fixer Generator<br><img src="modules/world-of-gigs/Art/shaking-hands.svg" alt="Fixer Icon" style="width: 50px; height: 50px;">`,
        callback: () => {fixGen.execute()}
      }
    },
  }).render(true)