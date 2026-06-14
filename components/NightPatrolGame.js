'use client';

import { useState } from 'react';
import styles from './NightPatrolGame.module.css';

const scenarios = [
  {
    id: 'intro',
    title: 'Entering the Night Streets of Madinah',
    text: 'It is the dead of night in Madinah. The city is asleep, but Caliph Umar (رضي الله عنه) is not. As his companion Aslam, you are accompanying him on his nightly rounds. He walks quickly through the darkness, looking for anyone in distress. Suddenly, he stops, noticing a faint fire in the distance, outside the city limits.',
    illustration: '🔥',
    choices: [
      { text: 'Suggest returning to the palace to rest', nextId: 'famine_start' },
      { text: 'Investigate the fire immediately with him', nextId: 'famine_start' }
    ]
  },
  {
    id: 'famine_start',
    title: 'The Howling Fire',
    text: 'You approach the flickering fire and find a woman sitting with her crying children, huddled around a boiling clay pot. The children are sobbing. Umar approaches and greets them respectfully: "Peace be upon you, O people of the light." He asks the mother why her children are weeping.',
    illustration: '👵',
    choices: [
      { text: 'Ask the mother directly what is inside the pot', nextId: 'famine_reveal' },
      { text: 'Listen silently to her explanation', nextId: 'famine_reveal' }
    ]
  },
  {
    id: 'famine_reveal',
    title: 'Boiling Stones',
    text: 'The woman replies: "There is nothing in this pot but water and stones. I boil them to make my children believe food is cooking, so they fall asleep hoping. Allah will judge between us and Umar! He is the ruler, yet he is unaware of our misery!" Umar is visibly shocked and whispers: "How could Umar know of your condition?" She snaps back: "He rules us, yet he is negligent of us!"',
    illustration: '🏺',
    choices: [
      { text: 'Defend Umar and tell her she is speaking to the Caliph', nextId: 'famine_defend' },
      { text: 'Help Umar rush back to the treasury immediately', nextId: 'famine_treasury' }
    ]
  },
  {
    id: 'famine_defend',
    title: 'Defending the Caliph',
    text: 'Umar immediately grabs your arm and stops you. "Do not say a word," he whispers. "She has every right to speak." He turns back, his eyes filled with tears, and tells the woman: "Wait here. I will return shortly with food." He turns around and runs back towards the city treasury.',
    illustration: '🤫',
    choices: [
      { text: 'Follow him back to the treasury', nextId: 'famine_treasury' }
    ]
  },
  {
    id: 'famine_treasury',
    title: 'The Weight of Accountability',
    text: 'At the public treasury (Bayt al-Mal), Umar packs a large sack with flour, cooking oil, dates, and money. He turns to you and says: "Aslam, lift this sack and place it on my back." You look at the heavy bag and suggest that you, his servant, should carry it instead.',
    illustration: '🌾',
    choices: [
      { text: 'Insist: "Let me carry it, O Commander of the Faithful!"', nextId: 'famine_burden' },
      { text: 'Obey him and place the sack on his back', nextId: 'famine_cook' }
    ]
  },
  {
    id: 'famine_burden',
    title: 'Who Will Carry My Burden?',
    text: 'Umar looks at you with stern, tear-filled eyes and says: "Will you carry my burden for me on the Day of Resurrection? May your mother lose you, Aslam! Lift the sack!" You lift the heavy sack onto his back. He carries it all the way back to the camp without stopping, though the distance is long.',
    illustration: '⚖️',
    choices: [
      { text: 'Follow him back to the family\'s tent', nextId: 'famine_cook' }
    ]
  },
  {
    id: 'famine_cook',
    title: 'Cooking the Meal',
    text: 'Upon returning, Umar does not just drop the food. He kneels by the stove, blows on the firewood to keep the flame alive—you see smoke passing through his thick beard. He mixes the flour, adds the oil, and cooks a warm meal. He feeds the children with his own hands until they are full and laughing.',
    illustration: '🥣',
    choices: [
      { text: 'Offer to take over the cooking duties', nextId: 'famine_feed' },
      { text: 'Watch his humility in silent admiration', nextId: 'famine_feed' }
    ]
  },
  {
    id: 'famine_feed',
    title: 'A Ruler\'s True Reward',
    text: 'The children, now full and happy, begin playing and laughing. The mother is filled with gratitude and says to Umar: "May Allah reward you! You are more worthy of being the Caliph than Umar!" Umar smiles softly and replies: "When you go to visit the Caliph tomorrow, you will find me there." He sits at a distance, watching the children play before bidding them farewell.',
    illustration: '✨',
    choices: [
      { text: 'Continue to the next night patrol scenario', nextId: 'caravan_start' }
    ]
  },
  {
    id: 'caravan_start',
    title: 'Scenario 2: The Resting Caravan',
    text: 'A few weeks later, on another night patrol, you and Umar notice a merchant caravan resting at the outskirts of Madinah. They are travelers, carrying valuable trade goods, sleeping in the open. Umar says to you: "They are guests in our city, and their wealth is exposed. Let us guard them tonight so they can sleep in peace."',
    illustration: '🐪',
    choices: [
      { text: 'Guard the caravan with Umar through the night', nextId: 'caravan_guard' },
      { text: 'Suggest calling the city guard instead', nextId: 'caravan_guard' }
    ]
  },
  {
    id: 'caravan_guard',
    title: 'The Silent Watch',
    text: 'Umar and you sit near the caravan, staying awake all night. During the third part of the night, Umar hears an infant crying inside one of the tents. He approaches the tent and tells the mother: "Fear Allah, and take care of your child." He returns to his post. An hour later, the baby cries again. Umar returns, telling the mother the same. The child cries a third time near dawn.',
    illustration: '👶',
    choices: [
      { text: 'Ask the mother why the child won\'t stop crying', nextId: 'caravan_wean' }
    ]
  },
  {
    id: 'caravan_wean',
    title: 'The Law Changed by a Cry',
    text: 'Umar approaches the tent, frustrated. The mother, not recognizing him, says: "O servant of Allah! You have annoyed me tonight. I am trying to wean him, but he refuses." Umar asks: "Why are you weaning him early?" She replies: "Because Umar only pays a child\'s stipend after they are weaned. We are poor, and I need that stipend." Umar beats his forehead, weeping: "Woe to Umar! How many Muslim children have you killed?"',
    illustration: '📜',
    choices: [
      { text: 'Console Umar and see his next decree', nextId: 'caravan_end' }
    ]
  },
  {
    id: 'caravan_end',
    title: 'Stipends from Birth',
    text: 'After leading the Fajr prayer with a voice choked with tears, Umar immediately issues a public decree: "Do not hasten to wean your infants. We will pay the stipend for every child in Islam from the day they are born." The state treasury is restructured to support families starting at childbirth. You realize that a simple mother\'s cry in the desert changed the law of the entire empire.',
    illustration: '🏛️',
    choices: [
      { text: 'Conclude the Night Patrol Experience', nextId: 'conclusion' }
    ]
  },
  {
    id: 'conclusion',
    title: 'Reflections on Al-Farooq',
    text: 'Your night patrols with Umar ibn Al-Khattab have come to an end. You have witnessed a man who ruled millions of square miles, yet carried bags of flour on his back, blew on cooking fires, and wept at the cry of an unknown child in the night. This was the justice of Al-Farooq—a ruler who was truly the servant of his people.',
    illustration: '⭐',
    isEnd: true,
    choices: []
  }
];

export default function NightPatrolGame() {
  const [currentId, setCurrentId] = useState('intro');

  const current = scenarios.find((s) => s.id === currentId) || scenarios[0];

  const handleChoice = (nextId) => {
    setCurrentId(nextId);
  };

  const restart = () => {
    setCurrentId('intro');
  };

  return (
    <div className={styles.gameCard}>
      <div className={styles.header}>
        <span className={styles.badge}>Interactive History Experience</span>
        <h3 className={styles.cardTitle}>{current.title}</h3>
      </div>

      <div className={styles.body}>
        <div className={styles.illustrationWrapper}>
          <span className={styles.illustration}>{current.illustration}</span>
        </div>
        <p className={styles.text}>{current.text}</p>
      </div>

      <div className={styles.footer}>
        {current.isEnd ? (
          <button className={styles.restartBtn} onClick={restart}>
            Restart Experience
          </button>
        ) : (
          <div className={styles.choicesGrid}>
            {current.choices.map((choice, i) => (
              <button
                key={i}
                className={styles.choiceBtn}
                onClick={() => handleChoice(choice.nextId)}
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
