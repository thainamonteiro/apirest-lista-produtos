const mongoose = require('mongoose');

//Importando o model de Product
const Product = mongoose.model('Product');

module.exports = {

    //Lista todos os registros do banco
    async index(req, res) {

        const { page = 1 } = req.query;

        //async await - Faz com que ele executa a próxima linha apenas quando ele finalizar toda a busca no banco de dados.
        //Paginate: ({onde estariam os filtros, where etc..}, {page: pagina onde estamos, limit: qtd máxima que será mostrado})
        const products = await Product.paginate({}, {page: page, limit: 10});

        return res.json(products)
    },

    async store(req, res) {

        const product = await Product.create(req.body);

        return res.json(product);
    },

    async show(req, res) {

        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res) {

        console.log(req.body)

        //new: true = Faz retornar o registro após o update, ou seja, com os dados atualizados;
        const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res) {

        await Product.findByIdAndDelete(req.params.id);

        return res.json('OK');
    }
};