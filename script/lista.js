const filmes=[
{
    titulo:'DIVERTIDAMENTE 2',
    genero:'AÇÃO',
    imagem:'../images/filme1.jpg',
    link:'https://www.google.com/search?sca_esv=7e016d8d75cfc918&sca_upv=1&rlz=1C1CHBF_pt-PTBR1115BR1115&q=divertida+mente+2&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi046uB92frSWoVskpBryHTrdWqiVbaH6EqK0Fq9hkAkqKVRfj84cRZhjamCpjPYz8LQ-IQpmKSeAeXTxtH9u0l3t2voQsa3ChJWG5bHKo9DnkW_zMtethuXjaYgiYqo_2zcWIMugU5yzzSFFtxbGoWJK-Jg_OPapRWJGFhdtMxNSvjlkxsqLDb3CatHHlI_X2GbhtOQ&sa=X&ved=2ahUKEwjs5dzh8oaHAxUFrZUCHWRtBOoQ0pQJegQIDxAB&biw=991&bih=891&dpr=1',
    sinopse:'Com um salto temporal, Riley se encontra mais velha, passando pela tão temida adolescência. Junto com o amadurecimento, a sala de controle também está passando por uma adaptação para dar lugar a algo totalmente inesperado: novas emoções.',

},
{
    titulo:'MEU MALVADO FAVORITO 4',
    genero:'INFANTIL/COMÉDIA',
    imagem:'../images/filme2.jpg',
    link:'https://www.google.com/search?q=meu+malvado+favorito+4&sca_esv=7e016d8d75cfc918&sca_upv=1&rlz=1C1CHBF_pt-PTBR1115BR1115&biw=1920&bih=919&ei=rTODZoL1Dv7L1sQPq4K3yAQ&gs_ssp=eJzj4tVP1zc0TEsrMypJtjQwYPQSy00tVchNzClLTMlXSEssyy_KLMlXMAEA8GwMrQ&oq=&gs_lp=Egxnd3Mtd2l6LXNlcnAiACoCCAAyExAuGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyExAuGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyExAuGIAEGEMYtAIYigUY6gLYAQEyExAuGIAEGEMYtAIYigUY6gLYAQEyExAuGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQIyFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQJI-hhQAFgAcAF4AZABAJgBAKABAKoBALgBAcgBAPgBAZgCAaACCagCFJgDCboGBAgBGAe6BgYIAhABGAqSBwExoAcA&sclient=gws-wiz-serp',
    sinopse:'Gru dá as boas-vindas a um novo membro da família, Gru Jr., que pretende atormentar seu pai. No entanto, sua existência pacífica logo desmorona quando um mentor do crime escapa da prisão e jura vingança contra Gru.',
        
},
{
    titulo:'GODZILLA E KONG: O NOVO IMPÉRIO',
    genero:'INFANTIL/COMÉDIA/FICÇÃO CIENTÍFICA',
    imagem:'../images/filme3.jpg',
    link:'https://www.google.com/search?q=godzilla+e+kong+o+novo+imp%C3%A9rio&sca_esv=7e016d8d75cfc918&sca_upv=1&rlz=1C1CHBF_pt-PTBR1115BR1115&biw=1920&bih=919&ei=8TyDZtH4N7jQ1sQPuJi-kAs&gs_ssp=eJzj4tVP1zc0LDE3yjEpSys2YPSST89PqcrMyUlUSFXIzs9LV8hXyMsvy1fIzC04vLIoMx8AdnAQ3A&oq=godzilla+E+&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2dvZHppbGxhIEUgKgIIADIIEC4YgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCxAuGIAEGLEDGNQCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIIEAAYgAQYsQMyFxAuGIAEGLEDGJcFGNwEGN4EGOAE2AEDSMIcUKEJWI4LcAF4AZABAJgBZqABpQKqAQMyLjG4AQPIAQD4AQGYAgWgAu4RwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBAcICExAuGIAEGLADGEMYyAMYigXYAQLCAg0QLhiABBixAxhDGIoFwgIKEC4YgAQYQxiKBcICChAAGIAEGEMYigWYAwCIBgGQBhC6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBSSBwcyLjIuNy0xoAeYMg&sclient=gws-wiz-serp',
    sinopse:'Godzilla e o todo-poderoso Kong enfrentam uma ameaça colossal escondida nas profundezas do planeta, desafiando a sua própria existência e a sobrevivência da raça humana.',
       
},
{
    titulo:'PLANETAS DOS MACACOS: O REINADO',
    genero:'AÇÃO/FICÇÃO CIENTÍFICA',
    imagem:'../images/filme4.png',
    link:'https://www.google.com/search?sca_esv=e4cf654192141469&sca_upv=1&rlz=1C1CHBF_pt-PTBR1117BR1117&q=planeta+dos+macacos+o+reinado&source=lnms&fbs=AEQNm0A_ElqRadfJ052eEZYKSIj__pYFaFHKdnGcO42W-poa4g2G1aq-21w5etE1rQobdh22zQAimTJX-VBA31gOlnTDv943qURhu0eSKCk9eVAAKRo-qwovd78yz4ZOH8JPfBc1t49w60PwKxdMtVmY1MnQ8O_9K6n-efTukxiK6Kh4N9lfXaG9epX-VdIwrW8ARapozDZ_SqgUcA77uKSeN6qfUZ9n3w&sa=X&ved=2ahUKEwi_6pO164uHAxVkrZUCHSydA-cQ0pQJegQICxAB&biw=1920&bih=953&dpr=1',
    sinopse:'Muitas sociedades de macacos cresceram desde quando César levou seu povo a um oásis, enquanto os humanos foram reduzidos a sobreviver e se esconder nas sombras.',

},
{
    titulo:'FURIOSA: UMA SAGA MAD MAX',
    genero:'AÇÃO/AVENTURA',
    imagem:'../images/filme5.jpg',
    link:'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMw1K0urysowYPTiTSstyswvTlRIy8zJTQUAlb0KKQ&q=furiosa+filme&rlz=1C1CHBF_pt-PTBR1117BR1117&oq=furi&gs_lcrp=EgZjaHJvbWUqBwgBEC4YgAQyBggAEEUYOTIHCAEQLhiABDIHCAIQABiABDIHCAMQLhiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQLhiABNIBCDI5MTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
    sinopse:'A jovem Furiosa cai nas mãos de uma grande horda de motoqueiros liderada pelo senhor da guerra Dementus. Varrendo Wasteland, eles encontram a Cidadela, presidida pelo Immortan Joe. Enquanto os dois tiranos lutam pelo domínio, Furiosa logo se vê em uma batalha ininterrupta para voltar para casa.',

},
{
    titulo:'IMACULADA',
    genero:'TERROR/MISTÉRIO',
    imagem:'../images/filme6.jpg',
    link:'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LEm3zCnJrUgxYPQSy8xNTC7NSUxJVEjLzMlNVShJLSrKLwIAALUNmQ&q=imaculada+filme+terror&rlz=1C1CHBF_pt-PTBR1117BR1117&oq=emaculada&gs_lcrp=EgZjaHJvbWUqCQgDEC4YChiABDIGCAAQRRg5MgkIARAAGAoYgAQyCQgCEAAYChiABDIJCAMQLhgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gEINDY1NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    sinopse:'Cecilia, uma jovem religiosa, se torna freira em um convento isolado na região rural italiana. Após uma gravidez misteriosa, Cecilia é atormentada por forças perversas, enquanto confronta segredos sombrios e horrores do convento.',

},
{
    titulo:'KUNG FU PANDA 4',
    genero:'COMÉDIA/AVENTURA',
    imagem:'../images/filme7.png',
    link:'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TI8vM6ssKqo0YPQSzS7NS1dIK1UoSMxLSVQwUUjLzMlNBQDs5Qxs&q=kung+fu+panda+4+filme&rlz=1C1CHBF_pt-PTBR1117BR1117&oq=KUNG+&gs_lcrp=EgZjaHJvbWUqBwgFEC4YgAQyBggAEEUYOTIMCAEQLhhDGIAEGIoFMgoIAhAuGNQCGIAEMgoIAxAuGNQCGIAEMgcIBBAuGIAEMgcIBRAuGIAEMgcIBhAAGIAEMgYIBxBFGDzSAQg0NDE1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8',
    sinopse:'Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.',

},
{
    titulo:'ATRAVÉS DA MINHA JANELA 3: OLHOS NOS OLHOS',
    genero:'ROMANCE/COMÉDIA',
    imagem:'../images/filme8.jpg',
    link:'https://www.google.com/search?sca_esv=e4cf654192141469&sca_upv=1&rlz=1C1CHBF_pt-PTBR1117BR1117&cs=0&q=Da+Minha+Janela+3:+olhos+nos+olhos&source=lnms&fbs=AEQNm0A_ElqRadfJ052eEZYKSIj__pYFaFHKdnGcO42W-poa4g2G1aq-21w5etE1rQobdh096JmTFE6GCHo3QsMg7LjOfF1-mdgpQDFf87Yp7eKpKUWL6lVljG9Y8-Te_258s1G8kIEkT_gUdnr4mGV2Aips2n15ujiQ_DjLF-5O482nYL9uikKYWzkBtZmhVrkOo0M4d-FxTBdVywDmfEsR0WBi0Dttyw&sa=X&ved=2ahUKEwiGgvat7ouHAxWWr5UCHcw8D_wQ0pQJegQIERAB&biw=1920&bih=953&dpr=1',
    sinopse:'Raquel e Ares mantêm um relacionamento à distância. Quando se reencontram durante o verão nas paisagens da Costa Brava com os amigos, ambos começam a questionar-se se a sua relação resistirá ao passar do tempo.',

},
{
    titulo:'BEEKEEPER - O PROTETOR',
    genero:'AÇÃO/THRILLER',
    imagem:'../images/filme9.jpg',
    link:'https://www.google.com/search?q=Beekeeper+-+O+Protetor&rlz=1C1CHBF_pt-PTBR1117BR1117&oq=bee&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgkIARBFGDkYgAQyDQgCEC4YxwEY0QMYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDQzODJqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8',
    sinopse:'As ações brutais de vingança de um homem assume riscos de proporções nacionais quando é revelado que ele é um ex-agente de uma organização poderosa e clandestina.',

},
{
    titulo:'CAÇA-FANTASMAS: O IMPÉRIO DO GELO',
    genero:'COMÉDIA/FANTASIA',
    imagem:'../images/filme10.jpg',
    link:'https://www.google.com/search?sca_esv=e4cf654192141469&sca_upv=1&rlz=1C1CHBF_pt-PTBR1117BR1117&cs=0&q=Ca%C3%A7a-Fantasmas:+O+Imp%C3%A9rio+do+Gelo&stick=H4sIAAAAAAAAAFWVu4_jRBzHN1l2tZc74JQTAm0VLSJCK-3GHs_4ESk6ARKP4oR00Fv2-BV77Ngzkxk71RUgKhp0Eg0S0jUIiYLmKsoTBXQ0iIqCBnF_AQUF2VvPJNtE-cxv5vfyzPd3cnT28iydmSZvke9S6IJXkiUpYzaJ4gkwAPx10NtTJ7etzFWcyCSHpesrLhpQu57HFNMGOr5HMn3etau2bA3FLEz90rQ6be_jKxaG4WZ-VGq7hzmpofbHOpMU0E51fBqZRSuBtrdAbvyi1ecryMsa2do_bUkbYZ1vUmfAbnKp_XHIPC_d1e-VmQ-k0PVZlKWtbHb5ljIVuc5HNBsikKnzbawulFaRa3vmU5lYZC9ekxqV7kcHORcGtfT-1swrnml_JKo75ghdn9jwLscC6XhmsbGsUp9nFsSpkfPdfmZaZVbs8sF5ToydXW48yRqxf74yDd0PgrbxE6LrZTXjicC1Zq8oNrmku3iJmeVFqBnhtqxguF8_SUK461_VhmG0V6_ldL6b79W_KRHW9090EUeV3PnvGi-ymb4_zDXMhpj2fv4UW8nuPtAkjFpdD8Fl1gCo7R0QIHSEvi-CNaaJJftrsLh9959__7x3Cr_64ZffB5ej1ws8n5VxtAzmMgu4z1e-DDjOxvdGRw-ulsej8cno-MFKLGN258nhzyejl65e2vin4ejWJ3gdxtGnohx_OxwdBjQdfz0cPx6q7afPB6O_B6Pj6zf62sHBo_tvDM-HNZ__Nsg4r9l8NltWPK74BQnCS7yi9WW6WqUk3v4vZ806plsv9-WKFqwOcLz4MA6iKQ_SxbKK1pgvV9V0zWJ_RSKfxQHF2YLTdTwlQZUuan7x7sPpMlpcW96y3kE4QI6LEYzCJPJQcMO4Xm5_TOSYFgTAQ5aBAHIhgMCbXuW1ZovZ9d7pthoe0zjyb67Ph28PH746uu53tmlRVPPq0eDp08df_vHZF4dnd55__s1_t4_HL7p3ekvr1tmLhfPrcxjJnOPS6jEpPMv3OFbYq1iPqS_sjtKux3yz1ai68Xe4aSQiPRZ5YUNqU4W1t9U3kSjc6iGiRbqHV_KocSsmyHEU9uJ1rt9CYmdCJUnsOmFplyuMoANh5vZYVVFHIDV7bLyEu5zKPUy7TsVtKlp7vqU8K5HukQEiPchVVsxyPEvmnsJesRUmJt4GQgpp0grHVc1hjJmlL4RCgTbQzfXmXpwVbrU8dxDcwytp75EbtQUtoBrLTYdu-1ooBFzQJmE77IDjql5xCJwmx9rqAALFbnM_kxT2I0ZhP_EU5jUCUWnvIc79SmE_XhTKFlFa6jT64XZ-c7YpzLgniau-viCC1a2vvoJovJYC19Aom40rVXM64OOosV3j4MnRm-8Fz74LLt4PKh6wMmDzyceTj8r62fd0uZpEq8kHMVn9eDT8H298GcvzBwAA&sa=X&ved=2ahUKEwiF8YCE7IuHAxX9pZUCHbfZDWYQ8sMGegUIARCBAQ&biw=1920&bih=953&dpr=1',
    sinopse:'A família Spengler retorna ao icônico quartel de Nova York, onde os Caça-Fantasmas originais atuaram em seus anos de glória. Quando a descoberta de um artefato antigo desencadeia uma força maligna, novos e antigos Caça-Fantasmas precisam se unir para proteger seu lar e salvar o mundo de uma segunda era glacial.',

},
]    
//import filmes from './filmes.json' assert { type: 'json' }
//console.log(filmes)
filmes.map((filme, index)=>{
const container=document.querySelector('.container')
const row=document.createElement('div')
row.classList.add('row')
container.append(row)
const col=document.createElement('div')
col.classList.add('col')
row.append(col)
const article=document.createElement('article')
col.append(article)
const a=document.createElement('a')
article.append(a)
a.href=(filme.link)
const img=document.createElement('img')
a.append(img)
img.src=(filme.imagem)
const h2=document.createElement('h2')
article.append(h2)
h2.innerHTML=(filme.titulo)
const p=document.createElement('p')
article.append(p)
p.innerHTML=(filme.genero)
const col2=document.createElement('div')
col2.classList.add('col')
row.append(col2)
const h6=document.createElement('h6')
col2.append(h6)
h6.innerHTML=(filme.sinopse)
})
filmes.map((filme,index)=>{
const dataList=document.querySelector('datalist')
const op=document.createElement('option')
dataList.append(op)
op.value=(filme.titulo)
})
const fv=document.querySelector('#fv')
fv.addEventListener('click',(e)=>{
const opcao=document.querySelector('#lista').value
console.log(opcao)
filmes.map((filme,index)=>{
    if(filme.titulo==opcao){
        const body=document.querySelector('body')
        const img=document.createElement('img')
        body.append(img)
        img.src=(filme.imagem)
    }
})
})
