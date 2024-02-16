
# People Analytics Serverless

Essa aplicação é uma API que faz a análise de dados da folha de pagamentos de uma empresa. Ela é capaz de calcular o **Headcount** e o **Turnover** de cada gestor da empresa.

Para sua utilização, é necessário entrar com o email do gestor e, à partir dele, é feito uma busca dos seus liderados (diretos e indiretos) e então, com esses dados, é feito o cálculo do **Turnover** e **Headcount**.

## Ferramentas utilizadas

A aplicação foi desenvolvida em Node.js, com o uso do Serverless Framework. O servidor foi desenvolvido para ser hospedado na AWS, assim como o banco de dados (PostgreSQL). Além disso, utilizei o ORM Sequelize.

## Utilização da aplicação

 Para utilizar essa aplicação, você pode utilizar um cliente de requisições HTTP de sua preferência (Insomnia, Postman, etc). Basta você adicionar o link do seu servidor AWS e acessar através dos enpoints listados abaixo.

## API

### GET `/payroll`

O endpoint lista toda a folha de pagamento da empresa.
Exemplo do retorno:
```json
{
	"data": [
		{
			"matricula": 0,
			"status": "ativo",
			"nome": "Danielle Winters",
			"email": "daniellewinters@kpis.tech",
			"emailGestor": null,
			"dataAdmissao": "2021-10-06",
			"dataRecisao": null,
			"cargo": "Diretor"
		},
	]
}
```
</br>

---

### GET `/payroll/{email}`

O endpoint lista todos os subordinados do líder informado.
Para isso, substitua no endpoint o `{email}` do líder que deseja fazer a buscar.
</br>

---

### GET `/payroll/headcount/{email}`

O endpoint calcula o headcount daquele líder para todos os meses.
Para isso, substitua no endpoint o `{email}` do líder que deseja fazer a buscar.
Exemplo do retorno:
```json
{
	"headcount": [
		{
			"month": "2021-03",
			"count": 17
		},
		{
			"month": "2021-04",
			"count": 18
		},
	]
}
```
</br>

---

### GET `/payroll/turnover/{email}`

O endpoint calcula o turnover daquele líder para todos os meses.
Para isso, substitua no endpoint o `{email}` do líder que deseja fazer a buscar.
Exemplo do retorno:
```json
{{
	"turnover": [
		{
			"month": "2021-05",
			"value": 0
		},
		{
			"month": "2021-06",
			"value": 0.047619047619047616
		},
	]
}
```
</br>

---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>
