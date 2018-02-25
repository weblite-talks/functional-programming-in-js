const R = require('ramda')


const messages = [
  { from: 'ali', message: 'a', seen: false },
  { from: 'amirhossein', message: 'b', seen: true },
  { from: 'ali', message: 'c', seen: false },
  { from: 'mostafa', message: 'd', seen: true },
  { from: 'amirhossein', message: 'e', seen: false },
  { from: 'ali', message: 'f', seen: true },
  { from: 'ali', message: 'g', seen: true },
  { from: 'amirhossein', message: 'h', seen: false },
  { from: 'ali', message: 'i', seen: false },
  { from: 'mostafa', message: 'g', seen: true },
  { from: 'ali', message: 'k', seen: true },
  { from: 'mostafa', message: 'l', seen: false },
  { from: 'amirhossein', message: 'm', seen: false },
  { from: 'amirhossein', message: 'n', seen: true },
  { from: 'mostafa', message: 'o', seen: false },
  { from: 'ali', message: 'p', seen: true },
  { from: 'ali', message: 'q', seen: false },
]


// functions
const getUnseenMessage = R.filter(R.propEq('seen', false))
const getGroupBySameFrom = R.groupBy(R.prop('from'))
const getLength = R.map(R.length)




// normal code
const unseenMessage = getUnseenMessage(messages)
const groupBySameFrom = getGroupBySameFrom(unseenMessage)
const len = getLength(groupBySameFrom)
console.log(len) // => { ali: 4, amirhossein: 3, mostafa: 2 }




// composition (f.g.k)(data)
const len1 = getLength(getGroupBySameFrom(getUnseenMessage(messages)))
console.log(len1) // => { ali: 4, amirhossein: 3, mostafa: 2 }




// R.compose
const getLenCompose = R.compose(
  getLength,
  getGroupBySameFrom,
  getUnseenMessage,
)
console.log(getLenCompose(messages)) // => { ali: 4, amirhossein: 3, mostafa: 2 }




// R.pipe
const getLenPipe = R.pipe(
  getUnseenMessage,
  getGroupBySameFrom,
  getLength,
)
console.log(getLenPipe(messages)) // => { ali: 4, amirhossein: 3, mostafa: 2 }s
