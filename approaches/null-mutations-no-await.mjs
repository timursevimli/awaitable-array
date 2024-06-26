export default function nullMutationsNoAwait (resolve) {
  this.then = null
  let counter = this.length
  for (let i = 0; i < this.length; i++) {
    this[i].then(value => {
      this[i] = value
      if (--counter === 0) resolve(this)
    })
  }
}
