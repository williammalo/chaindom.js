### Chaindom ###
A very simple library that allows chaining on native dom api's
It is based-on / inspired-by [chainvas by lea verou](http://leaverou.github.io/chainvas/) and [chainify by thingsinjars](https://gist.github.com/thingsinjars/1466219).

example of syntax (stolen from https://gist.github.com/thingsinjars/1466219) :

    document.createElement('a')
      .prop({
          'href': 'http://140byt.es/',
          'title': 'tiny awsm'
      })
      .prop('innerHTML', '140byt.es')
      .setAttribute('data-monkeys', '∞')
      .addEventListener('click', function(){ alert('Urk! Alert!')}, false)