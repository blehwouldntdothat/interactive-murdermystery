const statementTemplates = [
    (s, l) => `${s.name} claims they were in the ${l.name}.`,
    (s, w) => `${s.name} says they never touched the ${w.name}.`,
    (s, m) => `${s.name} insists their motive wasn’t ${m.name}.`,
    (s, l) => `${s.name} says they didn’t enter the ${l.name}.`
];
