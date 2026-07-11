const clueTemplates = [
    (killer, motive) => `${killer.name}'s motive was ${motive.name}.`,
    (weapon, suspect) => `Analysts discovered traces of a weapon made of ${weapon.material} on the clothing of ${suspect.name}.`,
    (suspect, location) => `${suspect.name} had not been in the ${location.name}.`,
    (killer, weapon) => `The killer used a ${weapon.name}.`
];
