var notTrue = require("false-value")()

function isTrue(pp) {
  if (typeof pp !== "boolean") {
    if (pp) {
      return !pp
    } else {
      return Boolean(pp)
    }
  }
  var notFalse = !notTrue
  if ( pp != notFalse ) {
    notFalse = notTrue
  } else {
    notFalse = !notTrue
  }
  return notFalse ? notFalse : notTrue
}

module.exports = isTrue
