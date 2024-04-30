class Fila {
  constructor() {
    this.elementos = []
  }

  inserir_elemento(elemento) {
    this.elementos.push(elemento)
  }

  remove_first_element() {
    this.elementos.shift()
  }
}

let ordemNumeros = new Fila()

ordemNumeros.inserir_elemento('A')
ordemNumeros.inserir_elemento('B')
ordemNumeros.inserir_elemento('C')
ordemNumeros.inserir_elemento('D')
ordemNumeros.inserir_elemento('E')
ordemNumeros.inserir_elemento('F')
ordemNumeros.inserir_elemento('G')
ordemNumeros.inserir_elemento('H')
ordemNumeros.inserir_elemento('I')
ordemNumeros.inserir_elemento('J')

console.log(ordemNumeros)

ordemNumeros.remove_first_element()

console.log(ordemNumeros)

class Pilha {
  constructor() {
    this.elementos = []
  }

  inserir_elememento_topo(elemento) {
    this.elementos.push(elemento)
  }

  remover_elemento_topo() {
    this.elementos.pop()
  }
}

let ordemPilha = new Pilha()

ordemPilha.inserir_elememento_topo('A')
ordemPilha.inserir_elememento_topo('B')
ordemPilha.inserir_elememento_topo('C')
ordemPilha.inserir_elememento_topo('D')
ordemPilha.inserir_elememento_topo('E')
ordemPilha.inserir_elememento_topo('F')
ordemPilha.inserir_elememento_topo('G')
ordemPilha.inserir_elememento_topo('H')
ordemPilha.inserir_elememento_topo('I')
ordemPilha.inserir_elememento_topo('J')

console.log(ordemPilha)

ordemPilha.remover_elemento_topo()
ordemPilha.remover_elemento_topo()
ordemPilha.remover_elemento_topo()

console.log(ordemPilha)
