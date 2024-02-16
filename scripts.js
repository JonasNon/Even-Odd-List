let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
  usersWord = element.value

  // console.log(usersWord)
}

// ...more code here...updateWord()

function handleSubmit() {
  let newListItem = document.createElement('li')
  // newListItem.createTextNode
  newListItem.innerHTML = usersWord
  // console.log(newListItem)
  console.log(evenList)

  /* compare remainder to 0 to see if even or not */
  if(usersWord.length % 2 === 0) {
      /*put word in even lists*/
      evenList.appendChild(newListItem)
      // console.log(evenList)
      console.log('hereree')
    } else {
      /*put word in odd list*/
      oddList.appendChild(newListItem)
      console.log('odd')

      }

  console.log(evenList)

  usersWord = ""
  document.getElementById("even-odd-form").reset()
}