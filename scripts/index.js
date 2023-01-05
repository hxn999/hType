var wordList = [
   // code starts from line {94}
  // some words collected from internet
'able', 'about', 'above', 'accept', 'across', 'act',
'action', 'add', 'admit', 'adult', 'affect', 'after',
'again', 'age', 'agency', 'agent', 'ago', 'agree', 
'ahead', 'air', 'all', 'allow', 'almost', 'alone', 
'along', 'also', 'always', 'among', 'amount', 'and',
'animal', 'answer', 'any', 'anyone', 'appear', 'apply',
'area', 'argue', 'arm', 'around', 'arrive', 'art',
'artist', 'as', 'ask', 'assume', 'at', 'attack',
'author', 'avoid', 'away', 'baby', 'back', 'bad',
'bag', 'ball', 'bank', 'bar', 'base', 'be', 'beat',
'become', 'bed', 'before', 'begin', 'behind', 'best',
'better', 'beyond', 'big', 'bill', 'bit', 'black',
'blood', 'blue', 'board', 'body', 'book', 'born',
'both', 'box', 'boy', 'break', 'bring', 'budget',
'build', 'but', 'buy', 'by', 'call', 'camera', 'can',
'cancer', 'car', 'card', 'care', 'career', 'carry', 'case',
'catch', 'cause', 'cell', 'center', 'chair', 'chance', 'change',
'charge', 'check', 'child', 'choice', 'choose', 'church',
'city', 'civil', 'claim', 'class', 'clear', 'close', 'coach',
'cold', 'color', 'come', 'common', 'cost', 'could', 'couple',
'course', 'court', 'cover', 'create', 'crime', 'cup', 'cut', 
'dark', 'data', 'day', 'dead', 'deal', 'death', 'debate', 'decade',
'decide', 'deep', 'degree', 'design', 'detail', 'die', 'dinner',
'do', 'doctor', 'dog', 'door', 'down', 'draw', 'dream', 'drive',
'drop', 'drug', 'during', 'each', 'early', 'east', 'easy', 'eat',
'edge', 'effect', 'effort', 'eight', 'either', 'else', 'end', 
'energy', 'enjoy', 'enough', 'enter', 'entire', 'even', 'event',
'ever', 'every', 'exist', 'expect', 'expert', 'eye', 'face', 'fact',
'factor', 'fail', 'fall', 'family', 'far', 'fast', 'father', 'fear',
'feel', 'few', 'field', 'fight', 'figure', 'fill', 'film', 'final',
'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish',
'five', 'floor', 'fly', 'focus', 'follow', 'food', 'foot', 'for', 'force',
'forget', 'form', 'former', 'four', 'free', 'friend', 'from', 'front',
'full', 'fund', 'future', 'game', 'garden', 'gas', 'get', 'girl',
'give', 'glass', 'go', 'goal', 'good', 'great', 'green', 'ground',
'group', 'grow', 'growth', 'guess', 'gun', 'guy', 'hair', 'half', 'hand',
'hang', 'happen', 'happy', 'hard', 'have', 'he', 'head', 'health',
'hear', 'heart', 'heat', 'heavy', 'help', 'her', 'here', 'high',
'him', 'his', 'hit', 'hold', 'home', 'hope', 'hot', 'hotel', 'hour', 
'house', 'how', 'huge', 'human', 'I', 'idea', 'if', 'image', 'impact',
'in', 'indeed', 'inside', 'into', 'issue', 'it', 'item', 'its', 'itself',
'job', 'join', 'just', 'keep','key', 'kid', 'kill', 'kind', 'know',
'land', 'large', 'last', 'late', 'later', 'laugh', 'law', 'lawyer',
'lay', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'leg', 
'legal', 'less', 'let', 'letter', 'level', 'lie', 'life', 'light', 
'like', 'likely', 'line', 'list', 'listen', 'little', 'live', 'local',
'long', 'look', 'lose', 'loss', 'lot', 'love', 'low', 'main', 'major',
'make', 'man', 'manage', 'many', 'market', 'matter', 'may', 'maybe', 
'me', 'mean', 'media', 'meet', 'member', 'memory', 'method', 'middle',
'might', 'mind', 'minute', 'miss', 'model', 'modern', 'moment', 'money',
'month', 'more', 'most', 'mother', 'mouth', 'move', 'movie',  'much',
'music', 'must', 'my', 'myself', 'name', 'nation', 'nature', 'near', 
'nearly', 'need', 'never', 'new', 'news', 'next', 'nice', 'night', 'no',
'none', 'nor', 'north', 'not', 'note', 'notice', 'now', "n't", 'number',
'occur', 'of', 'off', 'offer', 'office', 'often', 'oh', 'oil', 'ok', 
'old', 'on', 'once', 'one', 'only', 'onto', 'open', 'option', 'or', 'order',
'other', 'others', 'our', 'out', 'over', 'own', 'owner', 'page', 'pain', 
'paper', 'parent', 'part', 'party', 'pass', 'past', 'pay', 'peace', 'people',
'per', 'period', 'person', 'phone', 'pick', 'piece', 'place', 'plan', 
'plant', 'play', 'player', 'PM', 'point', 'police', 'policy', 'poor', 
'power', 'pretty', 'price', 'prove', 'public', 'pull', 'push', 'put',
'quite', 'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach',
'read', 'ready', 'real', 'really', 'reason', 'recent', 'record', 'red',
'reduce', 'region', 'relate', 'remain', 'remove', 'report', 'rest', 'result', 
'return', 'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 
'room', 'rule', 'run', 'safe', 'same', 'save', 'say', 'scene', 'school', 'score',
'sea', 'season', 'seat', 'second', 'see', 'seek', 'seem', 'sell', 'send',
'senior', 'sense', 'series', 'serve', 'set', 'seven', 'shake', 'share',
'she', 'shoot', 'short', 'shot', 'should', 'show', 'side', 'sign', 'simple',
'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site', 'six', 'size',
'skill', 'skin', 'small', 'smile', 'so', 'social', 'some', 'son', 'song',
'soon', 'sort', 'sound', 'source', 'south', 'space', 'speak', 'speech',
'spend', 'sport', 'spring', 'staff', 'stage', 'stand', 'star', 'start', 
'state', 'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 
'street', 'strong', 'study', 'stuff', 'style', 'such', 'suffer', 'summer',
'sure', 'system', 'table', 'take', 'talk', 'task', 'tax', 'teach', 'team',
'tell', 'ten', 'tend', 'term', 'test', 'than', 'thank', 'that', 'the', 'their',
'them', 'then', 'theory', 'there', 'these', 'they', 'thing', 'think', 'third',
'this', 'those', 'though', 'threat', 'three', 'throw', 'thus', 'time', 'to',
'today', 'too', 'top', 'total', 'tough', 'toward', 'town', 'trade', 'travel',
'treat', 'tree', 'trial', 'trip', 'true', 'truth', 'try', 'turn', 'tv', 'two',
'type', 'under', 'unit', 'until', 'up', 'upon', 'us', 'use', 'value', 'very',
'victim', 'view', 'visit', 'voice', 'vote', 'wait', 'walk', 'wall', 'want', 
'war', 'watch', 'water', 'way', 'we', 'weapon', 'wear', 'week', 'weight', 'well', 
'west', 'what', 'when', 'where', 'which', 'while', 'white', 'who', 'whole', 'whom',
'whose', 'why', 'wide', 'wife', 'will', 'win', 'wind', 'window', 'wish', 'with',
'within', 'woman', 'wonder', 
'word', 'work', 'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong', 
'yard', 'yeah', 'year', 'yes', 'yet', 'you', 'young', 'your'];

let words = [] // words which will be displayed


//  shuffling random words
let i1 = 0;
while (i1 < 18) {
  words.push(wordList[Math.floor(Math.random() * wordList.length)])
  i1++
}



const inputGet = document.querySelector('#txt') // input

let correct = 0 // correct word count

//  calculating typing time 

let sec = 0;
function timer() {

  setInterval(() => {
    sec += 1;
    document.querySelector('h2').innerText = sec;
  }, 1300);
  // timer
}


let checkWord = [] // array of input text

// displaying all words in span through loop
let elemnt = '';
words.map(e => {
  elemnt += `<span>${e}</span>
     `
});
document.querySelector('.words').innerHTML = elemnt;

let spanArr = document.querySelectorAll('span');



// checking input text 

function check(i) {
  if (checkWord[i] === words[i]) {
    if (i > words.length - 3) {
      spanArr[i - 1].style.backgroundColor = '';
      spanArr[i].style.backgroundColor = 'rgba(177, 102, 102, 0.418)';
    } else {
      spanArr[i + 1].style.backgroundColor = 'rgba(177, 102, 102, 0.418)';
      spanArr[i].style.backgroundColor = '';
    }
    spanArr[i].style.color = 'green';

    correct += 1;
  } else {
    if (i > words.length - 3) {
      spanArr[i - 1].style.backgroundColor = '';
      spanArr[i].style.backgroundColor = 'rgba(177, 102, 102, 0.418)';
    } else {
      spanArr[i + 1].style.backgroundColor = 'rgba(177, 102, 102, 0.418)';
      spanArr[i].style.backgroundColor = '';
    }
    spanArr[i].style.color = 'red';

  }
}

// calculating words per minute(wpm)

function wpm(time, crct) {
  let wpm = Math.ceil((crct / time) * 60);
  document.querySelector('h1').innerHTML = `<i>WPM</i> || ${wpm}`
}


let i = 0;
let iv = ''; //  input value

// matching input value with given words
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === ' ' && inputGet.value != ' ' && inputGet.value) {

    if (i === 0) { // timer starts on first input
      timer()
    }

    iv = inputGet.value;
    if (i > 0) {
      iv = iv.slice(1);
    }
    checkWord.push(iv) //  pushing input value in the array
    inputGet.value = null;
    if (i < words.length) {
      check(i)  // validating input value
    }
    if (i > words.length - 2) { //  executes on the last word
      let time = parseInt(document.querySelector('h2').innerText) // typing time
      wpm(time, correct); // calculate wpm
      document.querySelector('h2').style.display = 'none';
      document.querySelector('h3').style.opacity = '1';
    }
    i++
  }
})




