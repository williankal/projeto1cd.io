document.addEventListener('DOMContentLoaded', function() {
  
  let params = coDesExtract()
  let value = params['key']
  let value2 = params['pai']
  console.log(value)
  let db = coDesConnect('https://projeto-1-co.firebaseio.com/')

  db.download('/', function(data) {
  	context=data
    coDesReplace('.menu', context)

    context = data['portfolio'][value2]['projetos'][value]
    coDesReplace('.conteudo-proj',context)

    context = data['projetos'][value]
    coDesReplace('.projeto-img',context)
    console.log(context)

    

    })
})