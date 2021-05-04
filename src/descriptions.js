/*

This file holds all the descriptions for a role

Format:

"role name": "You are the **role**. You can do this thing with the command `+thing [player number]`. After that thing, you can do this thing. Your aura is **Unknown** and your Team is **something**.",

Add a line before the } at the bottom of the file, 
and make sure the line you add has a comma on the end.

*/


module.exports = {
  "villager": "You are the **Villager**, also known as 'forkman'. You have no special abilities. You belong to the **Village**. Your aura is **Good**.",
  "spectator": "You are the **Spectator**, also known as 'lazy spectatorz'. You can watch the game from the sidelines and can talk with dead players and other spectators in the dead chat. Your aura is **Not Available**. You can avoid being called lazy by buying a little something ;)",
  "aura seer": "You are the **Aura Seer**. At night, you can select a player to see their aura (Good, Bad or Unknown). To check a player, use `+check [player number]`. You belong to the **Village**. Your aura is **Good**.",
  "seer": "You are the **Seer**. At night, you can select a player to see their role. To check a player, use `+check [player number]`. You belong to the **Village**. Your aura is **Good**.",
  "serial killer": "You are **Serial Killer**. Also known as `sk`! Each night you can kill one player. You cannot be killed by the werewolves. You win if you are the last player alive. To kill a player, use `+stab [player number]`. Your aura is **Unknown**.",
  "detective": "You are the **Detective**. At night, you can select two players to see if they belong to the same team or not. \nTo check use `+check [player1] [player2]`. You can't check yourself!\n\nYou belong to the **Village**. Your aura is **Good**.",
  "spirit seer": "You are the **Spirit Seer**, also known as \"ss\". Every night, you can choose two players using `+check [player1] [player2]`. At the beginning of the next morning, you will be able to tell whether either of the players have killed anyone last night. You belong to the **Village**. Your aura is **Good**.",
  "lone wolf": "You are the **Lone Wolf**. You are a werewolf who only wins alone. You appear as a regular werewolf to the rest of the werewolves. You only win if you are the last wolf alive! Your aura is **Unknown**. You are a **Solo** team player. This role is a Werewolf Classic Role.",
  "seer apprentice": "You are the Seer Apprentice. You are a regular villager until the seer dies. After that, you'll become the new seer. As a seer, you can check a player's role at night by using `+check [player number]`. You belong to the **Village**. Your aura is **Good**.",
  "sheriff": "You're the **Sheriff**. At night you can select someone to watch. If that player dies during the night, you will uncover two possible suspects who might have killed that player. Use `+snipe [player number]` to watch player! Your aura is **Good**. Your belong to the **Village**.",
  "cannibal": "You are the **Cannibal**. Every night you can choose to eat a player or keep your hunger to eat one extra player the next day! Your hunger will stack until 5 players. You cannot be killed by the Werewolves! You win if you are the last player alive. Use `+eat [player number(s)]` to eat the player(s). Your aura is **Unknown**. You are a **Solo** team player. ",
  "red lady": "You are the **Red Lady**, also know as 'rl' . Each night you can visit another player by doing `+visit [player number]`. If this players is a werewolf or solo killer you will die. If this player is attacked by a werewolf or solo killer at night and dies, you will die too. If this player is a villager you won't die. If you are attacked at night, while visiting a villager, you won't die. You belong to the **Village** and your aura is **Good**.",
  "arsonist": "You are the **Arsonist**. Also known as `arso`! Every night you can either select __two players to douse__ with gasoline, or ignite __all__ doused players which kills them. You cannot be killed by the Werewolves! You win if you are the last player alive! Use `+douse [player1 number] [player2 number]` to douse players. Use `+ignite` to kill all doused players. Your aura is **Unknown**. You are a **Solo** team player.",
  "forkman": "You are the **Villager**, also known as 'forkman'. You have no special abilities. You belong to the **Village**. Your aura is **Good**.",
  "arsonist": "You are the **Arsonist**. Also known as `arso`! Every night you can either select __two players to douse__ with gasoline, or ignite __all__ doused players which kills them. You cannot be killed by the Werewolves! You win if you are the last player alive! Use `+douse [player1 number] [player2 number]` to douse players. Use `+ignite` to kill all doused players. Your aura is **Unknown**. You are a **Solo** team player. ",
  "mayor": "You are **Mayor**. You belong to the **Village**. Your vote counts twice once you revealed yourself. you can reveal using `+reveal`. Your aura is **Good**.",
  "president": "You are the **President**! The Village is counting on you. If you die, the village loses! You belong to the **Village** and your aura is **Good**.",
  "bomber": "You are the **Bomber**. Also known as 'bb'! At night you can place a bomb on **3 consecutive players** which will explode during the following night. You cannot be killed by the Werewolves! You win if you are the last player alive. Use `+bomb [player1] [player2] [player3]` to bomb them. Three of them can be horizontally, vertically and diagonally consecutive. Following arrangement is followed.\n```\n 01 02 03 04\n 05 06 07 08\n 09 10 11 12\n 13 14 15 16```\nYour aura is **Unknown**. You are a **Solo** team player.",
  "pacifist": "You are **Pacifist**. Also known as 'Paci'. you belong to the village.\nyou can reveal a player during a day using `+reveal (number)` __after the voting time of the first day started__. You belong to the **Village** and your aura is **Good**.",
  "loudmouth": "You are **Loudmouth**. When you die you can reveal the role of another player.\nTo use your ability do `+tag [player number]`. Your aura is **Good** and you belong to the **Village**.",
  "corruptor": "You are the **Corruptor**. Also known as `cor` and `corr`! Each night you can select one player to 'glitch'. That player won't be able to use their role abilities, speak or vote the following day and will die at the end of the day. The role of the player will not be revealed when dying. The player cannot be revived by the medium.\nYou cannot be killed by the Werewolves. You win if you are the last player alive. Use `+corrupt [player number]` to corrupt them. Your aura is **Unknown**. You are a **Solo** team player.",
  "grumpy grandma": "You are **Grumpy Grandma**. Also known as \"gg\" You belong to the **Village**.\nYou can mute a player __starting from the second night__ using `+mute [player number]`. Your aura is **Good**.",
  "illusionist": "You are the **Illusionist**. Also known as `illu`! Each night you can disguise a player. This player will appear to be an illusionist to seer roles. You can kill all disguised players during the discussion phase.\nUse `+disguise [player number]` to disguise them and `+snap` to kill all the disguised players. You cannot be killed by the Werewolves. You win if you are the last player alive! Your aura is **Unknown**. You are a **Solo** team player.",
  "doctor": "You are the **Doctor**, also known as \"doc\". Every night, you can protect someone other than *yourself* using `+heal [player number]`. You belong to the **Village**. Your aura is **Good**.",
  "beast hunter": "You are the **Beast Hunter**, also known as \"bh\". During the night, you can lay one trap down on someone using `+trap [player number]`. This trap will be **activated on the next night**. If the player is attacked by the werewolves, the **weakest werewolf will die**. If solo killers or converters target the player, the trap will be triggered but no one will die. If you move the trap, **the trap will deactivate** and will be reactivated the following night. You belong to the **Village**. Your aura is **Unknown**.",
  "tough guy": "You are the **Tough Guy**. Also known as \"tg\". You belong to the **Village**.\nYou can protect someone by using `+protect [player number]`. When you or your target is **attacked**, you will **not die**, instead you and your attacker will both** know each others' roles**. Because of your injuries, you will **die the end of the following day**. Your aura is **Good**.",
  "bandit": "You are the **Bandit**. Find an accomplice by converting a player at night by doing `+convert [player]`. Together you can kill **one player each night** by doing `+stab [player]`. If your accomplice dies you can select a new one. You cannot be killed by the Werewolves. Your aura is **Unknown** and you belong to the **Bandits** team\n\nFor more information on Accomplice, do `+roleinfo accomplice`",
  "witch": "You are the **Witch**. You have **two potions:** one can be used to **kill another player** and the other one can be used to **protect another player.** The protection potion will only be consumed if the player is attacked. **__You cannot kill anyone in the first night__**. To use the poison potion use `+poison [player number]` and to use the protection potion use `+heal [player number]`. You belong to the **Village**. Your aura is **Unknown**.",
  "bodyguard": "You are the **Bodyguard**, also known as \"bg\". Every night, you can protect someone using `+protect [number]`. If attacked, you will take the hit instead of the person you protected. You may take two attacks, and you will die after the second attack. You belong to the **Village**. Your aura is **Good**.",
  "gunner": "You are the **Gunner **. You can shoot a player during the daytime __but not during the discussion phase on day 1__. You have two bullets. To shoot a player use `+shoot [player]`. You belong to the **Village**. Your aura is **Unknown**.",
  "avenger": "You are the **Avenger**! You can select one player__ after the first day started__ to die along with you!** If you ignore this and target someone in the first night, you will get a softwarn!** To tag a player, do `+tag [player number]`! You belong to the **Village **team. Your aura is **Good**.",
  "jailer": "You are the **Jailer**. During the daytime, you can select a player to jail. At night, you can talk privately to that player using `+j [sentence]` and one time per match, you can decide to shoot and kill a selected player. To jail a player use `+jail [player number]`. To shoot the jailed player use `+shoot`. You belong to the **Village**. Your aura is **Unknown**. ",
  "forger": "You are **Forger**. You can forge **two shields** and after that** one sword** using the command `+forge`. Forging takes one day and each new tool should be given to another player before you can forge another tool. You can give the tool using `+give [player number]`. Each shield will protect a player one time when this player is attacked at night. The sword can be used to kill another player.\n\nYour aura is **Unknown **and you belong to the **Village**.",
  "marksman": "You are the **Marksman**. At night, you can mark a player as your target. In the next night, you can either choose to shoot the marked player, to keep or to change your target. If you shoot a Villager, the shot will backfire and you will die. To mark a player as your target use `+mark [player number]` and to shoot a player, use `+shoot`. You belong to the **Village**. Your aura is **Unknown**.",
  "priest": "You are the **Priest **. You can throw holy water at a player and if the player is a werewolf, that player will die. However, if the player isn't a werewolf, you will die. To throw holy water at a player use `+water [player number]` **__after the discussion time of the first day ended. Don't do it before. If u decide to do it before, you will get a softwarn__**. You belong to the **Village**. Your aura is **Good**.",
  "accomplice": "You are the **Accomplice**. The bandit can convert another player to be their accomplice at night. As an accomplice, you and the bandit can **select a player to kill at night** by doing `+stab [player]`. If the vote is a **draw**, **your vote wins**. Your aura is **Unknown** and you belong to the **Bandits** team. \n\nFor more information on Bandit, do `+roleinfo Bandit`",
  "medium": "You are the **Medium **. You can talk privately to the dead at night and one time per game, you can revive a player. To talk to the dead, use `+d [message]`. To revive a dead player, use `+rev [player number]`. You belong to the **Village**. Your aura is **Unknown**.",
  "fortune teller": "You are the **Fortune Teller**, also known as \"ft\". You may give out cards to two people in total during the night by using `+give [player number]`. __You can't give a card to yourself.__ You belong to the **Village**. Your aura is **Unknown**.",
  "flower child": "You are the **Flower Child**, also known as \"fc\". Once during the game, you may protect someone from being lynched by the village using `+protest [player number]` during the day. You belong to the **Village**. Your aura is **Good**.",
  "cupid": "You are the **Cupid **. During the first night, you can select two players to become a couple. You win if the village wins or if the couple are the last ones alive. To use your ability, type `+couple [player number 1] [player number 2]`. You belong to the **Village**. Your aura is **Good**.",
  "cursed": "You are **Cursed **, you belong to the village until the werewolves bite you. When they do so,you'll become a normal werewolf. \nYour aura is **Good **until the werewolves bite you.\nAfter that your aura will be **Evil**.",
  "zombie": "You are the **Zombie**. Also known as `zb` or `zomb`! Every night you can bite a player which will turn that player into a zombie** at the end of the next night**. Bitten players will remain in their team for one day before converting. All zombies can select different targets. Only players from the **village team, headhunter and fool** can be converted. \n** ** \nUse `+bite [player number]` to make the player zombie. You win if **all players have been converted**. You win if all alive players belong to your team. Your aura is **Unknown**. You are a **Solo** team player. You can chat with other zombies in #zombies.",
  "santa claus": "During the night, you can send a HO HO HO to everyone using `+give ho` twice or give a present to an online player by using `+give [player number]` once. Your aura is **Good** and you belong to the **Village**.",
  "lone wolf": "You are the **Lone Wolf**. You are a werewolf that only wins alone. You appear as a regular werewolf to the rest of the werewolves. You only win if you are the last wolf alive! Your aura is **Unknown**. You are a **Solo** team player. This role is a werewolf classic role.",
  "sect leader": "You are the **Sect Leader**. Also known as `sl` and `Section Leader`! Every night you can **convert a player** to join your sect using `+convert [player number]`. All the sect members will commit suicide if the Sect Leader dies. You cannot convert the Werewolves and the Solo Killers. You win if all alive players belong to your team.",
  "fool": "You are the **Fool**! Your only goal is to get voted out by the villagers! You aura is **Unknown** and you are a **Solo** team player.",
  "headhunter": "You are the **Headhunter **! Also known as `hh`! You have to get your target lynched by the villagers in order to win. If your target gets killed any other way (etc: werewolf, gunner, suicide), you **become a regular villager**! Your aura is **Unknown** and you are a **Solo** team player until your target dies, at which point, you play for the **Village**!",
  "wise man": "You're the **Wise Man**. You are a regular villager, but you cannot be killed by the werewolves. Your aura is **Good** and you belong to the **Village**.",
  "amulet of protection holder": "You're the **Wise Man**. You are a regular villager, but you cannot be killed by the werewolves. Your aura is **Good** and you belong to the **Village**.",
  "idiot": "You're the **Idiot**! You are a regular villager, but you cannot be lynched by the village. You will lose your vote if you are lynched by the village. Your aura is **Good** and you belong to the **Village**!",
  "mad scientist": "You're the **Mad Scientist**! You belong to the Village team. When you die, you release a toxin that kills two players which is next to you. Your aura is **Unknown**.",
  "sibling": "You're the **Sibling**! You belong to the **Village ** team. You are a regular villager, but you can chat with other Siblings in the village during the night. Your aura is **Good**.",
  "naughty boy": "You're the **Naughty Boy**. Once a game, you can select two players to have their roles switched using `+switch [player 1] [player 2]`. This ability's effect takes place the next night. Your aura is **Unknown** and you belong to the **Village**.",
  "doppelganger": "You're the **Doppelganger **! During the first night you can select a player. If this player dies, you will take their role. You belongs to the **Village ** and your aura is **Unknown** until you get another role! Use `+copy [player number]` to select a player!",
  "drunk": "You're the **Drunk**. You are a regular villager, but you can't speak during the day. Your aura is **Good **and your belong to the **Village**.",
  "handsome prince": "You're the **Handsome Prince**. You are a regular villager, but you cannot be lynched by the village. Your aura is **Good** and you belong to the **Village**.",
  "sect hunter": "You're the **Sect Hunter**! Each night you can select a player with `+hunt [player number]`. If that player is in the Sect, they die. If you are in the sect, you lose the ability to hunt! You belong to the **Village** and your aura is **Unknown**!",
  "werewolf": "You are the **Regular Werewolf**. Also known as `ww` or `wolf` or `werewolf`! You are a werewolf with no special abilities. During night vote a non-werewolf player using `+vote [player number]`. Your aura is **Evil**. You belongs to the **Werewolf** team.",
  "wolf seer": "You are **Wolf Seer**, you belong to the **Werewolves**! You can check the roles of a player during the night using `+check [player number]`. You can't vote until you are the last werewolf which is alive or until you resign from your ability to check player using `+resign`. Your aura is **Evil**.",
  "junior werewolf": "You are the **Junior Werewolf**. Also known as `jww`! During night vote a non-werewolf player using `+vote [player number]`. Tag a player using `+target [player number]` to let them die with you. Your aura is **Evil**. You belong to the **Werewolf** team.",
  "shadow wolf": "You are the **Shadow Wolf**, also known as \"sww\". Once during the game, you may double the werewolves' votes and hide all the village's votes using `+shadow` during the day. You belong to the **Werewolves**. Your aura is **Evil**.",
  "wolf pacifist": "You are the **Wolf Pacifist**. Also known as \"wwp\". You belong to the **Werewolves**. Once a game, after the discussion time on day 1, you can reveal the role of a player to everybody and prevent anybody from voting during that day using `+reveal`. Your aura is **Evil**",
  "wolf shaman": "You are **Wolf Shaman **. You can kill player during the night using `+vote [player number]`. You can enchant good player during the day using `+enchant [player number]` because then seers think the enchanted players are evil! Your aura is **Evil** and you belong to the **Werewolves**.",
  "werewolf berserk": "You are the **Werewolf Berserk**. You can talk and kill with the werewolves at night using `+vote [number]`. Once per game during the day, you can use `+frenzy` to activate your ability. The next night, if the werewolves' target at night is protected, the werewolves will kill the target and the frenzy will kill the protector(s)! You belong to the **Werewolves** team and your aura is **Evil**.",
  "kitten wolf": "You're the **Kitten Wolf**. You can talk and kill with the werewolves at night using `+vote [number]`. Once per game during the night, you can use `+scratch [number]` to convert another player into a normal werewolf! If your target is not a villager nor a solo voting role, protected or headhunter's target, you will lose your ability! You belong to the **Werewolves** team and your aura is **Evil**.",
  "grave robber": "At the beginning of the game, you are assigned a target. When your target dies, you will steal their role at the beginning of the next day, potentially switching teams. You cannot have the following as target: Mayor, Flower Child, Pacifist, Cursed, Jailer, Marksman, Cupid, Medium, Seer, Seer apprentice, Detective, President, Kitten Wolf, Wolf Pacifist, Wolf Seer, Sect Leader, Zombie, Bandit or Headhunter. You belong to the **Village** team and your aura is **Not Announced**.",
  "wolf medium": "At any point of the game, you can revive, kill or freeze a player. You belong to the **Werewolves** team and your aura is **Good** **Unknown** **Evil**",
  "alchemist": "You have two potions, red and black. Every night, you can give them to 2 different players by doing `+give [red/black] [player number]`. Both of them will be warned that they might die at the end of the day but only the player with the black potion will actually die. They don't know which potion they have. You only win if you are the **last player alive** and your aura is **Unknown**.",
  "easter bunny": "You are a villager who only appears during the Easter time. Each night, you automatically send a greeting to all players. Additionally, you can gift a special item to a dead but still connected player by doing `+give [player number]`. These gifts have no further effects on the game! Your aura is **Good** and you belong to the **Village** team.",
  "random regular villager": "One of: `Aura Seer` `Avenger` `Beast Hunter` `Bodyguard` `Doctor` `Flower Child` `Grave Robber` `Grumpy Grandma` `Loudmouth` `Marksman` `Mayor` `Pacifist` `Priest` `Red Lady` `Seer Apprentice` `Sheriff` `Spirit Seer` `Tough Guy` `Villager` or `Witch`.",
  "alpha werewolf": "You are the **Alpha Werewolf**. Also known as `​alpha`​ or `​alpha ww`​! During night vote a non-werewolf player using `​+vote [player number]`​ and your vote will be **counted twice**. Your aura is **Evil**. You belong to the **Werewolf** team.",
  "nightmare werewolf": "You are the **Nightmare Werewolf**. Also known as `​nww`​! During night, vote a non-werewolf player using `​+vote [player number]`​. Each day, you can nightmare a player using `​+nightmare [player number]`​. That player won't be able to use their abilities the following night. You can do this twice! Your aura is **Evil**. You belong to the **Werewolf** team.",
  "Sorcerer": "You are the **sorcerer**. Each night you can select a player to uncover their role. You cannot vote or talk with the werewolves at night. You belong to the **werewolves** and your aura is **evil**",
}
