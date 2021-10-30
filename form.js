
const fork = (list) => {
  const stem = [ {} ]
  list.forEach(({ i, o }) => {
    let link = stem
    for (let k = 0, n = i.length; k < n; k++) {
      let note = i[k]
      link = link[0][note] = link[0][note] || [ {}, null ]
    }
    link[1] = o
  })
  return stem
}

const norm = (text) => text

const form = (text, tree) => {
  let stem = tree
  let blob = []

  for (let i = 0, n = text.length; i < n; i++) {
    let note = text[i]
    if (!stem) {
      throw text
    }

    if (stem[0][note]) {
      stem = stem[0][note]
    } else {
      blob.push(stem[1])
      stem = tree[0][note]
    }
  }

  if (stem[1]) {
    blob.push(stem[1])
  }

  return blob.join('')
}

module.exports = {
  fork,
  norm,
  form
}
