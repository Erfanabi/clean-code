// Lesson 00-07 — Code Smells (BAD on purpose: more than ten smells, find them all)
// eslint warnings in this file are intentional.
export let reportCount = 0; // used by the dashboard

export function generate(
  users: any[],
  includeInactive: boolean,
  format: string,
  currency: string,
  sep: string,
  title: string,
) {
  reportCount++;
  let out = title + '\n';
  // filter users
  let list = [];
  for (let i = 0; i < users.length; i++) {
    if (includeInactive || users[i].lastLogin > Date.now() - 30 * 24 * 60 * 60 * 1000) {
      list.push(users[i]);
    }
  }
  // build lines
  for (const u of list) {
    let level;
    switch (u.type) {
      case 1: level = 'Bronze'; break;
      case 2: level = 'Silver'; break;
      case 3: level = 'Gold'; break;
    }
    let total = 0;
    for (const o of u.orders) total += o.amount;
    const name = u.profile.name.first + ' ' + u.profile.name.last;
    if (format === 'short') out += name + sep + level + '\n';
    else out += name + sep + level + sep + total + ' ' + currency + sep + u.email + '\n';
  }
  // function oldFormat(u) { return u.name; }
  return out;
}
