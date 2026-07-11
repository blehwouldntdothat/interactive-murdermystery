const clueTemplates = [
    (s, l) => `${s.name} was confirmed to NOT be in the ${l.name}.`,
    (s, w) => `Traces of ${w.material} were found on ${s.name}'s clothing.`,
    (w) => `The murder weapon was made of ${w.material}.`,
    (m) => `The killer’s motive was NOT ${m.name}.`,
    (l) => `The murder happened in the ${l.name}.`
];
