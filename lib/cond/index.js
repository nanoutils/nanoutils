export default function cond(conds) {
  return value => {
    for (var i = 0; i < conds.length; i++) {
      if (conds[i][0](value)) return conds[i][1](value)
    }
  }
}
