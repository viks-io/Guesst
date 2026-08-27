import type { Category, Item } from "../../game/types";

const CATEGORY_ID = "football-players";

function item(data: Omit<Item, "categoryId">): Item {
  return { ...data, categoryId: CATEGORY_ID };
}

const items: Item[] = [
  item({
    id: "cristiano-ronaldo",
    answer: "Cristiano Ronaldo",
    aliases: ["Ronaldo", "Cristiano", "CR7"],
    clues: [
      { text: "Born in Madeira, Portugal, he joined Sporting CP's academy before moving to England as a teenager in 2003." },
      { text: "He won league titles with clubs in England, Spain, and Italy — a feat few players have managed across three different top divisions." },
      { text: "A right-footed forward famed for his heading and free-kick ability, he has long captained his national team." },
      { text: "He captained Portugal to their first-ever major trophy at Euro 2016 and has won multiple Ballon d'Or awards." },
      { text: "Instantly recognisable by his number 7 shirt and the nickname \"CR7\", he is one of the most followed athletes in the world." },
    ],
  }),
  item({
    id: "lionel-messi",
    answer: "Lionel Messi",
    aliases: ["Messi", "Leo Messi", "Leo"],
    clues: [
      { text: "Born in Rosario, Argentina, he moved to Spain as a child after a top academy agreed to fund treatment for a growth hormone condition." },
      { text: "He spent the vast majority of his career at a single Spanish club before later moves to France and the United States." },
      { text: "A left-footed forward famed for his dribbling and vision, he has won the Ballon d'Or a record number of times." },
      { text: "He finally lifted the World Cup with Argentina, capping one of the most celebrated individual tournaments in the sport's history." },
      { text: "Widely regarded as one of the greatest players ever, he wears the number 10 shirt and is often simply called \"Leo\"." },
    ],
  }),
  item({
    id: "mohamed-salah",
    answer: "Mohamed Salah",
    aliases: ["Salah", "Mo Salah"],
    clues: [
      { text: "Born in a village in Gharbia, Egypt, he began his senior career at a Cairo club before moving to Europe as a teenager." },
      { text: "Before finding his best form, he had a spell in Italy and an earlier stint at an English club in London where he struggled for game time." },
      { text: "A right-footed winger who loves to cut inside onto his left foot, he became a prolific scorer after moving to Merseyside." },
      { text: "He has been named African Footballer of the Year multiple times and is Egypt's all-time record goalscorer." },
      { text: "Known to fans of his Premier League club as the \"Egyptian King\", he wears the number 11 shirt." },
    ],
  }),
  item({
    id: "kylian-mbappe",
    answer: "Kylian Mbappé",
    aliases: ["Mbappe", "Kylian Mbappe"],
    clues: [
      { text: "Born in Bondy, near Paris, he emerged from a Monaco academy renowned for producing elite attacking talent." },
      { text: "While still a teenager, he moved to the French capital's biggest club in one of the most expensive transfers in history." },
      { text: "An explosively fast forward comfortable across the front line, he is known for his composure in one-on-one situations." },
      { text: "He scored a hat-trick in a World Cup final as a 23-year-old, becoming only the second player ever to do so." },
      { text: "After becoming captain of the French national team, he left Paris for Spain's biggest club to continue chasing the Ballon d'Or." },
    ],
  }),
  item({
    id: "erling-haaland",
    answer: "Erling Haaland",
    aliases: ["Haaland", "Erling Braut Haaland"],
    clues: [
      { text: "Born in Leeds, England, while his father played in the Premier League, he was raised in Norway from early childhood." },
      { text: "He rose to prominence at an Austrian club before a big-money move to a German Bundesliga giant known for developing young strikers." },
      { text: "A towering, powerfully built striker, he once scored nine goals in a single Under-20 World Cup match for Norway." },
      { text: "He shattered the Premier League's single-season goalscoring record in his very first year in England." },
      { text: "Known for his composed finishing and towering frame, he plays for Manchester City and wears the number 9 shirt." },
    ],
  }),
  item({
    id: "jude-bellingham",
    answer: "Jude Bellingham",
    aliases: ["Bellingham"],
    clues: [
      { text: "Born in Stourbridge, England, he became the youngest player to appear for Birmingham City's first team in the modern era." },
      { text: "He moved to Germany as a teenager, becoming one of the most sought-after young midfielders in Europe at a Dortmund club known for nurturing talent." },
      { text: "A powerful box-to-box midfielder, he is known for his composure well beyond his years and his knack for scoring important goals." },
      { text: "He moved to Spain's biggest club and won major honours in his very first season there." },
      { text: "Known for wearing the number 5 shirt for both club and country, he is considered one of the most complete young midfielders in the world." },
    ],
  }),
  item({
    id: "neymar",
    answer: "Neymar",
    aliases: ["Neymar Jr", "Neymar Junior"],
    clues: [
      { text: "Born in Mogi das Cruzes, Brazil, he rose to fame at a São Paulo club before moving to Europe in his early twenties." },
      { text: "He formed a famous attacking trio, nicknamed after their initials, at a Spanish club before a world-record transfer to Paris." },
      { text: "A flair-driven forward known for his dribbling, tricks, and set-piece ability, he plays primarily off the left wing." },
      { text: "He is Brazil's all-time leading goalscorer for the men's national team, surpassing a legendary predecessor's long-standing record." },
      { text: "Famous worldwide by a single name, he has long worn the number 10 shirt for Brazil." },
    ],
  }),
  item({
    id: "kevin-de-bruyne",
    answer: "Kevin De Bruyne",
    aliases: ["De Bruyne", "KDB"],
    clues: [
      { text: "Born in Drongen, Belgium, he had a difficult early spell in England before rebuilding his career in Germany." },
      { text: "He starred at a Bundesliga club before returning to the Premier League for a fee that broke a Belgian transfer record at the time." },
      { text: "A creative midfielder renowned for his passing range and vision, he has topped the Premier League assist charts multiple times." },
      { text: "He has been named Premier League Player of the Season on multiple occasions while playing for a Manchester club." },
      { text: "Regarded as one of the finest passers of his generation, he became a key figure in one of English football's most dominant recent teams." },
    ],
  }),
  item({
    id: "thierry-henry",
    answer: "Thierry Henry",
    aliases: ["Henry"],
    clues: [
      { text: "Born in Les Ulis, near Paris, he began his professional career at Monaco before a brief, difficult spell in Italy." },
      { text: "He was converted from a winger into a lethal striker after joining an English club managed by a fellow Frenchman." },
      { text: "He became the all-time leading goalscorer for his Premier League club, a record that stood for many years." },
      { text: "He was part of the France squad that won the World Cup on home soil in 1998, though still a young winger at the time." },
      { text: "Known for his pace, elegance, and clinical finishing, he wore the number 14 shirt for Arsenal." },
    ],
  }),
  item({
    id: "wayne-rooney",
    answer: "Wayne Rooney",
    aliases: ["Rooney"],
    clues: [
      { text: "Born in Croxteth, Liverpool, he burst onto the scene as a teenager with a wonder-goal for Everton against Arsenal." },
      { text: "He moved to Manchester as an 18-year-old for a fee that was then a record for a teenage player." },
      { text: "A powerful, versatile forward, he became his club's all-time leading goalscorer, surpassing a legendary predecessor's record." },
      { text: "He held the record as England's all-time leading men's goalscorer for several years." },
      { text: "Known for his combative style and long-range strikes, he wore the number 10 shirt for Manchester United." },
    ],
  }),
  item({
    id: "zinedine-zidane",
    answer: "Zinedine Zidane",
    aliases: ["Zidane", "Zizou"],
    clues: [
      { text: "Born in Marseille to Algerian immigrant parents, he began his career at Cannes before moving to Bordeaux." },
      { text: "He moved to Italy to join Juventus, winning consecutive league titles before a world-record transfer to Spain." },
      { text: "An elegant attacking midfielder renowned for his close control and vision, he was named World Player of the Year three times." },
      { text: "He scored two headers in the 1998 World Cup final as France won the tournament on home soil." },
      { text: "He famously struck a stunning volley in the 2002 Champions League final and later became a highly successful manager of the same club." },
    ],
  }),
  item({
    id: "ronaldinho",
    answer: "Ronaldinho",
    aliases: ["Ronaldinho Gaucho"],
    clues: [
      { text: "Born in Porto Alegre, Brazil, he starred domestically before moving to Europe, first to Paris Saint-Germain." },
      { text: "He joined Barcelona in 2003 and helped rebuild the club, with a young Argentine teammate soon emerging in his shadow." },
      { text: "Known for his extravagant skills, flicks, and permanent smile, he was named FIFA World Player of the Year twice." },
      { text: "He was a key part of Brazil's 2002 World Cup-winning squad, scoring a famous long-range free kick against England." },
      { text: "One of the most joyful and skilful players ever, he was as famous for his big smile as for his ball control." },
    ],
  }),
  item({
    id: "david-beckham",
    answer: "David Beckham",
    aliases: ["Beckham", "Becks"],
    clues: [
      { text: "Born in Leytonstone, London, he progressed through Manchester United's celebrated youth academy in the early 1990s." },
      { text: "He scored a famous goal from inside his own half against Wimbledon as a young player, announcing his talent to the football world." },
      { text: "A right-sided midfielder renowned for his precise crossing and free-kick technique, he later played in Spain, the United States, and Italy." },
      { text: "He captained the England national team and scored a last-gasp free kick against Greece to send England to the 2002 World Cup." },
      { text: "One of the most recognisable athletes of his generation, he was known for his number 7 shirt and his celebrity profile off the pitch." },
    ],
  }),
  item({
    id: "didier-drogba",
    answer: "Didier Drogba",
    aliases: ["Drogba"],
    clues: [
      { text: "Born in Abidjan, Ivory Coast, he moved to France as a child and developed through several lower-league French clubs." },
      { text: "He earned a big move to England after an impressive season at Marseille caught a London club's attention." },
      { text: "A powerful, physical striker, he became known for scoring in crucial cup finals for his London club." },
      { text: "He is widely credited with helping unite his home country during a period of civil conflict through his football success." },
      { text: "He scored a dramatic injury-time header in the 2012 Champions League final before winning the trophy on penalties." },
    ],
  }),
  item({
    id: "andres-iniesta",
    answer: "Andrés Iniesta",
    aliases: ["Iniesta", "Andres Iniesta"],
    clues: [
      { text: "Born in Fuentealbilla, a small Spanish village, he joined a top academy at just 12 years old, leaving his family home behind." },
      { text: "He spent his entire senior club career at a single Spanish giant, forming a celebrated midfield partnership with a compatriot." },
      { text: "A diminutive, elegant midfielder known for his close control and ability to escape tight spaces, he rarely picked up cards for fouls." },
      { text: "He scored the winning goal in extra time of the 2010 World Cup final, Spain's first-ever World Cup triumph." },
      { text: "Beloved for his humility and vision, he wore the number 8 shirt for Barcelona for most of his career." },
    ],
  }),
  item({
    id: "steven-gerrard",
    answer: "Steven Gerrard",
    aliases: ["Gerrard"],
    clues: [
      { text: "Born in Whiston, near Liverpool, he progressed through his boyhood club's academy and made his debut in the late 1990s." },
      { text: "He spent almost his entire career at one Merseyside club, later captaining both club and country for many years." },
      { text: "A powerful box-to-box midfielder known for his long-range shooting and driving runs, he rarely played outside his home city." },
      { text: "He inspired a remarkable comeback from three goals down in the 2005 Champions League final, one of the competition's greatest finals." },
      { text: "Famous for his passionate leadership and thunderous strikes, he wore the number 8 shirt for Liverpool." },
    ],
  }),
  item({
    id: "sergio-ramos",
    answer: "Sergio Ramos",
    aliases: ["Ramos"],
    clues: [
      { text: "Born in Camas, near Seville, he broke into professional football at Sevilla before a big move to the Spanish capital as a teenager." },
      { text: "A commanding centre-back, he became known for his aggressive tackling, aerial dominance, and surprising knack for scoring important goals." },
      { text: "He captained Real Madrid to multiple Champions League titles during one of the club's most dominant eras." },
      { text: "He scored a dramatic last-minute header in the 2014 Champions League final to force extra time against Atlético Madrid." },
      { text: "One of the most decorated defenders in history, he has picked up more cards than almost any player, yet remains adored by his club's fans." },
    ],
  }),
  item({
    id: "robert-lewandowski",
    answer: "Robert Lewandowski",
    aliases: ["Lewandowski", "Lewy"],
    clues: [
      { text: "Born in Warsaw, Poland, he began his senior career at modest Polish clubs before moving to Germany." },
      { text: "He scored four goals in under nine minutes as a substitute in a Champions League match while at Borussia Dortmund." },
      { text: "A clinical, positionally intelligent striker, he moved to a rival Bundesliga giant where he became one of its all-time top scorers." },
      { text: "He broke a decades-old record for goals scored in a single Bundesliga season." },
      { text: "Widely regarded as one of the best strikers of his generation, he later moved to Spain to continue his prolific scoring for Barcelona." },
    ],
  }),
  item({
    id: "luka-modric",
    answer: "Luka Modrić",
    aliases: ["Modric", "Luka Modric"],
    clues: [
      { text: "Born in Zadar, Croatia, during wartime, he spent part of his childhood as a refugee before starting his football journey." },
      { text: "He starred at Dinamo Zagreb and had a loan spell in Bosnia before a move to England's Tottenham Hotspur." },
      { text: "A diminutive, tireless midfielder known for his passing range and stamina, he moved to Real Madrid in 2012." },
      { text: "He won the Ballon d'Or in 2018, ending a decade in which the award had been shared between Messi and Ronaldo." },
      { text: "He captained Croatia to their first-ever World Cup final in 2018, still playing at the top level well into his thirties." },
    ],
  }),
  item({
    id: "karim-benzema",
    answer: "Karim Benzema",
    aliases: ["Benzema"],
    clues: [
      { text: "Born in Lyon, France, to Algerian immigrant parents, he rose through his hometown club's academy." },
      { text: "He moved to Real Madrid in 2009 and gradually developed into one of the most complete forwards in the world." },
      { text: "A technically gifted striker known for his link-up play, he formed a devastating attacking trio with two teammates, nicknamed \"BBC\"." },
      { text: "He won the Ballon d'Or in 2022 after inspiring Real Madrid's Champions League triumph with a string of dramatic performances." },
      { text: "Known for his elegant style and clinical finishing, he wore the number 9 shirt for Real Madrid." },
    ],
  }),
];

export const footballPlayersCategory: Category = {
  id: CATEGORY_ID,
  name: "Football Players",
  icon: "⚽",
  description: "Guess the mystery footballer from five clues.",
  items,
};
