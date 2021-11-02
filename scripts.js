const thumbnails = [
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Twinkle&skinColor=Yellow',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Happy&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Brown',
  'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=PastelGreen&graphicType=Hola&eyeType=Surprised&eyebrowType=Angry&mouthType=Grimace&skinColor=Brown',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Red&eyeType=EyeRoll&eyebrowType=Angry&mouthType=Eating&skinColor=Black',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Disbelief&skinColor=Brown',
  'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=BlondeGolden&facialHairType=Blank&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelRed&graphicType=SkullOutline&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale',
  'https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Kurt&hatColor=Blue03&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=PastelGreen&graphicType=Pizza&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Blank&hatColor=PastelGreen&facialHairType=BeardLight&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=DarkBrown',
  'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Kurt&hatColor=Gray01&facialHairType=BeardLight&facialHairColor=BlondeGolden&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Close&eyebrowType=UpDown&mouthType=Default&skinColor=DarkBrown'
];

const renderCardUser = (user) => `
  <div class="card">
    <img class="avatar" src="${thumbnails[user.id - 1]}"/>
    <strong>${user.name}</strong>
    <em>- ${user.company.name}</em>
    <p>${user.company.catchPhrase}</p>
  </div>
`;

const filterUsers = async (name) =>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`).then(res => res.json())

const debounceEvent = (fn, wait = 1000, time) =>  (...args) =>
  clearTimeout(time, time = setTimeout(() => fn(...args), wait))      

function handleKeyUp(event) {
  filterUsers(event.target.value).then(users => handleRenderUsers(users))
}

function handleRenderUsers(users){
  document.getElementById('container-users').innerHTML = users.map(user =>
    renderCardUser(user)
  ).join('');
}

document.querySelector("input").addEventListener("keyup", debounceEvent(handleKeyUp, 500));

filterUsers('').then(users => handleRenderUsers(users));