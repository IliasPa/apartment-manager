// localStorage with this copy's own keys. Every GitHub Pages site of an account shares
// one origin (iliaspa.github.io), so unprefixed keys would pick up the token, repo and
// data cache of any other app there built from the same code.
const PREFIX = 'demo_';

export const storage = {
  getItem: (key) => localStorage.getItem(PREFIX + key),
  setItem: (key, value) => localStorage.setItem(PREFIX + key, value),
};
